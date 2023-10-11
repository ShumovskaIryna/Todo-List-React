import { createSlice } from '@reduxjs/toolkit';
import { Filters } from '../../constants/constants';
const initialValue = {
  filters: [
    { id: 1, name: Filters.ALL },
    { id: 2, name: Filters.ACTIVE },
    { id: 3, name: Filters.COMPLETED },
  ]
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialValue,
  reducers: {},
});

export default filterSlice.reducer;