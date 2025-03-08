import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice.js";
import { contactsReducer } from "./contacts/slice.js";
import { filtersReducer } from "./filters/slice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
