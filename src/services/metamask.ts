import opacityABI from "../contracts/opacity.abi.json";

const CONTRACT_ADDRESS = "0x77599d2c6db170224243e255e6669280f11f1473";

declare global {
  interface Window {
    ethereum: any;
    web3: any;
    Web3: any;
  }
}

const isNewVersion = !!window.ethereum;
const isLegacyVersion = !!window.web3;
const isInstalled = isNewVersion || isLegacyVersion;

const fetchDefaultMetamaskAccount = () => {
  if (isNewVersion) {
    return window.ethereum.enable().then(accounts => accounts[0]);
  } else if (isLegacyVersion) {
    const account = window.web3.eth.getAccounts(accounts => accounts[0]);
    return Promise.resolve(account);
  } else {
    return Promise.reject(new Error("Metamask error fetching address"));
  }
};

const getTransactionNonce = account =>
  new Promise((resolve, reject) => {
    window.web3.eth.getTransactionCount(account, (err, nonce) => {
      err ? reject(err) : resolve(nonce);
    });
  });

const sendTransaction = ({ cost, from, to, gasPrice, nonce }) =>
  new Promise((resolve, reject) => {
    const web3 = new window.Web3(
      isNewVersion ? window.ethereum : window.web3.currentProvider
    );
    const opacityContract = web3.eth.contract(opacityABI).at(CONTRACT_ADDRESS);

    opacityContract.transfer(
      to,
      web3.toWei(cost, "ether"),
      {
        from,
        gas: 60000,
        gasPrice: web3.toWei(gasPrice, "gwei")
      },
      (err, res) => {
        err ? reject(err) : resolve(res);
      }
    );
  });

export default {
  isInstalled,
  sendTransaction,
  fetchDefaultMetamaskAccount,
  getTransactionNonce
};
