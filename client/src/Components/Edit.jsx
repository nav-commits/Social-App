import "../Styles/App.css";
import {PostContext} from './PostContext';
import {useContext} from 'react';
import axios from "axios";
import FileBase64 from 'react-file-base64';
import {useHistory} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function Edit() {
const history = useHistory();
const location = useLocation();

const Handleclick = () => {
    history.push('/post');
}
const {form,setForm} = useContext(PostContext);

const HandleSubmit = (event) =>{
    event.preventDefault();
    axios.patch(`/Social/${location.state.id}`,form)
      .then((response)=>{
      console.log(response)
      console.log(form);
      setForm('');
      })
      .catch((error)=>{
      console.log(error);
      })
       event.target.reset();
    }

  return (
<div>
    <button className="Go-Back" onClick={Handleclick}>Go Back</button>
        <form className="Edit-Form" onSubmit={HandleSubmit}>
            <h1 className="Soc-Post">Social Post</h1>
           <input type="text" placeholder="Title" value={form.title} onChange={e => setForm({...form,title:e.target.value})}/>
           <input type="text" placeholder="Message" value={form.message} onChange={e => setForm({...form,message: e.target.value})}/>
           <input type="text" placeholder="Creater" value={form.creater} onChange={e => setForm({...form,creater:e.target.value})}/>
           <div>
               <FileBase64 multiple={false} type="file" onDone={({base64}) => setForm({...form, selectedFile : base64})} />
           </div>
           <button className="Edit-Save">Update</button>
      </form>
</div>
  );
}

export default Edit;