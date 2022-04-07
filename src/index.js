import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { hydrate, render } from "react-dom";

// render(
// // ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}