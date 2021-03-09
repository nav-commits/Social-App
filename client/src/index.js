import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import postContextProvider from "./Components/PostContext.js";

ReactDOM.render(
  <React.StrictMode>
      <postContextProvider>
           <App />
      </postContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


