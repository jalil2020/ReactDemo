import React from 'react';
import ReactDOM from 'react-dom/client';
import {Car} from './model/Car';
import {Greet} from './model/Car'


// const myFirstElement = <Greet/>

// // const myFirstElement = <h1>Hello Readct! </h1>
// const root = ReactDOM.createRoot(d  ocument.getElementById('root'));
// root.render(myFirstElement);
 



import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
