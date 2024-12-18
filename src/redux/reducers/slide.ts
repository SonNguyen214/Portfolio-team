import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  isHasSlider: boolean;
}

const initialState: IState = {
  isHasSlider: true,
};

const slicer = createSlice({
  name: "slide",
  initialState,
  reducers: {
    setIsHasSlide: (state: IState, action: PayloadAction<boolean>) => {
      state.isHasSlider = action.payload;
    },
  },
});

export const { setIsHasSlide } = slicer.actions;

export default slicer.reducer;
