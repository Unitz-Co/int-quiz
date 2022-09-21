import { configureStore } from "@reduxjs/toolkit";

import SearchSlice from "./SearchSlice";

const Store = configureStore({ reducer: { searchSlice: SearchSlice.reducer } });

export default Store;
