import "../Styles/App.css";
import {useHistory} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function PostDetail() {
const history = useHistory();
const Handleclick = () => {
        history.push('/post');
       }
const location = useLocation();

  

  return (
   <div>
       <button onClick={Handleclick}>Go Back</button>
       <h1>Welcome details</h1>
       <h2>{location.state.title}</h2>
       <p>{location.state.creater}</p>
   </div>
  );
}

export default PostDetail;