import React from 'react'
import Portis from '@portis/web3';
import { Button } from 'antd';
import { ActionType } from '../common/Store';
import useLoadInjectedEthersState from './hooks/useLoadInjectedEthersState';
import { useDispatch } from './hooks/useAppContext';



export default function PortisConnect() {
  const dispatch  = useDispatch();
  useLoadInjectedEthersState();

  return (
    <div>      
      <Button
        type="dashed"
        onClick={ async() => {
          console.log('connecting to portis... ');
          let KEY_FROM_CONFIG = '';
          if (process.env.REACT_APP_PORTIS_KEY){
            KEY_FROM_CONFIG = process.env.REACT_APP_PORTIS_KEY;
          }
          
          const portis = new Portis(KEY_FROM_CONFIG, 'mainnet');
             
          dispatch({
            type: ActionType.SET_INJECTED_PROVIDER,
            payload: portis.provider
          });
        }}
      >
        Connect to Portis
      </Button>
    </div>
  )
}


