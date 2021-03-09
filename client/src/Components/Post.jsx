import { set } from 'mongoose';
import {useContext} from 'react';
import "../Styles/App.css";
import PostContext from './PostContext';

function Post() {
const postData = useContext(PostContext);
console.log(postData);

  return (
    <div>
        <form>
           <input type="text"/>
           <input type="text"/>
           <input type="text"/>
           <input type="text"/>
           <button>Submit</button>
        </form>
      
    </div>
  );
}

export default Post;