import opacityABI from "../contracts/opacity.json";

const CONTRACT_ADDRESS = "0x77599d2c6db170224243e255e6669280f11f1473";

declare global {
  interface Window {
    ethereum: any;
    web3: any;
    Web3: any;
  }
}

const metamaskExists = window.ethereum && window.ethereum._metamask;

const fetchDefaultMetamaskAccount = () =>
  metamaskExists
    ? window.ethereum.enable().then(accounts => accounts[0])
    : Promise.reject(new Error("Metamask error fetching address"));

const getTransactionNonce = account =>
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
      const opacityContract = web3.eth
        .contract(opacityABI)
        .at(CONTRACT_ADDRESS); // eslint-disable-line

      opacityContract.transfer(
        to,
        cost,
        {
          from
        },
        (err, res) => {
          console.log(err || res);
          err ? reject(err) : resolve(res);
        }
      );
    } else {
      reject(new Error("Metamask is not installed"));
    }
  });

export default {
  sendTransaction,
  fetchDefaultMetamaskAccount,
  getTransactionNonce
};
