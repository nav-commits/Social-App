// import React, {createContext} from 'react';
import React,{useState, useEffect, createContext} from 'react';
import axios from "axios";

export const postContext = creatContext();

const postContextProvider = (props) =>{
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [creater, setCreater] = useState('');
    const [selectedFile, setselectedFile] = useState('');

  useEffect(()=>{
      sendPosts();
  },[])
   
  const sendPosts = () =>{
      axios.post()
  }

    return (
       <postContext.Provider value={}>
         {props.children}
       </postContext.Provider>

    );
};
 export default postContextProvider;
