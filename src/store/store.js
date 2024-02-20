import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice/userSlice";
import movieSlice from "../features/movieSlice/movieSlice";

export const store = configureStore({
    reducer : {
        user: userSlice,
        movie: movieSlice
    }
})