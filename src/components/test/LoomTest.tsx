import React, { useContext } from 'react'
import useLoadLoomConfig from '../hooks/useLoadLoomConfig'
import { useContextState } from '../hooks/useAppContext';
import { AppState } from '../../common/Interfaces';
import useLoom from '../hooks/useLoom';


export default function LoomTest () {
  const state: AppState = useContextState();
  useLoadLoomConfig();
  useLoom();  
  

  console.log('loomConfig:', state.loomConnectionInfo);
  console.log('loomObj:', state.loomObj);

  
  return (
   <React.Fragment>

   </React.Fragment>
  )
}

