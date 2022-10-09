import { configureStore } from '@reduxjs/toolkit'
import quizReducer from '../features/quizSlice/quizSlice';

//storage
export const storage = configureStore({
  reducer:{
    quizCountry : quizReducer,
  }
});