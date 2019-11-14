import React from 'react'
import axios from 'axios';


class addNote extends React.Component {

    constructor(props){
        super(props);
    
        this.state = {HeadingNote: '', BodyNote: ''}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleHeadingNoteChange = this.handleHeadingNoteChange.bind(this);
        this.handleBodyNoteChange = this.handleBodyNoteChange.bind(this);

    
    }

    handleHeadingNoteChange(e){
        this.setState({HeadingNote: e.target.value});
      }
    
    handleBodyNoteChange(e){
    this.setState({BodyNote: e.target.value});
    }

    handleSubmit(e){
        alert(this.state.HeadingNote+"      body of note : " + this.state.BodyNote);
        e.preventDefault();
    
        const noteObject = {
          headingNote: this.state.HeadingNote,
          bodyNote : this.state.BodyNote
        }
    
        axios.post('http://localhost:4000/api/notes', noteObject )  // need to add post method with correct link
        .then()
        .catch();
    
        this.setState({HeadingNote: '', BodyNote: ''});
      }

    render() {
        return (
            <div>
                <h1>Hello from addNote Component</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Heading of note  </label>
                        <input
                            type='text'
                            value={this.state.HeadingNote}
                            onChange= {this.handleHeadingNoteChange}
                        ></input>
                    </div>

                    <div>
                    <textarea rows="10" cols="100" type = "text"
                        value={this.state.BodyNote}
                        onChange= {this.handleBodyNoteChange}>
                    {/* <input
                        type = "text"
                        value={this.state.BodyNote}
                        onChange= {this.handleBodyNoteChange}
                    ></input> */}
                    </textarea>
                    
                    </div>

                    <div>
                        <input
                            type='submit'
                            value='Save'
                        ></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default addNote;