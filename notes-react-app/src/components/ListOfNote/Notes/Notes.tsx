import React from 'react';
import {useAppSelector} from "../../../hooks/redux";
import Note from "./Note";
import {INote} from "../../../models/INote";
import {notesAPI} from "../../../services/NoteService";

const Notes = () => {
    const {data: notes} = notesAPI.useFetchAllNotesQuery('')
    const {active} = useAppSelector(state => state.noteReducer)
    const [deleteNote,{}] = notesAPI.useDeleteNotesMutation()
    const [updateNote,{}] = notesAPI.useUpdateNoteMutation()

    const handlerRemove = (note: INote) => {
        deleteNote(note)
    }
    const handlerUpdateStatus = (note: INote) => {
        updateNote(note)
    }
    return (
        <div>
            {notes && notes.map(note => {
                return note.active === active ?
                    ( <Note key={note.id} note={note} active={active}
                    remove={handlerRemove} update={handlerUpdateStatus}
                    />)
                    : ' '
            })}
        </div>
    );
};

export default Notes;