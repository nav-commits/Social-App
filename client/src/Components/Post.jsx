import {useContext,useState,useEffect} from 'react';
import "../Styles/App.css";
import {PostContext} from './PostContext';
import axios from "axios";
import moment from 'moment';
function Post() {
const {form,setForm} = useContext(PostContext);
const [posts,setPosts] = useState([])

const fetchPosts = () =>{
    const url = '/Social';
    axios.get(url)
    .then(response =>{
      setPosts(response.data)
      console.log(response);
    })
    .catch(err =>{
      console.log(err)
    });
  }
  useEffect(() => {
  fetchPosts();
  },[]);


const HandleSubmit = (event) =>{
event.preventDefault();
axios.post('/Social',form)
  .then((response)=>{
  console.log(response)
  console.log(form);
  setForm('');
  })
  .catch((error)=>{
  console.log(error);
  })
   event.target.reset();
    fetchPosts();
}

  return (
    <div>
        <form onSubmit={HandleSubmit}>
           <input type="text" placeholder="title" value={form.title} onChange={e => setForm({...form,title:e.target.value})}/>
           <input type="text" placeholder="message" value={form.message} onChange={e => setForm({...form,message: e.target.value})}/>
           <input type="text" placeholder="creater" value={form.creater} onChange={e => setForm({...form,creater:e.target.value})}/>
           <button>Submit</button>
        </form>
        
         <div className="Cards">
            {posts && posts.map(formPosts=>{
              return <div className="Card-Posts" key={formPosts.id}>
                         <h1>Title:  {formPosts.title}</h1>
                         <p>Message: {formPosts.message}</p>
                         <p>Creater: {formPosts.creater}</p>
                         <p>Posted: {moment(formPosts.createdAt).fromNow()}</p>
                    </div>
            })}
        </div>
    </div>
  );
}

export default Post;