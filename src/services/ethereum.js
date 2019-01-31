import opacityABI from "../contracts/opacity";

const CONTRACT_ADDRESS = "0x77599d2c6db170224243e255e6669280f11f1473";

const metamaskExists = window.ethereum && window.ethereum._metamask;

const fetchDefaultMetamaskAccount = () =>
  metamaskExists
    ? window.ethereum.enable().then(accounts => accounts[0])
    : Promise.reject(new Error("Metamask error fetching address"));

const isMetamaskApproved = () =>
  metamaskExists
    ? window.ethereum._metamask.isApproved()
    : Promise.reject(new Error("Metamask not approved"));

const getTransactionNonce = (account, callback) =>
  new Promise((resolve, reject) => {
    window.web3.eth.getTransactionCount(account, (err, nonce) => {
      err ? reject(err) : resolve(nonce);
    });
  });

const sendTransaction = ({ cost, from, to, gasPrice, nonce }) =>
  new Promise((resolve, reject) => {
    if (metamaskExists) {
      const ethereum = window.ethereum;
      const Web3 = window.Web3;
      const web3 = new Web3(ethereum);
      const myContract = web3.eth.contract(opacityABI).at(CONTRACT_ADDRESS); // eslint-disable-line
      console.log("xxxxxxxxxx", opacityABI);
      const data = myContract.transfer(
        to,
        cost,
        {
          from
        },
        (err, res) => {
          console.log(err ? err : res);
          err ? reject(err) : resolve(res);
        }
      );
    }
    // } else if (window.web3) {
    // }
  });

// const blah = ({ cost, to, gasPrice }) =>
// new Promise((resolve, reject) => {
// if (metamaskExists) {
// const ethereum = window.ethereum;
// const Web3 = window.Web3;
// const web3 = new Web3(ethereum);
// try {
// ethereum.enable().then(accounts => {
// const from = accounts[0];
// const myContract = new web3.eth.Contract(abi, contractAddress);
// const data = myContract.methods.transfer(to, cost).encodeABI();
// const rawTx = {
// nonce: web3.utils.toHex(nonce),
// gasPrice: "0x3b9aca00",
// gasLimit: web3.utils.toHex(gasLimit),
// to: contractAddress,
// value: "0x00",
// data: data
// };
// const tx = new Tx(rawTx);
// tx.sign(privateKey);
// const serializedTx = "0x" + tx.serialize().toString("hex");

// web3.eth
// .sendSignedTransaction(serializedTx)
// .on("transactionHash", function(txHash) {})
// .on("receipt", function(receipt) {
// console.log("receipt:" + receipt);
// })
// .on("confirmation", function(confirmationNumber, receipt) {
// //console.log("confirmationNumber:" + confirmationNumber + " receipt:" + receipt);
// })
// .on("error", function(error) {});
// web3.eth.sendTransaction(
// {
// from,
// to,
// gasPrice,
// value: "1000000000000000000" // cost.toString()
// },
// (err, res) => {
// err ? reject(err) : resolve();
// }
// );
// });
// } catch (error) {
// reject(error);
// }
// } else if (window.web3) {
// const Web3 = window.Web3;
// const web3 = new Web3(window.web3.currentProvider);
// web3.eth.getAccounts().then(accounts => {
// const from = accounts[0];

// web3.eth.sendTransaction(
// {
// to,
// from,
// value: cost.toString()
// },
// (err, res) => {
// err ? reject(err) : resolve();
// }
// );
// });
// } else {
// console.log(
// "Non-Ethereum browser detected. You should consider trying MetaMask!"
// );
// }
// });

export default {
  sendTransaction,
  isMetamaskApproved,
  fetchDefaultMetamaskAccount,
  getTransactionNonce
};
