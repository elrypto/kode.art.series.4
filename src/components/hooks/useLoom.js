import React from "react";
import { CryptoUtils, Client, LoomProvider, LocalAddress } from "loom-js";
import { ethers } from 'ethers';
import {ActionType } from "../../common/Store";
import useAppContext from "./useAppContext";

/* based on loom truffle example, contract.js file, adapted to react hooks
   https://github.com/loomnetwork/truffle-dappchain-example/blob/master/src/contract.js
*/

//default connection info, if not is passed in
export const DEFAULT_LOCAL_DEV = {
  networkAlias: "DEFAULT_LOCAL_DEV",
  writeUrl: "ws://127.0.0.1:46658/websocket",
  readUrl: "ws://127.0.0.1:46658/queryws",
  networkId: "default"
};


export default function useLoom(connectionInfo) {
  const { state, dispatch } = useAppContext();

  const Loom = {
    contract: null,
    client: null,
    privateKey: null,
    publicKey: null,
    currentUserAddress: "",
    web3: null,
    instance: null,
    currentNetwork: "",
    connectionInfo: null
  };

 

  React.useEffect(() => {
    const initialize = async () => {
      Loom.connectionInfo = state.loomConnectionInfo;
      await createClient();
      Loom.currentUserAddress = LocalAddress.fromPublicKey(
        Loom.publicKey
      ).toString();
      Loom.web3 = new ethers.providers.Web3Provider(new LoomProvider(Loom.client, Loom.privateKey));
      //Loom.web3 = new Web3(new LoomProvider(Loom.client, Loom.privateKey));
           
      dispatch ({
        type: ActionType.SET_LOOM_OBJ,
        payload: Loom
      })

    };
    if (state.loomConnectionInfo){
      initialize();
    }
  
  }, [state.loomConnectionInfo]);


  async function createClient() {
    Loom.privateKey = CryptoUtils.generatePrivateKey();
    Loom.publicKey = CryptoUtils.publicKeyFromPrivateKey(Loom.privateKey);
    Loom.client = new Client(
      Loom.connectionInfo.networkId,
      Loom.connectionInfo.writeUrl,
      Loom.connectionInfo.readUrl
    );

    Loom.client.on("error", msg => {
      console.error("Error on connect to client", msg);
      console.warn("Please verify if loom command is running");
    });
  }

  
}
