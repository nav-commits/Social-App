import Header from '../Components/Header.jsx';
import "../Styles/App.css";
import Post from "../Components/Post.jsx"
import Footer from "../Components/Footer.jsx"
import { Switch, Route } from "react-router-dom";
import  Main from '../Components/Main';
import React from 'react';
import PostDetail from '../Components/PostDetail.jsx'
import Contact from '../Components/Contact.jsx'
import Edit from '../Components/Edit.jsx'
import {useState} from 'react';
import fire from '../Components/Fire.js';
import {useEffect} from 'react';

function App() {
const [users,setUsers] = useState({})
 console.log(users)
useEffect(() => {
  authListener();
  },[]);

const authListener = () => {
  fire.auth().onAuthStateChanged(users => {
      console.log(users);
      if (users) {
        setUsers(users);
      } else {
        setUsers({ users: null });
      }
    });
}

  return ( 
   
    <div> 
         <Header/>
         <Switch>
             <Route path="/" exact component={Main}/>
               <Route exact path="/post">
                   <Post/>
                   <Footer/>
               </Route> 
               <Route exact path="/post/:id" component={PostDetail}/>
              <Route path="/Contact" component={Contact}/>
              <Route path="/post/Edit/:id" component={Edit}/>
         </Switch>
    </div> 
   
   
  );
}

export default App;
