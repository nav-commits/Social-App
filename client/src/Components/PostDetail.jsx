import "../Styles/App.css";
import {useHistory} from 'react-router-dom';

function PostDetail() {
    const history = useHistory();
    const Handleclick = () => {
        history.push('/post');
       }

  return (
   <div>
       <button onClick={Handleclick}>Go Back</button>
       <h1>Welcome details</h1>
   </div>
  );
}

export default PostDetail;