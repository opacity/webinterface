const sendTransaction = ({ cost, to, gasPrice }) =>
  new Promise((resolve, reject) => {
    if (window.ethereum) {
      const ethereum = window.ethereum;
      const Web3 = window.Web3;
      const web3 = new Web3(ethereum);
      try {
        ethereum.enable().then(accounts => {
          const from = accounts[0];
          web3.eth.sendTransaction(
            {
              from,
              to,
              gasPrice,
              value: "1000000000000000000" // cost.toString()
            },
            (err, res) => {
              err ? reject(err) : resolve();
            }
          );
        });
      } catch (error) {
        reject(error);
      }
    } else if (window.web3) {
      const Web3 = window.Web3;
      const web3 = new Web3(window.web3.currentProvider);
      web3.eth.getAccounts().then(accounts => {
        const from = accounts[0];

        web3.eth.sendTransaction(
          {
            to,
            from,
            value: cost.toString()
          },
          (err, res) => {
            err ? reject(err) : resolve();
          }
        );
      });
    } else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  });

export default {
  sendTransaction
};
