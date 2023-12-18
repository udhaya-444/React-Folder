import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// const age=19;
// var display=<h1 style={{color:"red"}}>{age>18 ? "eligible" : "not eligible"}</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(display);
root.render(<App/>);

