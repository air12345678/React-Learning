<<<<<<< HEAD
import React,{useContext} from 'react';
import AuthContext from '../Context/auth-context';

=======
import React, { useContext } from 'react';

import AuthContext from '../../store/auth-context';
>>>>>>> f6f6c7ca58fc7cfe189734dd6bb336bbe60a40ef
import classes from './Navigation.module.css';

const Navigation = () => {
  const ctx = useContext(AuthContext);
<<<<<<< HEAD
  return (
    // <AuthContext.Consumer>
    //   {(ctx)=>{
    //     return (
        <nav className={classes.nav}>
        <ul>
          
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={ctx.onLogout}>Logout</button>
            </li>
            
          )}
        </ul>
      </nav>
    //     )
    //   }}
    
    // </AuthContext.Consumer>
=======

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
>>>>>>> f6f6c7ca58fc7cfe189734dd6bb336bbe60a40ef
  );
};

export default Navigation;
