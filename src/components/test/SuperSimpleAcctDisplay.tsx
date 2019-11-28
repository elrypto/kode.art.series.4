import React from 'react'
import { useContextState } from '../hooks/useAppContext';


export default function SuperSimpleAcctDisplay() {
  const state  = useContextState();

  return (
    <React.Fragment>
      <div>Ethereum</div>

      <div className="row seeMe"> 
        <div className="col-md-8">
          {state.ensAddress ? state.ensAddress : state.selectedEthAddr }
        </div>
        <div className="col-md-4">
          {state.ethBalance}
        </div>
      </div>
    </React.Fragment>
  );
}


