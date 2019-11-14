import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Create from './components/create';
import Read from './components/read';
import Login from './components/Login';
import Register from './components/register';
import addNote from './components/addNote';
import viewNotes from './components/viewNotes';
import EditNote from './components/editNote';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Sign Up</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register}/>
            <Route path="/addNote" component={addNote}/>
            <Route path="/viewNotes" component={viewNotes}/>
            <Route path="/editNote/:id" component={EditNote}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
