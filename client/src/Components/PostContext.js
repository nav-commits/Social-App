import React, {createContext} from 'react';
import React, {useState} from 'react';
import axios from "axios";

export const postContext = creatContext();

const postContextProvider = (props) =>{
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [creater, setCreater] = useState('');
    const [selectedFile, setselectedFile] = useState('');

    // send post data

    
    return (
       <postContext.Provider value={}>
         {props.children}
       </postContext.Provider>

    );
};
 export default postContextProvider;
