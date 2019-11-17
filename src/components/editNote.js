import React from 'react';
import Notes from './notes';
import axios from 'axios';

class EditNote extends React.Component{
    
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
        e.preventDefault();
    
        const noteObject = {
          headingNote: this.state.HeadingNote,
          bodyNote : this.state.BodyNote
        }
    
        axios.put('http://localhost:4000/api/notes/'+this.state._id,noteObject)
        .then()
        .catch();
    
        this.setState({HeadingNote: '', BodyNote: ''});
      }

      componentDidMount() {
        axios.get('http://localhost:4000/api/notes/'+this.props.match.params.id)
        .then((response)=>{
            this.setState({
                _id: response.data._id,
                HeadingNote: response.data.headingNote,
                BodyNote : response.data.bodyNote
            })
        })
        .catch();
    }

    render(){
        return(
            <div>
                <h1>Hello from Edit Component</h1>

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
                    </textarea>
                    
                    </div>

                    <div>
                        <input
                            type='submit'
                            value='Edit Note'
                        ></input>
                    </div>
                </form>
            </div>
        )
    }
}
export default EditNote;