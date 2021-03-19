import {useState} from 'react';
import {createContext} from 'react';
import React from 'react';

export const PostContext = createContext();
const PostContextProvider = (props) =>{
    const [form, setForm] = useState(
       { title : '', 
        message: '', 
        creater: '', 
        selectedFile: ''
       }
      );
 

    return (
       <PostContext.Provider value={{form,setForm}}>
         {props.children}
       </PostContext.Provider>

    );
};
 export default PostContextProvider;
