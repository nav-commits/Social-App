import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import PostContextProvider from "./Components/PostContext.js";

ReactDOM.render(
  <React.StrictMode>
      <PostContextProvider>
           <App />
      </PostContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


