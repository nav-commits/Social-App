import {useContext,useState,useEffect} from 'react';
import "../Styles/App.css";
import {PostContext} from './PostContext';
import axios from "axios";
import moment from 'moment';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Post() {
const {form,setForm} = useContext(PostContext);
const [posts,setPosts] = useState([])

const fetchPosts = () =>{
    const url = '/Social';
    axios.get(url)
    .then(response =>{
      setPosts(response.data)
    })
    .catch(err =>{
      console.log(err)
    });
  }
  useEffect(() => {
  fetchPosts();
  },[]);

const deletePosts = (id)=>{
axios.delete(`/Social/${id}`)
.then(response=>{
  console.log(response)
  const newPosts = [...posts]
  newPosts.splice(id, 1)
  setPosts(newPosts)
})
.catch(error =>{
  console.log(error)
})
}

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
        <form className="Form" onSubmit={HandleSubmit}>
           <input type="text" placeholder="Title" value={form.title} onChange={e => setForm({...form,title:e.target.value})}/>
           <input type="text" placeholder="Message" value={form.message} onChange={e => setForm({...form,message: e.target.value})}/>
           <input type="text" placeholder="Creater" value={form.creater} onChange={e => setForm({...form,creater:e.target.value})}/>
           <button className="Submit">Submit</button>
        </form>
        
         <div className="Cards">
            {posts && posts.map(formPosts =>{
              return <div className="Card-Posts" key={formPosts.id}>
                         <h1>Title:  {formPosts.title}</h1>
                         <p>Message: {formPosts.message}</p>
                         <p>Creater: {formPosts.creater}</p>
                         <p>Posted: {moment(formPosts.createdAt).format('LLLL')}</p>
                        <FontAwesomeIcon  onClick={()=>deletePosts(formPosts._id)} className="Trash" icon={faTrashAlt} />
                    </div>
            })}
        </div>
    </div>
  );
}

export default Post;