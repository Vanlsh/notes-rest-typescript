import React from 'react';
import Header from "./Header/Header";
import Notes from "./Notes/Notes";

const NoteList = () => {
    return (
        <div style={{width: "1000px"}}>
            <Header/>
            <Notes/>
        </div>
    );
};

export default NoteList;