import { configureStore } from "@reduxjs/toolkit";
import tasks from "./reducers";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("tasks");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("tasks", serializedState);
  } catch (e) {
    console.error(e);
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    tasks,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
