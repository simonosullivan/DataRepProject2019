import React from 'react'
import axios from 'axios';
import './addNote.css'


class addNote extends React.Component {

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

        axios.post('http://localhost:4000/api/notes', noteObject)  // need to add post method with correct link
            .then(window.location.href = "/")
            .catch();
    }

    render() {
        return (
            <div class="container">
                <h1>New Note</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input class="form"
                            type='text'
                            cols="80"
                            placeholder="Heading"
                            required="true"
                            value={this.state.HeadingNote}
                            onChange={this.handleHeadingNoteChange}
                        ></input>

                        <textarea class="form" rows="20" cols="80" type="text" placeholder="Some text...."
                            value={this.state.BodyNote}
                            onChange={this.handleBodyNoteChange}>
                        </textarea>
                    </div>


                    <div>
                        <button type="button" type="submit" class="btn btn-success">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default addNote;