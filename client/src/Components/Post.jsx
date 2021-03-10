import {useContext} from 'react';
import "../Styles/App.css";
import {PostContext} from './PostContext';
import axios from "axios";

function Post() {
const {form,setForm} = useContext(PostContext);

const handleSubmit = (event) =>{
event.preventDefault();
axios.post('/Social',form)
  .then((response)=>{
  console.log(response)
  console.log(form);
  })
  .catch((error)=>{
  console.log(error);
  })
  
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
           <input type="text" value={form.title} onChange={e => setForm({...form,title:e.target.value})}/>
           <input type="text" value={form.message} onChange={e => setForm({...form,message: e.target.value})}/>
           <input type="text" value={form.creater} onChange={e => setForm({...form,creater:e.target.value})}/>
           <button>Submit</button>
        </form>
        
         <div className="Posts">
            {form && form.map(formPosts=>{
              return <div key={formPosts}>
                         <h1>{formPosts.title}</h1>
                         <p>{formPosts.message}</p>
                         <p>{formPosts.creater}</p>
                    </div>
            })}
        </div>
    </div>
  );
}

export default Post;