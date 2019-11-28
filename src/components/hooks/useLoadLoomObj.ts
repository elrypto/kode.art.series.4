import React from 'react';
import { ActionType } from '../../common/Store';
import { LoomObject } from '../../common/Interfaces';
import useLoomWithConfig  from './useLoadLoomConfig';
import useLoomEthers from './useLoom';
import useAppContext from './useAppContext';

export default function useLoadLoomObj(){
  const { state, dispatch } = useAppContext();
  const loomObj = useLoomEthers();

  React.useEffect(() => {
   
    console.log("loom obj:", loomObj);
    
  }, [loomObj]);

}