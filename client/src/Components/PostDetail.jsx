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
       <button className="Go-Back" onClick={Handleclick}>Go Back</button>
       <div>
           <h1 className="Title-Detail"> Title:{location.state.title}</h1>
           <h2 className="Creater-Detail"> Creater:{location.state.creater}</h2>
           <img className="Back-Image" src={location.state.Picture} alt="background"/>
       </div>
    
   </div>
  );
}

export default PostDetail;