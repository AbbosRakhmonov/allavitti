import {createSlice} from '@reduxjs/toolkit'

const navbarSlice = createSlice({
    name: 'language',
    initialState: {
        language: 'uz'
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})

export default navbarSlice.reducer

export const {changeLanguage} = navbarSlice.actions