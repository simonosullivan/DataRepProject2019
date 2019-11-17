import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/register';
import addNote from './components/addNote';
import viewNotes from './components/viewNotes';
import EditNote from './components/editNote';
import Home from './components/Home';



class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Navbar>
            <Nav className="mr-auto">
              <a class="navbar-brand" href="/">
                <img src="http://cdn.onlinewebfonts.com/svg/img_454445.png" width="55" height="55" class="d-inline-block align-top" alt=""></img>
                Notes
              </a>
              </Nav>
            <Nav className="ml-auto">
                <Nav.Link href="/login">
                  <button type="button" class="btn btn-outline-info">Login</button>
                </Nav.Link>
            </Nav>
          </Navbar>

          <Switch class="div">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/addNote" component={addNote} />
            <Route path="/viewNotes" component={viewNotes} />
            <Route path="/editNote/:id" component={EditNote} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
