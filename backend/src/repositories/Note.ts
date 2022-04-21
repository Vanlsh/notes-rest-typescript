import {INote, INoteUpdate} from "../Types/INote";

class Note{
    private Notes: INote[]
    constructor() {
        this.Notes = [
            {id: 1,title: "Monday" ,created: "Apr 07,2022" ,category: "idea",content: "Hello 20/04/2022 Word",active: true },
            {id: 2,title: "Tuesday" ,created: "Apr 07,2022" ,category: "task",content: "Hello 20/04/2022 Word",active: true },
            {id: 3,title: "Wednesday" ,created: "Apr 07,2022" ,category: "idea",content: "Hello 20/04/2022 Word", active: true},
            {id: 4,title: "Thursday" ,created: "Apr 07,2022" ,category: "randomThought",content: "Hello Word",active: true},
            {id: 5,title: "Friday" ,created: "Apr 07,2022" ,category: "idea",content: "Hello 20/04/2022 Word",active: true},
            {id: 6,title: "Saturday" ,created: "Apr 07,2022" ,category: "task",content: "Hello Word", active: true},
            {id: 7,title: "Sunday" ,created: "Apr 07,2022" ,category: "idea",content: "Hello 20/04/2022 Word", active: true},
        ]
    }
    public addNote(note:INote): INote[]{
        this.Notes.push(note)
        return this.Notes
    }
    public deleteAll() {
        this.Notes = []
        return this.Notes
    }
    public deleteOne(id: number){
        this.Notes = this.Notes.filter(note => note.id !== id)
        return this.Notes
    }
    public update(note: INoteUpdate, id: number){
        const noteIndex = this.Notes.findIndex(note => note.id === id)
        this.Notes[noteIndex] = {id,...note}
        return this.Notes[noteIndex]
    }
    public getOne(id: number){
        const noteIndex = this.Notes.findIndex(note => note.id === id)
        return this.Notes[noteIndex]
    }
    public getAll(){
        return this.Notes
    }
}

export default new Note

