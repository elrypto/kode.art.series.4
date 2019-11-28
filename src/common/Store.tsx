import React from "react";
import {
  Action,
  AppState,
  Dispatch
} from "./Interfaces";
import { useImmerReducer } from 'use-immer';
import { Web3Provider } from "ethers/providers";


export enum ActionType {
  SET_FIELD = "kodeart/SET_FIELD",
  SET_SELECTED_ETH_ADDR = "kodeart/SET_SELECTED_ETH_ADDR",
  SET_ETH_WEB3 = "kodeart/SET_ETH_WEB3",
  SET_ETH_BALANCE = "kodeart/SET_ETH_BALANCE",
  SET_INJECTED_PROVIDER = "kodeart/SET_INJECTED_PROVIDER",
  SET_ETHERS_PROVIDER = "kodeart/SET_ETHERS_PROVIDER",
  SET_LOOM_OBJ = "kodeart/SET_LOOM_OBJ",
  SET_LOOM_CONNECTION_INFO = "kodeart/SET_LOOM_CONNECTION_INFO",
  SET_ENS_ADDRESS = "kodeart/SET_ENS_ADDRESS"
}


const initialState: AppState = {
  selectedEthAddr: '--',
  ethWeb3: null,
  ethBalance: '--',
  injectedProvider: null,
  ethersProvider: {} as Web3Provider,
  loomObj: null,
  loomConnectionInfo: null,
  ensAddress: '--',
  testVal: ':('
};


export const StateContext = React.createContext<AppState>(initialState);
export const DispatchContext = React.createContext<Dispatch>({} as Dispatch);


function appReducer(draft: any, action: Action| any) {
  switch (action.type) {
    case ActionType.SET_FIELD:{
      draft[action.fieldName] = action.payload;
      return;
    }
    case ActionType.SET_SELECTED_ETH_ADDR: {
      draft.selectedEthAddr = action.payload;
      return;
    }
    case ActionType.SET_ETH_WEB3: {
      draft.ethWeb3 = action.payload;
      return;
    }
    case ActionType.SET_ETH_BALANCE: {
      draft.ethBalance = action.payload
      return;
    }
    case ActionType.SET_INJECTED_PROVIDER: {
      draft.injectedProvider = action.payload;
      return;
    }
    case ActionType.SET_ETHERS_PROVIDER: {
      draft.ethersProvider = action.payload;
      return;  
    }
    case ActionType.SET_LOOM_OBJ: {
      draft.loomObj = action.payload;
      return;
    }
    case ActionType.SET_LOOM_CONNECTION_INFO: { 
      draft.loomConnectionInfo = action.payload;
      return;
    }
    case ActionType.SET_ENS_ADDRESS: {
      draft.ensAddress = action.payload;
      return;
    }
    default:
      console.error('default reducer met, likely an error on action.type called');
      return;
  }
}


export function AppContextProvider(props: any): JSX.Element {
  const [state, dispatch] = useImmerReducer(appReducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {props.children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

