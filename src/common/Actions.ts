import _ from "lodash";
import { toast } from "react-toastify";
import Axios from "axios";
import { ethers } from 'ethers';
import { Web3Provider } from "ethers/providers";
import { Dispatch, LoomObject } from './Interfaces';
import { ActionType } from "./Store";
import {
  NonceTxMiddleware,
  SignedEthTxMiddleware,
  CryptoUtils,
  Client,
  LoomProvider,
  Address,
  LocalAddress,
  Contracts,
  EthersSigner,
  createDefaultTxMiddleware
} from 'loom-js'


export const notify = (msg: string, success?: boolean) => {
  !success ? toast(msg) : toast.success(msg, { autoClose: false });
};


export const notifyError = (msg: string) => {
  toast.error(msg, { autoClose: false });
};


export const notifyWarn = (msg: string) => {
  if (!toast.isActive("nfId")) {
    toast.warn(msg, { toastId: "nfId" });
  }
};

/*
  direct return
*/
export const rpcStatus = async():Promise<boolean> => {
  try{
    const result = await Axios.get('/api/v1/projects');
    return true;
  }catch (error){
    console.error("Could not connect to server on rpc check");
    return false;
  }
}



export const dispatchProviderAndAddr = (provider: Web3Provider, selectedAddr: string, dispatch: Dispatch) => {
  dispatch({
    type: ActionType.SET_ETHERS_PROVIDER,
    payload: provider
  });
  
  dispatch({
    type: ActionType.SET_SELECTED_ETH_ADDR,
    payload: selectedAddr
  });
}


export const dispatchEthRelated = (convertedBalance: string, ensAddress: string, dispatch: Dispatch) => {
  dispatch({
    type: ActionType.SET_ETH_BALANCE,
    payload: convertedBalance
  });

  dispatch({
    type: ActionType.SET_ENS_ADDRESS,
    payload: ensAddress
  });
}

export const ethBalance = async(ethersProvider: Web3Provider, address: string): Promise<string> => {
  let balance = await ethersProvider.getBalance(address);
  return await ethers.utils.formatEther(balance);
}


export const decorateLoomWithMiddleware = async(loom: LoomObject, dispatch: Dispatch) => {
  const signer = loom.web3.getSigner();
  const ethAddress = await signer.getAddress();

  const to = new Address('eth', LocalAddress.fromHexString(ethAddress));
  const from = new Address('extdev-plasma-us1', loom.publicKey);
  loom.client.txMiddleware = createDefaultTxMiddleware(loom.client,loom.privateKey);

  const addressMapper = await Contracts.AddressMapper.createAsync(loom.client, from);

  if (await addressMapper.hasMappingAsync(to)) {
    console.log('Mapping already exists.')
  } else {
    console.log('Adding a new mapping.')
    const ethersSigner = new EthersSigner(signer)
    await addressMapper.addIdentityMappingAsync(from, to, ethersSigner)
  }

  loom.loomProvider = new LoomProvider(loom.client, loom.privateKey);
  loom.loomProvider.callerChainId = 'eth';
  loom.loomProvider.setMiddlewaresForAddress(to.local.toString(),
    [new NonceTxMiddleware(to, loom.client),
    new SignedEthTxMiddleware(signer)]
  );

  dispatch({
    type: ActionType.SET_LOOM_OBJ,
    payload: loom
  });
}


export const createLoomContractInstance = async(loom: LoomObject, contract: any) => {
  const network = await loom.web3.getNetwork();
  console.log('nework', network);
  let address = contract.networks[network.chainId].address;

  if (!address) {
    console.error(
      "not a valid network: , network id was:",
      loom.currentNetwork,
      network.chainId
    );
    throw Error("Contract not deployed on DAppChain (network id error)");
  }
  return new ethers.Contract(address, contract.abi, loom.web3.getSigner());
}



