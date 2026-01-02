import { configureStore } from "@reduxjs/toolkit";
import CovidReducer from "./covidSlice";
const store = configureStore({ reducer: CovidReducer });

export default store;
