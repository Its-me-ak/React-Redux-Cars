import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: "cars",
    initialState : {
        searchTerm: "",
        data: []
    },
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload
        },
        addCar(state, action){
            // Assumption
            // action.payload === {name: "abc", cost: 999}
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeCar(state, action){
            // Assumption
            // action.payload === the id of the car we want to remove
            const deleteCarById = state.data.filter((car) => car.id !== action.payload);
            state.data = deleteCarById;
        }
    }
})

export const {changeSearchTerm, addCar, removeCar} = carSlice.actions
export default carSlice.reducer