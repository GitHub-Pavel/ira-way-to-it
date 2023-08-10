import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  example: '',
}

const setExampleAction = (state, action) => {
    state.example = action.payload
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setExample: setExampleAction
  }
})


export const { setExample } = commonSlice.actions
export default commonSlice.reducer