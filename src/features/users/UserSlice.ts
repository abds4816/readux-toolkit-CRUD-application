import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialUsers } from "../../assets/data/InitialData";

export interface user {
    id: string | undefined,
    username: string,
    email: string,
    description: string
}

interface userState {
    users: user[]
}

const initialState: userState = {
    users: initialUsers
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<user>) => {
            state.users.push(action.payload)
        },
        deleteUser: (state, action: PayloadAction<string | undefined>) => {
            state.users = state.users.filter((user) => user.id !== action.payload)
        },
        editUser: (state, action: PayloadAction<user>) => {
            const existingUser = state.users.find(user => user.id === action.payload.id)
            if (existingUser) {
                existingUser.username = action.payload.username
                existingUser.email = action.payload.email
                existingUser.description = action.payload.description
            }
        }
    }
})

export const { addUser, deleteUser, editUser } = userSlice.actions

export default userSlice.reducer