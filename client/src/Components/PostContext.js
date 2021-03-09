import React,{useState, createContext} from 'react';

export const PostContext = createContext();

const PostContextProvider = (props) =>{
    const [form, setForm] = useState({
        title : '', 
        message: '', 
        creater: '', 
    
  });
 

    return (
       <PostContext.Provider value={{form,setForm}}>
         {props.children}
       </PostContext.Provider>

    );
};
 export default PostContextProvider;
