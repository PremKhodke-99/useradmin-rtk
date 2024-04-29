import { createSlice } from "@reduxjs/toolkit";
import { deleteUsers } from "../actions";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
        },
        removeUser(state, action) {
            // state = state.filter((item) => { item.id === state.id })
            state.splice(action.payload, 1);
        },
        // deleteUsers(state, action) {
        //     // state.splice(0);
        //     return [];
        // }
    },
    extraReducers(builder) {
        builder.addCase(deleteUsers, () => {
            return [];
        })
    }
});

export default userSlice.reducer;
export const { addUser, removeUser /*, deleteUsers */ } = userSlice.actions;