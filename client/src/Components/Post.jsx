import React, {useContext} from 'react';
import "../Styles/App.css";
import {PostContext} from './PostContext';

function Post() {
const postedData = useContext(PostContext);
console.log(postedData);

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