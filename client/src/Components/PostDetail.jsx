import "../Styles/App.css";
import {useHistory} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function PostDetail() {
const history = useHistory();
const Handleclick = () => {
        history.push('/post');
       }
const location = useLocation();

  

// going to make fetch call here for update api

  return (
   <div>
       <button onClick={Handleclick}>Go Back</button>
       <h1>Welcome details</h1>
       <div>
           <h2 className="Title-Detail">{location.state.title}</h2>
           <p className="Creater-Detail">{location.state.creater}</p>
       </div>
    
   </div>
  );
}

export default PostDetail;