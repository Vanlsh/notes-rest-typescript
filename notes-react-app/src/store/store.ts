import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import noteReducer from "./redusers/NoteSlice"
import {notesAPI} from "../services/NoteService";

const rootReducer = combineReducers({
    noteReducer,
    [notesAPI.reducerPath]: notesAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(notesAPI.middleware)
        )
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AddDispatch = AppStore['dispatch']