import { useContext } from "react";
import Header from "../Components/Header";
import "../Styles/App.css";
import Post from "../Components/Post.jsx"
import Footer from "../Components/Footer.jsx"

function App() {
  return (
    <div>
       <Header/>
       <Post/>
       <Footer/>
    </div>
  );
}

export default App;
