import Web3 from "web3";
import { Web3Provider } from "ethers/providers";

/**
|--------------------------------------------------
|  Interfaces
|--------------------------------------------------
*/
export type Dispatch = React.Dispatch<Action>;


export interface AppState {
  selectedEthAddr: string;
  ethWeb3: Web3| null;
  ethBalance: string;
  injectedProvider: any;
  ethersProvider: Web3Provider;
  loomObj: LoomObject| null;
  loomConnectionInfo: LoomConnectionInfo| null;
  ensAddress: string;
}


export interface Action {
  type: string; //enum from Store.ActionType
  payload: any;
  fieldName?: string;
}


export interface LoomConnectionInfo {
  networkAlias: string;  // LOCAL_DEV | TEST | EXTDEV | PROD
  writeUrl: string;    // 'ws://127.0.0.1:46658/websocket';
  readUrl: string;    //  'ws://127.0.0.1:46658/queryws';
  networkId : string; //  'default' 
}

export interface LoomObject {
  contract: any;
  client: any;
  privateKey: Uint8Array|any;
  publicKey: Uint8Array|any;
  currentUserAddress: string;
  web3?: any;
  currentNetwork: string;
  ethersProvider: any;

  connectionInfo: LoomConnectionInfo|any;
}

