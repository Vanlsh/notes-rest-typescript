import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface NoteState {
    active: boolean
    editId: number | null
}

const initialState: NoteState = {
    active: true,
    editId: null,
}
export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setIdEdit(state, action: PayloadAction<number | null>){
            state.editId = action.payload
        },
        changStatus(state){
            state.active = !state.active
        },
    },
})

export default noteSlice.reducer;