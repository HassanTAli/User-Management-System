import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

// ✅ typed helpers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
