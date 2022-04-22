import React, {FC} from 'react';
import './notes.css'
import {INote} from "../../../models/INote";
import {useAppDispatch} from "../../../hooks/redux";
import {noteSlice} from "../../../store/redusers/NoteSlice";
import {Helper} from "../../../helper/Helper";


interface NoteItemProps {
    note: INote
    remove:(note: INote) => void
    update:(note: INote) => void
    active: boolean
}
const Note: FC<NoteItemProps> = ({note,remove,update,active})=> {
    const dispatch = useAppDispatch()
    const {setIdEdit} = noteSlice.actions
    const zipperLink = active ? "./img/file-zipper-solid2.svg" : "./img/unArchive.svg"
    const {newContent, date} = Helper.getDateFromContent(note.content)
    return (
        <div className="added-notes">
            <div><img src={`./img/${note.category}.svg`} alt="category"/></div>
            <div>{note.title.length > 15 ? note.title.substring(0,15) + "..." : note.title}</div>
            <div>{note.created}</div>
            <div>{Helper.transformCategory(note.category)}</div>
            <div>{newContent.length > 15 ? newContent.substring(0,15) + "..." : newContent}</div>
            <div>{date.length > 15 ? date.substring(0,20) + "..." : date}</div>
            <div>
                <img src="./img/pen-solid.svg" alt="edit" className="editOne"
                     onClick={() => dispatch(setIdEdit(note.id))}
                />
                <img src={zipperLink} alt="zipper" className="zipperOne"
                     onClick={() => update({...note,active: !active})}
                />
                <img src="./img/trash-solid2.svg" alt="delete" className="delete"
                     onClick={() => remove(note)}
                />
            </div>
        </div>
    );
};

export default Note;