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
 
      axios.post('/Social',form)
      .then((response)=>{
        console.log(response)
      })
      .catch((error)=>{
        console.log(error);
      })

    

    return (
       <PostContext.Provider value={{form,setForm}}>
         {props.children}
       </PostContext.Provider>

    );
};
 export default PostContextProvider;
