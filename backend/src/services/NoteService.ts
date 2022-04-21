import {INote, INoteUpdate} from "../Types/INote";
import Note from "../repositories/Note";

class NoteService {
    public create(post:INote): INote[]{

       const notes = Note.addNote(post)
        return notes;
    }
    public removeOne(id: number){
        const notes = Note.deleteOne(id)
        return notes
    }
    public removeAll(){
        const note = Note.deleteAll()
        return note

    }
    public update(note:INoteUpdate,id: number){
        const updateNote: INote = Note.update(note, id)
        return updateNote
    }
    public getOne(id: number){
        const note = Note.getOne(Number(id))
        return note;
    }
    public getAll(){
        const notes = Note.getAll()
        return notes
    }
    public getStats(){
        const stats: number = Note.getAll().length
        return stats;
    }
}


export default new NoteService;