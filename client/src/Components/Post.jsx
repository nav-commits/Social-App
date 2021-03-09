import React, {useContext} from 'react';
import "../Styles/App.css";
import {PostContext} from './PostContext';
import axios from "axios";

function Post() {
const {form,setForm}= useContext(PostContext);

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
           <input type="text" value={form.title}   onChange={e => setForm({ title:e.target.value})}/>
           <input type="text" value={form.message} onChange={e => setForm({ message: e.target.value})}/>
           <input type="text" value={form.creater} onChange={e => setForm({ creater:e.target.value})}/>
           <button>Submit</button>
        </form>
      
    </div>
  );
}

export default Post;