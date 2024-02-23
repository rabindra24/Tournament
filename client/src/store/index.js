import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice/LoginSlice";
import OrganiseSlice from "./OrganiseSlice/OrganiseSlice";

const store = configureStore({
    reducer : {
        login : LoginSlice,
        organise : OrganiseSlice
    }
})

export default store;