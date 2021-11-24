import Web3 from "web3";
import SimpleStorage from "./contracts/SimpleStorage.json";
import Tree from "./contracts/Tree.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:7545"),
  },
  contracts: [SimpleStorage, Tree],
  events: {
    SimpleStorage: ["StorageSet"],
    Tree: ["Aborted", "PurchaseConfirmed", "ItemReceived"]
  },
};

export default options;