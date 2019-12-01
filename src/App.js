import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import addNote from './components/addNote';
import viewNotes from './components/viewNotes';
import EditNote from './components/editNote';




class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <Navbar>
              <Nav className="mr-auto">
                <a class="navbar-brand" href="/">
                  <img src="http://cdn.onlinewebfonts.com/svg/img_454445.png" width="55" height="55" class="d-inline-block align-top" alt=""></img>
                  Notes
                </a>
              </Nav>
              <Nav className="ml-auto">
                <Nav.Link href="/addNote">
                  <button type="button" class="btn btn-outline-success">Add Note</button>
                </Nav.Link>
              </Nav>
            </Navbar>
          </div>

          <Switch class="div">
            <Route exact path="/" component={viewNotes} />
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
