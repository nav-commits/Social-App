import {useContext} from 'react';
import "../Styles/App.css";
import {PostContext} from './PostContext';
import axios from "axios";
import {useState,useEffect} from 'react';

function Post() {
const {form,setForm} = useContext(PostContext);
const [posts,setPosts] = useState([])

useEffect(() => {
    const url = '/Social';
    axios.get(url)
    .then(response =>{
      setPosts(response.data)
      console.log(response);
    })
    .catch(err =>{
      console.log(err)
    });
   },[]);


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
            {posts && posts.map(newposts=>{
              return <div key={newposts}>
                         <h1>{newposts.title}</h1>
                         <p>{newposts.message}</p>
                         <p>{newposts.creater}</p>
                    </div>
            })}
        </div>
    </div>
  );
}

export default Post;