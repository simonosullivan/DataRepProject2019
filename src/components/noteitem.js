import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import 'bootstrap/dist/css/bootstrap.min.css';
class NoteItem extends React.Component {

    constructor() {
      super();
      this.delete = this.delete.bind(this);
    }

    delete = (e) => { // Are you sure alert
      confirmAlert({
        title: 'Confirm to Delete',
        message: 'Are you sure to delete this note ?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => axios.delete('http://localhost:4000/api/notes/' + this.props.note._id) // sends delete request to server
              .then(window.location.reload()) // reloads page to see the change
              .catch()
          },
          {
            label: 'No',
          }
        ]
      });
    };

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
            <Link to={'/editNote/' + this.props.note._id} className='btn btn-primary'>Edit</Link>
            <Button variant='danger' onClick={this.delete}>Delete</Button>
          </Card>
          <br />
        </div>
      )
    }


}
export default NoteItem;