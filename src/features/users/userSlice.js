import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    status: 'idle',
    error: null
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.org/users')
    const data = await response.json()
    return data
})

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
        .addCase(fetchUsers.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.users = state.users.concat(action.payload)
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
});

export const selectAllUsers = (state) => state.users.users;
export const getUsersError = (state) => state.users.error;
export const getUsersStatus = (state) => state.users.status;

export default userSlice.reducer;