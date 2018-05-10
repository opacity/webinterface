import _ from "lodash";
import axios from "axios";

import FileProcessor from "utils/file-processor";
import Encryption from "utils/encryption";
import { API, IOTA_API } from "config";

const axiosInstance = axios.create({
  timeout: 200000
});

const adaptChunkToParams = (chunk, genesisHash) => ({
  idx: chunk.idx,
  data: chunk.data,
  // TODO: Move this up a level so chunks don't have to be addapted.
  hash: genesisHash
});

const uploadFile = (chunks, fileName, handle) => {
  console.log("UPLOADING FILE TO BROKER NODES");

  const genesisHash = Encryption.genesisHash(handle);
  const numChunks = chunks.length;

  // Appends meta chunk

  /*return createUploadSession( //abstract this out
    API.BROKER_NODE_A,
    numChunks,
    genesisHash,
    storageLengthInYears
  )*/
  //.then(({ alphaSessionId, betaSessionId }) =>
  Promise.all([
    //sendToAlphaBroker(alphaSessionId, chunks, genesisHash),
    //sendToBetaBroker(betaSessionId, chunks, genesisHash),
    //getPaymentStatus(API.BROKER_NODE_A, alphaSessionId)
  ])
  //)
    .then(() => {
      return {
        numberOfChunks: numChunks,
        handle,
        fileName
      };
    });
};

const createUploadSession = (
  host,
  numChunks,
  genesisHash,
  storageLengthInYears
) =>
  new Promise((resolve, reject) => {
    axiosInstance
      .post(`${host}${API.V2_UPLOAD_SESSIONS_PATH}`, {
        fileSizeBytes: FileProcessor.fileSizeFromNumChunks(numChunks),
        numChunks,
        genesisHash,
        betaIp: API.BROKER_NODE_B,
        storageLengthInYears
      })
      .then(({data}) => {
        console.log("UPLOAD SESSION SUCCESS: ", data);
        const {id: alphaSessionId, betaSessionId} = data;
        const {invoice} = data;
        resolve({alphaSessionId, betaSessionId, invoice});
      })
      .catch(error => {
        console.log("UPLOAD SESSION ERROR: ", error);
        reject(error);
      });
  });

const sendChunksToBroker = (brokerUrl, chunks) =>
  new Promise((resolve, reject) => {
    axiosInstance
      .put(brokerUrl, {chunks})
      .then(response => {
        console.log("SENT CHUNK TO BROKER: ", response);
        resolve(response);
      })
      .catch(error => {
        console.log("ERROR SENDING CHUNK TO BROKER:", error);
        reject();
      });
  });

const sendFileToBroker = (brokerUrl, genesisHash, chunks) => {
  const batches = [_.slice(chunks, 0, chunks.length)];

  const batchRequests = batches.map(
    batch =>
      new Promise((resolve, reject) => {
        const chunksToParams = batch.map(chunk =>
          adaptChunkToParams(chunk, genesisHash)
        );
        Promise.all(chunksToParams).then(chunksParams => {
          sendChunksToBroker(brokerUrl, chunksParams).then(resolve);
        });
      })
  );

  return Promise.all(batchRequests);
};

const sendToAlphaBroker = (sessionId, chunks, genesisHash) =>
  new Promise((resolve, reject) => {
    sendFileToBroker(
      `${API.BROKER_NODE_A}${API.V2_UPLOAD_SESSIONS_PATH}/${sessionId}`,
      genesisHash,
      chunks
    ).then(resolve);
  });

const sendToBetaBroker = (sessionId, chunks, genesisHash) =>
  new Promise((resolve, reject) => {
    sendFileToBroker(
      `${API.BROKER_NODE_B}${API.V2_UPLOAD_SESSIONS_PATH}/${sessionId}`,
      genesisHash,
      [...chunks].reverse()
    ).then(resolve);
  });

const getPaymentStatus = (host, id) => { //change to confirmPaid
  console.log("GETTING PAYMENT STATUS")
  new Promise((resolve, reject) => {
    axiosInstance
      .get(`${host}${API.V2_UPLOAD_SESSIONS_PATH}/${id}`)
      .then(response => {
        console.log("PAYMENT REQUEST SUCCESS:", response);
        resolve(response.data.paymentStatus);
      })
      .catch(error => {
        console.log("PAYMENT REQUEST FAILED:", error);
        reject();
      });
  });
};

const initializeUploadSession = (chunks, fileName, handle) => {
  const host = API.BROKER_NODE_A;
  const genesisHash = Encryption.genesisHash(handle);
  const numChunks = chunks.length;
  const storageLengthInYears = 999; //TODO make this a real thing

  createUploadSession( //abstract this out
    host,
    numChunks,
    genesisHash,
    storageLengthInYears
  )
    .then(({ alphaSessionId, betaSessionId, invoice }) => {
      return {
        alphaSessionId,
        betaSessionId,
        invoice,
        numberOfChunks: numChunks,
        handle,
        fileName,
      };
    });
};

export default {
  uploadFile,
  getPaymentStatus,
  initializeUploadSession
};
