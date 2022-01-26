import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Friends Database</h2>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/protected">Friend List</Link>
          <Link to="friends/add">Add Friends</Link>
          <Link to="/logout">Logout</Link>
        </div>
        <Switch>
          <Route path="/friends/add" component={FriendForm} />
          <PrivateRoute exact path="/protected" component={FriendList} />
          <Route path="/logout" component={Logout}/>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
