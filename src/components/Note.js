import React, { useEffect, useContext, useState } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const Note = ({ note }) => {

    const { dispatch } = useContext(NotesContext);

    const mousePosition = useMousePosition();

    const onRemoveNote = (title) => {
        if (title) {
            dispatch({ type: 'REMOVE_NOTE', title });
        }
    }

    useEffect(() => {
        console.log('Setting up effect');
        return () => {
            console.log('Cleanning up effect!')
        }
    }, []);

    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <p>x:{mousePosition.x} y: {mousePosition.y}</p>
            <button onClick={() => onRemoveNote(note.title)}>Remove</button>
        </div>
    )
}

export { Note as default }