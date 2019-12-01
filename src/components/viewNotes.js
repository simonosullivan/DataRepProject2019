import React from 'react';
import Notes from './notes';
import axios from 'axios';
import './viewNotes.css';
import Nav from 'react-bootstrap/Nav';



class viewNotes extends React.Component {

    state = { notes: [] };

    componentDidMount() {
        axios.get('http://localhost:4000/api/notes/')
            .then((response) => {
                this.setState({ notes: response.data.notes })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <div class="jumbotron" >
                    <h1 class="display-4">Welcome to your notes</h1>
                    <p class="lead">Store and access your notes anywhere you go</p>
                </div>


                <div className="wrapper">

                    <div>
                        <Notes myNotes={this.state.notes}></Notes>
                    </div>


                </div>
            </div>
        );
    }
}
export default viewNotes;