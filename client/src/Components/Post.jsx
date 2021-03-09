import React, {useContext} from 'react';
import "../Styles/App.css";
import {PostContext} from './PostContext';
import axios from "axios";

function Post() {
const {form,setForm}= useContext(PostContext);
console.log(form,setForm);


const handleSubmit = (event) =>{
event.preventDeafult();
axios.post('/Social',form)
  .then((response)=>{
  console.log(response)
  })
  .catch((error)=>{
  console.log(error);
  })

}
  return (
    <div>
        <form onSubmit={handleSubmit}>
           <input type="text"/>
           <input type="text"/>
           <input type="text"/>
           <input type="text"/>
           <button>Submit</button>
        </form>
      
    </div>
  );
}

export default Post;