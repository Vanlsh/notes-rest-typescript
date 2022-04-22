import {INote, INoteUpdate} from "../Types/INote";
import Note from "../repositories/Note";
import {ICounter} from "../Types/ICounter";



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
        const stats = Note.getAll().length
        // const countCategoryStatus: ICounter[] = [
        //     {type: "task", active: 0, archive: 0},
        //     {type: "idea", active: 0, archive: 0},
        //     {type: "randomThought", active: 0, archive: 0},
        // ]
        // countCategoryStatus.forEach(category => {
        //     notes.forEach(note => {
        //         if(note.category === category.type){
        //             note.active ? category.active = category.active + 1 : category.archive = category.archive + 1
        //         }
        //     })
        // })
        return stats;
    }
}


export default new NoteService;