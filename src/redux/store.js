
import { configureStore } from '@reduxjs/toolkit';
import githubReducer from './reducers/githubReducer';

const store = configureStore({
  reducer: { github: githubReducer },
});

export default store;
