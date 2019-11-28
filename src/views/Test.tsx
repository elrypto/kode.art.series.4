import React from 'react'
import useInjectedWeb3 from '../components/hooks/useInjectedWeb3';
import useLoadInjectedEthersState from '../components/hooks/useLoadInjectedEthersState';
import  EnsTest from './../components/test/EnsTest';
import PortisTest from '../components/PortisConnect';
import SuperSimpleAcctDisplay from './../components/test/SuperSimpleAcctDisplay';
import useAppContext from '../components/hooks/useAppContext';



export default function Test() {
  const { state, dispatch } = useAppContext();
  useInjectedWeb3();
  useLoadInjectedEthersState();
  
  console.log("state:", state);
  
  return (
    <div className="offset">
      <div className="jumbotron">
        <div className="narrow">
          <div className="col-12">
            <h3 className="heading text-center">==--* test  +___=-`</h3>
            <div className="heading-underline"></div>
           
              <SuperSimpleAcctDisplay />

              <EnsTest />

              <PortisTest />

          </div>
        </div>
      </div>
    </div>
  )
}
