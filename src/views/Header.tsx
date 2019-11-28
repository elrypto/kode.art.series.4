import React from 'react';
import { useContextState } from '../components/hooks/useAppContext';
import { Link } from '@reach/router';
import ActiveNavLink from './../components/ui/ActiveNavLink';

export default function Header() {
  const state  = useContextState();

  return (
    <React.Fragment>
       <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <Link className="navbar-brand" to="/">(k)ode.art</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarResponsive">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarResponsive" className="collapse navbar-collapse" >
              <ul className="navbar-nav ml-auto">
      
               <li className="nav-item">
                <ActiveNavLink className="nav-link" to="/">home</ActiveNavLink>
                </li>

                <li className="nav-item">
                  <ActiveNavLink className="nav-link" to="/gettingStarted">get started</ActiveNavLink>
                </li>

                <li className="nav-item">
                  <ActiveNavLink className="nav-link" to="/test">test</ActiveNavLink>
                </li>

              </ul>
            </div>
        </nav>
    </React.Fragment>
  )
}

