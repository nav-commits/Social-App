import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import PostContextProvider from './Components/PostContext.js';
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <Router>
        <PostContextProvider> 
            {/* <React.StrictMode> */}
                 <App />
            {/* </React.StrictMode> */}
       </PostContextProvider>
    </Router>
     
   ,
  document.getElementById('root')
);




