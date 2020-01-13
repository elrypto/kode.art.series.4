import React, { useContext } from 'react'
import useLoadLoomConfig from '../hooks/useLoadLoomConfig'
import { useContextState, useDispatch } from '../hooks/useAppContext';
import { AppState } from '../../common/Interfaces';
import useLoom from '../hooks/useLoom';
import { Button } from 'antd';
import { decorateLoomWithMiddleware, notifyError, createLoomContractInstance } from '../../common/Actions';
import SimpleStore from './../../truffle/build/SimpleStore.json';

export default function LoomTest () {
  const state: AppState = useContextState();
  const dispatch = useDispatch();
  useLoadLoomConfig();
  useLoom();  
  

  console.log('loomConfig:', state.loomConnectionInfo);
  console.log('loomObj:', state.loomObj);

  
  return (
   <React.Fragment>
     <Button
      type="dashed"
      onClick={() => {
        console.log('decorate()')
        if (state.loomObj){
          decorateLoomWithMiddleware(state.loomObj, dispatch);
        }else {
          notifyError('Loom object is currently null')
        }
      }}
     >
       Decorate loom with middleware
     </Button>

     <Button
      type="dashed"
      onClick={() => {
        console.log('loading contract...')
        if (state.loomObj){
          let c = createLoomContractInstance(state.loomObj, SimpleStore);
        }else {
          notifyError('Loom object is currently null')
        }
      }}
     >
       Load SimpleStore Contract
     </Button>
   </React.Fragment>
  )
}

