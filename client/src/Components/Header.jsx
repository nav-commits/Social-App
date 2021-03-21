import "../Styles/App.css";
import  {Link } from 'react-dom';
import React from 'react';

function Header() {
     
  return (
  <div>
       <nav className="header-wrapper">
        <div>
           <h1>TheSocialPosts 365</h1>
        </div>

        <ul className="Nav-Links">
            <Link to="/">
                 <li>Home</li>
            </Link>

             <Link to="/post">
                  <li>Posts</li>
            </Link>
           
        </ul>   
      </nav>
  </div>

  );
}

export default Header;