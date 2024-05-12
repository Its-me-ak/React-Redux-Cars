import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./slices/carSlice";
import formSlice from "./slices/formSlice"

export const store = configureStore({
    reducer: {
        cars: carSlice,
        form: formSlice
    },
})


