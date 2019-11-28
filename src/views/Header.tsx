import React from 'react';
import { useContextState } from '../components/hooks/useAppContext';
import { Link } from '@reach/router';


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
                    <Link to="/">home</Link>
                </li>

                <li className="nav-item">
                  <Link to="/gettingStarted">get started</Link>
                </li>

                <li className="nav-item">
                  <Link to="/test">test</Link>
                </li>

              </ul>
            </div>
        </nav>
    </React.Fragment>
  )
}

