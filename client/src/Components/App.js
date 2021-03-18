import Header from "../Components/Header";
import "../Styles/App.css";
import Post from "../Components/Post.jsx"
import Footer from "../Components/Footer.jsx"
import  {BrowserRouter as Router, Route ,Switch } from 'react-router-dom';
import Home from '../Components/Home';


function App() {
  return ( 
  <Router>
        <div>
         <Header/>
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
