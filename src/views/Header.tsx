import React from 'react';
import { useContextState } from '../components/hooks/useAppContext';


export default function Header() {
  const state  = useContextState();

  return (
    <React.Fragment>
       <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="/"><p>(k)ode.art</p></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarResponsive">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarResponsive" className="collapse navbar-collapse" >
              <ul className="navbar-nav ml-auto">
      
               <li className="nav-item">
                  <a className="nav-link" href="/">home</a>
                </li>
              
                <li className="nav-item">
                  <a className="nav-link active" href="/test">test</a>
                </li>

              </ul>
            </div>
        </nav>
    </React.Fragment>
  )
}

