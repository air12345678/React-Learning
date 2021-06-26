<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./components/Context/auth-context";
=======
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { AuthContextProvider } from './store/auth-context';
>>>>>>> f6f6c7ca58fc7cfe189734dd6bb336bbe60a40ef

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
<<<<<<< HEAD
  document.getElementById("root")
=======
  document.getElementById('root')
>>>>>>> f6f6c7ca58fc7cfe189734dd6bb336bbe60a40ef
);
