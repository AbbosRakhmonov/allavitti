import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import Api from '../../Config/api'

export const signIn = createAsyncThunk(
    'auth/signIn',
    async (body, {rejectWithValue}) => {
        try {
            const {data} = await Api.post('/auth/login', body)
            return data
        } catch ({error}) {
            return rejectWithValue(error)
        }
    })

export const getMe = createAsyncThunk(
    'auth/getMe',
    async (body, {rejectWithValue}) => {
        try {
            const {data} = await Api.post('/auth/me', body)
            return data
        } catch ({error}) {
            return rejectWithValue(error)
        }
    })

export const loginSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoggedIn: false,
        token: null,
        error: null,
        loading: false
    },
    reducers: {
        logOut: (state, action) => {
            state.user = null
            state.isLoggedIn = false
            state.token = null
            state.error = action.payload
            localStorage.removeItem('allavittiToken')
        }
    },
    extraReducers: {
        [signIn.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [signIn.fulfilled]: (state, {payload: {token}}) => {
            state.token = token
            state.isLoggedIn = true
            state.loading = false
            localStorage.setItem('allavittiToken', token)
        },
        [signIn.rejected]: (state, {payload}) => {
            state.error = payload
            state.loading = false
        },
        [getMe.fulfilled]: (state, {payload: {data}}) => {
            state.user = data
            state.isLoggedIn = true
            state.token = localStorage.getItem('allavittiToken')
        },
        [getMe.rejected]: (state, {payload}) => {
            state.error = payload
            state.isLoggedIn = false
            state.token = null
            state.user = null
            localStorage.removeItem('allavittiToken')
        }
    }
})

export const {logOut} = loginSlice.actions
export default loginSlice.reducer
