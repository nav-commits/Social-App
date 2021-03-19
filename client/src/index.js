import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import PostContextProvider from './Components/PostContext.js';

ReactDOM.render(
    
     <PostContextProvider> 
        <React.StrictMode>
              <App />
           </React.StrictMode>
       </PostContextProvider>
   ,
  document.getElementById('root')
);


