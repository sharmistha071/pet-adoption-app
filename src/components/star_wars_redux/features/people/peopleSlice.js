import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  items: [],
  error: null,
}

export const peopleSlice = createSlice({
  name: 'peole',
  initialState,
  reducers: {},
})
