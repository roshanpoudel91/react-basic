import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const menuItems = [1,2,3,4,5];
const menuItems2 = [1,2,3,4,5,6,7];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App menuItems={menuItems} />
    <App menuItems={menuItems2} />
  </div>
 
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
