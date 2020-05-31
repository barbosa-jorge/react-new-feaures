import React, { useContext } from 'react';
import Note from './Note';
import NodesContext from '../context/notes-context';

const NoteList = () => {

    const { notes } = useContext(NodesContext);

    return notes.map((note) =>
        <Note key={note.title} note={note} />
    )
};

export { NoteList as default }