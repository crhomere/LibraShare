import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isOpen: false,
};

const modalRemoveAllSlice = createSlice({
  name: 'modalRemoveAll',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalRemoveAllSlice.actions;
export default modalRemoveAllSlice.reducer;
