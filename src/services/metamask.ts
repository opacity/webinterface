import opacityABI from "../contracts/opacity.abi.json";

const CONTRACT_ADDRESS = "0x77599d2c6db170224243e255e6669280f11f1473";

declare global {
  interface Window {
    ethereum: any;
    web3: any;
    Web3: any;
  }
}

const isInstalled = !!window.ethereum;

const fetchDefaultMetamaskAccount = () =>
  isInstalled
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
    const web3 = window.web3;
    const opacityContract = web3.eth.contract(opacityABI).at(CONTRACT_ADDRESS);

    opacityContract.transfer(
      to,
      web3.toWei(cost, "ether"),
      {
        from
      },
      (err, res) => {
        err ? reject(err) : resolve(res);
      }
    );
  });

export default {
  sendTransaction,
  fetchDefaultMetamaskAccount,
  getTransactionNonce
};
