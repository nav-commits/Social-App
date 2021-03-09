// import React, {createContext} from 'react';
import React,{useState, createContext} from 'react';
import axios from "axios";

export const PostContext = createContext();

const PostContextProvider = (props) =>{
    const [form, setForm] = useState({
        title : '', 
        message: '', 
        creater: '', 
        selectedFile:''
    });
 

      axios.post('http://localhost:5000/Socials',form)
      .then((response)=>{
        console.log(response)
      })

    

    return (
       <PostContext.Provider value={form,setForm}>
         {props.children}
       </PostContext.Provider>

    );
};
 export default PostContextProvider;
