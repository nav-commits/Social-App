import {useContext} from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import "../Styles/App.css";
import {PostContext} from './PostContext';
import axios from "axios";
import moment from 'moment';
import {faTrashAlt}  from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import {faEdit}  from '@fortawesome/free-solid-svg-icons';
import FileBase64 from 'react-file-base64';
import {useHistory} from 'react-router-dom';

const Post = () => {
const {form,setForm} = useContext(PostContext);
const [posts,setPosts] = useState([])
const history = useHistory();

useEffect(() => {
  fetchPosts();
  },[]);

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

const Handleclick = (id) => {
  history.push(`/post/Edit/${id}`,
  {id: id
 });
 }


  return (
<div>
    <div className="Back-Img">
      <form className="Form" onSubmit={HandleSubmit}>
        <h1 className="Soc-Post">Social Post</h1>
           <input type="text" placeholder="Title" value={form.title} onChange={e => setForm({...form,title:e.target.value})}/>
           <input type="text" placeholder="Message" value={form.message} onChange={e => setForm({...form,message: e.target.value})}/>
           <input type="text" placeholder="Creater" value={form.creater} onChange={e => setForm({...form,creater:e.target.value})}/>
           <div>
               <FileBase64 multiple={false} type="file" onDone={({base64}) => setForm({...form, selectedFile : base64})} />
           </div>
           <button className="Submit">Submit</button>
  </form>
        
      </div>
     
         <div className="Cards">
            {posts && posts.map(formPosts =>{
              return <div className="Card-Posts" key={formPosts.id}>
                        <img className="Post-Image" src={formPosts.selectedFile} alt='postspics'/>
                        <h1 className="title" onClick={()=>{
                          history.push(`/post/${formPosts._id}`,
                          {title: formPosts.title,
                           creater: formPosts.creater,
                           Picture: formPosts.selectedFile
                         });
                        }}>Title:{formPosts.title}</h1> 
                         <p>Message: {formPosts.message}</p>
                         <p>Creater: {formPosts.creater}</p>
                         <p>Posted: {moment(formPosts.createdAt).format('LLLL')}</p>
                        <FontAwesomeIcon  onClick={()=>deletePosts(formPosts._id)} className="Trash" icon={faTrashAlt} />
                       <FontAwesomeIcon onClick={()=>Handleclick(formPosts._id)}  className="Edit" icon={faEdit}/>
                    </div>
            })}
        </div>
    </div>
  );
}

export default Post;

 
