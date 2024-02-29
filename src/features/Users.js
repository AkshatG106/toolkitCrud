import { createSlice, isAction } from "@reduxjs/toolkit"; 
// import { UsersData } from "../FakeData"; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const userSlice = createSlice({
    name: "users",
    initialState:{value: []},
    reducers:{
        addUser:(state, action) => {
            state.value.push(action.payload)
            toast.success('User Added Successfully')
        },
        deleteUser:(state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
            toast.success('User Removed Successfully')
        },
        updateEmail:(state, action) => {
            state.value.map((user) => {
                if(user.id === action.payload.id){
                    user.email = action.payload.email;
                    toast.success('Email Updated Successfully')
                }
            })
        },
        updateName:(state, action) => {
            state.value.map((user) => {
                if(user.id === action.payload.id){
                    user.name = action.payload.name;
                    toast.success('Name Updated Successfully')
                }
            })
        }
    }
})

export const {addUser, deleteUser, updateEmail, updateName} = userSlice.actions;
export default userSlice.reducer;