import {ICounter} from "../models/ICounter";
import {INote} from "../models/INote";

interface IDateAndContent {
    newContent: string;
    date: any;
}

export class Helper{
    static getCreatedDate(){
        const dateCreated = new Date().toDateString().split(" ")
        return dateCreated[1] + " " + dateCreated[2] + "," + dateCreated[3]
    }

    static getDateFromContent(content:string):IDateAndContent{
    const reg = /\d{2,4}[./-]\d{2}[./-]\d{2,4}/
    const newContent = content.split(reg).join("")
    const dateMatched = content.match(/\d{2,4}[./-]\d{2}[./-]\d{2,4}/g)
    const date = dateMatched ? (dateMatched.length >= 1 ? dateMatched.join(" ") : dateMatched): " "
    return {newContent, date}
    }

    static transformCategory(category: string): string{
        let newCategory = category[0].toUpperCase()
        for(let i = 1; i < category.length;i++ ){
            if(category[i] == category[i].toUpperCase()) newCategory += " "
            newCategory += category[i]
        }
        return newCategory;
    }
    static countStats(notes: INote[]){
        const countCategoryStats: ICounter[] = [
            {type: "task", active: 0, archive: 0},
            {type: "idea", active: 0, archive: 0},
            {type: "randomThought", active: 0, archive: 0},
        ]
        countCategoryStats.forEach(category => {
            notes.forEach(note => {
                if(note.category === category.type){
                    note.active ? category.active = category.active + 1 : category.archive = category.archive + 1
                }
            })
        })
        return countCategoryStats
    }
}