import React from "react";
import {
  Action,
  AppState,
  Dispatch
} from "./Interfaces";
import { useImmerReducer } from 'use-immer';



export enum ActionType {
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
  ethersProvider: null,
  loomObj: null,
  loomConnectionInfo: null,
  ensAddress: '--'
};




  
export function appReducer (draft:any , action:any) {
  switch (action.type){
    case 'field': {
      draft[action.fieldName] = action.payload;
      return;
    }
    case 'set_name': {
      draft.name =  action.payload;
      return;
    } 
    case 'clear': {
     draft.name = '';
     return;
    } 
    default: {
      console.error('default reducer met, likely an error on action.type called');
      return;
    }
  }
}



export const StateContext = React.createContext<AppState>(initialState);
export const DispatchContext = React.createContext<Dispatch| null>(null);


export const Store = React.createContext<AppState| any>(initialState);

function reducer(state: AppState, action: Action| any): AppState {
  
  switch (action.type) {
    case ActionType.SET_SELECTED_ETH_ADDR:
      return {
        ...state, selectedEthAddr: action.payload
      }
    case ActionType.SET_ETH_WEB3:
      return {
        ...state, ethWeb3: action.payload
      }
    case ActionType.SET_ETH_BALANCE:
      return {
        ...state, ethBalance: action.payload
      }
    case ActionType.SET_INJECTED_PROVIDER:
        return {
          ...state, injectedProvider: action.payload
      }
    case ActionType.SET_ETHERS_PROVIDER:
        return {
          ...state, ethersProvider: action.payload
      }
    case ActionType.SET_LOOM_OBJ:
        return {
          ...state, loomObj: action.payload
      }
    case ActionType.SET_LOOM_CONNECTION_INFO:
      return {
        ...state, loomConnectionInfo: action.payload
      }
    case ActionType.SET_ENS_ADDRESS:
      return {
        ...state, ensAddress: action.payload
      }
    default:
      return state;
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

