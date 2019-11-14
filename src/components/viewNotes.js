import React from 'react';
import Notes from './notes';
import axios from 'axios';


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
            <div>
                <h1>Hello from viewNotes Component</h1>
                <Notes myNotes={this.state.notes}></Notes>
            </div>
        );
    }
}
export default viewNotes;