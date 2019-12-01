import React from 'react';
import Notes from './notes';
import axios from 'axios';
import './addNote.css'
import Nav from 'react-bootstrap/Nav';



class EditNote extends React.Component {

    constructor(props) {
        super(props);

        this.state = { HeadingNote: '', BodyNote: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleHeadingNoteChange = this.handleHeadingNoteChange.bind(this);
        this.handleBodyNoteChange = this.handleBodyNoteChange.bind(this);


    }

    handleHeadingNoteChange(e) {
        this.setState({ HeadingNote: e.target.value });
    }

    handleBodyNoteChange(e) {
        this.setState({ BodyNote: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const noteObject = {
            headingNote: this.state.HeadingNote,
            bodyNote: this.state.BodyNote
        }

        axios.put('http://localhost:4000/api/notes/' + this.state._id, noteObject)
            .then(window.location.href = "/")
            .catch();
    }

    componentDidMount() { // loads in the selected note infomation by searching for its ID
        axios.get('http://localhost:4000/api/notes/' + this.props.match.params.id)
            .then((response) => {
                this.setState({  // populates the state , so can output on form 
                    _id: response.data._id,
                    HeadingNote: response.data.headingNote,
                    BodyNote: response.data.bodyNote
                })
            })
            .catch();
    }

    render() {
        return (
            <div class="container">
                <h1>Edit Note</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input class="form"
                            type='text'
                            placeholder="Heading"
                            required="true"
                            value={this.state.HeadingNote}
                            onChange={this.handleHeadingNoteChange}
                        ></input>
                    </div>

                    <div>
                        <textarea class="form" rows="10" cols="100" type="text" placeholder="Some text...."
                            value={this.state.BodyNote}
                            onChange={this.handleBodyNoteChange}>
                        </textarea>
                    </div>

                    <div>
                        <button type="button" type="submit" class="btn btn-success">Edit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default EditNote;