import React, {useEffect, useState} from 'react';
import Select from "react-select";
import './inputForm.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {notesAPI} from "../../services/NoteService";
import {INote} from "../../models/INote";
import {Helper} from "../../helper/Helper";
import {noteSlice} from "../../store/reducers/NoteSlice";



const options = [
    { value: 'idea', label: 'Idea' },
    { value: 'task', label: 'Task' },
    { value: 'randomThought', label: 'Random Thought' }
]

const InputForm  = ()  => {
    //
    const [createNote,{}] = notesAPI.useCreatNoteMutation()
    const [updateNote,{}] = notesAPI.useUpdateNoteMutation()
    const [getNote,{}] = notesAPI.useLazyFetchNotesQuery()
    //
    const [title, setTitle] = useState<string>('')
    const [category, setCategory] = useState<string>('idea')
    const [content, setContent] = useState<string>('')
    //
    const dispatch = useAppDispatch()
    const {setIdEdit} = noteSlice.actions
    const {editId} = useAppSelector(state => state.noteReducer)

    useEffect(() => {
        if(!editId) return
        handleGetNote()
    },[editId])

    const handleCreate = async () => {
        let id: number = Math.floor(Math.random() * 1000000)
        const created = Helper.getCreatedDate()
        if(!title){
            alert(`Title can not be empty!`)
            return
        } else if(!content){
            alert(`Content can not be empty!`)
            return
        }
        await createNote({id, title, created, category, content, active: true})
    }
    const handleUpdate = async () => {
        const response = await getNote(editId)
        let note: INote
        if(response.data) note = response.data
        else return
        const created = Helper.getCreatedDate()
        if(!title){
            alert(`Title can not be empty!`)
            return
        } else if(!content){
            alert(`Content can not be empty!`)
            return
        }
        updateNote({...note, title, created, content, category})
        setTitle('')
        setCategory('idea')
        setContent('')
        dispatch(setIdEdit(null))
    }
    const handleGetNote = async (id = editId) => {
        const response = await getNote(editId)
        let note: INote
        if(response.data)
            note = response.data
        else
            return
        setTitle(note.title)
        setCategory(note.category)
        setContent(note.content)
    }
    //
    const getValue = () => {
        return category ? options.find(c => c.value === category)  : ''
    }
    const onChangeCategory = (newValue: any) => {
        setCategory(newValue.value)
    }
    //
    return (
        <div className="form-container">
            <input value={title}
                   className={''}
                   placeholder="Title"
                   onChange={(value) => setTitle(value.target.value)}
                   type="text" id="text-title"
            />
            <textarea name="text-content" placeholder="Content" id="text-content"
                      className={''}
                      value={content}
                      onChange={(value) => setContent(value.target.value)}
            />
            <div className="dropdown">
                <Select value={getValue()} options={options} onChange={onChangeCategory}/>
            </div>
            <div className="btn-container">
                {editId ? "" : <div className="btn-add" onClick={handleCreate}>Create Note</div>}
                {editId ? <div className="btn-edit" onClick={handleUpdate}>Edit</div> : ''}
            </div>
        </div>
    );
};

export default InputForm;