import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

class NoteItem extends React.Component {

    constructor() {
        super();
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
                    
                </Card>
            </div>
        )
    }


}
export default NoteItem;