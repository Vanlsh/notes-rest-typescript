import React from 'react';
import './App.css'
import InputForm from "./components/InputForm/InputForm";
import NoteList from "./components/ListOfNote/NoteList";
import SummeryTable from "./components/SummaryTabel/SummeryTable";

function App() {

  return (
    <div className="app">
        <InputForm/>
        <div className="app-cont">
            <NoteList/>
            <SummeryTable/>
        </div>
    </div>
  );
}
export default App;
