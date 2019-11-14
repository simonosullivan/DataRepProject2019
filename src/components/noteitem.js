import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

class NoteItem extends React.Component {

    constructor() {
        super();
        this.DeleteNote = this.DeleteNote.bind(this);
    }

    DeleteNote(e) {
        console.log('Delete Clicked');
        e.preventDefault();
          axios.delete('http://localhost:4000/api/notes/'+this.props.note._id)
          .then()
          .catch();
      }

    render() {
        return (
            <div>
              
                <Card border="primary" style={{ width: '28rem' }}>
                    <Card.Header>{this.props.note.headingNote}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>{this.props.note.bodyNote}</p>
                        </blockquote>
                    </Card.Body>
                    <Button variant='danger' onClick={this.DeleteNote}>Delete</Button>
                    <Link to={'/editNote/'+this.props.note._id} className='btn btn-primary'>Edit</Link>
                </Card>
            </div>
        )
    }


}
export default NoteItem;