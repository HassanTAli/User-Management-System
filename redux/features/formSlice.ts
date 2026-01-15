import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormData {
  personal: {
    fullName: string;
    email: string;
    gender: string;
    country?: string;
    age: string;
  };
  preferences: {
    category: string;
    interests: string[];
  };
}

const initialState: FormData = {
  personal: {
    fullName: "",
    email: "",
    gender: "",
    country: "",
    age: "",
  },
  preferences: {
    category: "",
    interests: [],
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updatePersonal: (state, action: PayloadAction<FormData["personal"]>) => {
      state.personal = action.payload;
    },
    updatePreferences: (
      state,
      action: PayloadAction<FormData["preferences"]>
    ) => {
      state.preferences = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const { updatePersonal, updatePreferences, resetForm } =
  formSlice.actions;

export default formSlice.reducer;
