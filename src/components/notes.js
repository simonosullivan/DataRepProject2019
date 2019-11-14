import React from 'react';
import NoteItem from './noteitem';

class Notes extends React.Component{

    render(){
        return this.props.myNotes.map((note)=>{
            return <NoteItem key={note._id} note={note}></NoteItem>
        });
    }
}
export default Notes;