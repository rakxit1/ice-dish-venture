import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  owner: string;
}

const initialState: InitialStateType = {
  owner: "",
};

const options = {
  name: "user",
  initialState,
  reducers: {
    setResetUser: () => initialState,
    setOwner: (state, action: PayloadAction<string>) => {
      state.owner = action.payload;
    },
  },
};

const userSlice = createSlice(options);

export const { setOwner, setResetUser } = userSlice.actions;

export const selectOwner = (state) => state.user.owner;

export default userSlice.reducer;
