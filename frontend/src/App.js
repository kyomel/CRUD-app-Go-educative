import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListUserComponent from './components/ListUserComponent';
import ViewUserComponent from './components/ViewUserComponent';
import CreateUserComponent from './components/CreateUserComponent';

// Task 12: Write code for App function here(Update routes in the switch statement)
function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component =
                              {ListUserComponent}></Route>
                          <Route path = "/users" component = 
                              {ListUserComponent}></Route>
                          <Route path = "/add-user/:id" component = 
                              {CreateUserComponent}></Route>
                         <Route path = "/view-user/:id" component = 
                              {ViewUserComponent}></Route>
                         </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;