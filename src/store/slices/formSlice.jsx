import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carSlice";

const formSlice = createSlice({
    name: "from",
    initialState: {
        name: "",
        cost: 0
    },
    reducers: {
        changeName(state, action){
            state.name = action.payload
        },
        changeCost(state, action){
            state.cost = action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(addCar, (state) =>{
            state.name = "";
            state.cost = 0;
        })
    }
})

export const {changeName, changeCost} = formSlice.actions
export default formSlice.reducer;