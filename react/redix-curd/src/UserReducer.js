import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./Data";


const userReducer = createSlice({
    name:"users",
    initialState:userData,
    reducers:{
         addUsers:(state,action)=>{
           // console.log(action); //{type: users/adduser,payload}
            // console.log(action.payload);
            console.log(state)
            state.push(action.payload)
         },
         updateUsers:(state,action)=>{
            // console.log(action); //{type: users/adduser,payload}
             // console.log(action.payload);
             console.log(action)
          }
    }
})

export const {addUsers} = userReducer.actions;
export default userReducer.reducer;