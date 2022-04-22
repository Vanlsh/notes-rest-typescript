import React, {useEffect, useState} from 'react';
import './SummeryBody.css';
import {Helper} from "../../../helper/Helper";
import {ICounter} from "../../../models/ICounter";
import {notesAPI} from "../../../services/NoteService";
import {INote} from "../../../models/INote";


const SummeryBody = () => {
    const {data: notes} = notesAPI.useFetchAllNotesQuery('')
    const[counter, setCounter] = useState<ICounter[]>([])
    useEffect(() => {
        if(notes){
            setCounter(Helper.countStats(notes as INote[]))
        }
    },[notes])
    return (
        <div>
            {counter && counter.map((item: ICounter,index: number) => {
                const link = "./img/"+ item.type + ".svg"
                return(
                    <div className="summary" key={index}>
                        <div>
                            <img src={link} alt="task"/>
                        </div>
                        <div>{Helper.transformCategory(item.type)}</div>
                        <div>{item.active}</div>
                        <div>{item.archive}</div>
                    </div>
                );
            })}
        </div>

    );
};

export default SummeryBody;