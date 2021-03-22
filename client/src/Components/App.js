import Header from '../Components/Header.jsx';
import "../Styles/App.css";
import Post from "../Components/Post.jsx"
import Footer from "../Components/Footer.jsx"
import { Switch, Route } from "react-router-dom";
import  Main from '../Components/Main';
import React from 'react';
import PostDetail from '../Components/PostDetail.jsx'
import Contact from '../Components/Contact.jsx'

function App() {
  return ( 
   
    <div> 
         <Header/>
         <Switch>
             <Route path="/" exact component={Main}/>
               <Route exact path="/post">
                   <Post/>
                   <Footer/>
               </Route> 
               <Route path="/post/:id" component={PostDetail}/>
              <Route path="/Contact" component={Contact}/>
         </Switch>
    </div> 
   
   
  );
}

export default App;
