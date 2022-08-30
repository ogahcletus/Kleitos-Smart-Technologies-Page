 import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import './App.css';
import Contact from './Components/Pages/Contact/Contact';
import Topbar from './Components/Topbar/Topbar';



import Home from './Components/Pages/Home/Home';
import Signup from './Components/Pages/Sign up/Signup';
import Login from './Components/Pages/Login/Login';
import Blog from './Components/Pages/Blog/Blog';
import Settings from './Components/Pages/Settings/Settings';
import Single from './Components/Pages/Single/Single';
import SinglePost from './Components/SinglePost/SinglePost';




function App() {
  const user = true;
  return (
    <div className='App'>
      <Router >
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">{user ? <Home/> : <Signup />}</Route>
        <Route path="/login">{user ? <Home/> : <Login />}</Route>
        <Route path="/blog">{user ? <Blog/> : <Signup />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Signup/>}
        </Route>
        <Route path="/post/:id">
        
        <Single />
        </Route>

        <Route path="/posts">
          <SinglePost />
        </Route>
        
        <Route path="/contact">
          <Contact />
        </Route>
        
        
        
      </Switch>
    
    </Router> 


    
    </div>
  );
}

export default App;
