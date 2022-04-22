import React from 'react';
import './Header.css'
import {useAppDispatch} from "../../../hooks/redux";
import {noteSlice} from '../../../store/redusers/NoteSlice'
import {notesAPI} from "../../../services/NoteService";
const Header = () => {
    const [deleteAll,{}] = notesAPI.useDeleteAllNotesMutation()
    const dispatch = useAppDispatch()
    const {changStatus} = noteSlice.actions
    return (
        <div className="row-table">
            <div>Name</div>
            <div>Created</div>
            <div>Category</div>
            <div>Content</div>
            <div>Dates</div>
            <div>
                <img src="./img/file-zipper-solid.svg" alt="zipper" id="zipperAll"
                     onClick={() => dispatch(changStatus())}
                />
                <img src="./img/trash-solid.svg" alt="delete" id="deleteAll"
                     onClick={() => deleteAll('')}
                />
            </div>
        </div>
    );
};

export default Header;