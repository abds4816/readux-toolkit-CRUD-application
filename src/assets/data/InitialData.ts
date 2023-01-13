import { user } from "../../features/users/UserSlice";
import { v4 as uuidv4 } from 'uuid'

export const initialUsers: user[] = [
    {
        id: uuidv4(),
        username: "samsmith789",
        email: "samsmith789@hotmail.com",
        description: "I am a freelance writer and journalist with experience in writing for both print and online publications."
    },
    {
        id: uuidv4(),
        username: "ashleybrown",
        email: "ashleybrown@gmail.com",
        description: "I am a social media manager with experience in creating and executing social media strategies for businesses."
    },
    {
        id: uuidv4(),
        username: "mikemiller",
        email: "mikemiller@gmail.com",
        description: "I am a full-stack developer with experience in building web applications using JavaScript and React."
    }
]