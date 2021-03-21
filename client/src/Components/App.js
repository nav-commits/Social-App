import Header from '../Components/Header.jsx';
import "../Styles/App.css";
import Post from "../Components/Post.jsx"
import Footer from "../Components/Footer.jsx"
import { Switch, Route } from "react-router-dom";
import  Main from '../Components/Main';
import React from 'react';


function App() {
  return ( 
   
    <div> 
         <Header/>
         <Switch>
             <Route path="/" exact component={Main}/>
               <Route path="/post">
                   <Post/>
                   <Footer/>
               </Route> 
         </Switch>
    </div> 
   
   
  );
}

export default App;
