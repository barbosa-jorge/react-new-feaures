import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context';

const AddNoteForm = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const { dispatch } = useContext(NotesContext);

    const addTitle = (e) => {
        setTitle(e.target.value);
    };

    const addBody = (e) => {
        setBody(e.target.value);
    };

    const addNote = (e) => {
        e.preventDefault();

        const note = { title, body };
        dispatch({ type: 'ADD_NOTE', note });

        setTitle('')
        setBody('')
    }

    return (
        <form onSubmit={addNote}>
            <input value={title} onChange={addTitle} />
            <textarea value={body} onChange={addBody} />
            <button>Add Note</button>
        </form>
    )
}

export { AddNoteForm as default }
