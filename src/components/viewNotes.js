import React from 'react';
import Notes from './notes';
import axios from 'axios';
import './viewNotes.css';
import Nav from 'react-bootstrap/Nav';



class viewNotes extends React.Component {

    state = {notes: [] };

    componentDidMount() {
        axios.get('http://localhost:4000/api/notes/')
        .then((response)=>{
            this.setState({notes: response.data.notes})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render() {
        return (
            <div className="wrapper">
                <div> 
                    <Notes myNotes={this.state.notes}></Notes>
                </div>

                <div class="addButton">
                    <Nav.Link href="/addNote">
                    <button type="button" class="btn btn-outline-success">Add Note</button>
                    </Nav.Link>                
                </div>
            </div>
        );
    }
}
export default viewNotes;