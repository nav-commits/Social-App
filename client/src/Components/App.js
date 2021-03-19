import Navbar from "../Components/Navbar";
import "../Styles/App.css";
import Post from "../Components/Post.jsx"
import Footer from "../Components/Footer.jsx"
import  Router  from 'react-dom';
import  Home from '../Components/Home';
import  Switch  from 'react-dom';
import  Route  from 'react-dom';

function App() {
  return ( 
   <Router>
        <div>
         <Navbar/>
         <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/post" component={Post} /> 
         </Switch>
         <Footer/>
      </div>
   </Router> 
   
  );
}

export default App;
