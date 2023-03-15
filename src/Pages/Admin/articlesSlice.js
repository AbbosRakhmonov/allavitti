import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import Api from '../../Config/api'

export const getArticles = createAsyncThunk(
    'articles/getArticles',
    async (body, {rejectWithValue}) => {
        try {
            const {data} = await Api.get('/article')
            return data
        } catch ({error}) {
            return rejectWithValue(error)
        }
    })

export const addArticle = createAsyncThunk(
    'articles/addArticle',
    async (body, {rejectWithValue}) => {
        try {
            const {data} = await Api.post('/article', body)
            return data
        } catch ({error}) {
            return rejectWithValue(error)
        }
    })

export const editArticle = createAsyncThunk(
    'articles/editArticle',
    async ({id, obj}, {rejectWithValue}) => {
        try {
            const {data} = await Api.put(`/article/${id}`, obj)
            return data
        } catch ({error}) {
            return rejectWithValue(error)
        }
    })

export const deleteArticle = createAsyncThunk(
    'articles/deleteArticle',
    async (body, {rejectWithValue}) => {
        try {
            await Api.delete(`/article/${body}`)
            return body
        } catch ({error}) {
            return rejectWithValue(error)
        }
    })

export const getArticle = createAsyncThunk(
    'articles/getArticle',
    async (body, {rejectWithValue}) => {
        try {
            const {data} = await Api.get(`/article/${body}`)
            return data
        } catch ({error}) {
            return rejectWithValue(error)
        }
    })

const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        articles: [],
        article: null,
        loading: false,
        error: null
    },
    reducers: {
        resetArticle: (state) => {
            state.article = null
        },
        resetError: (state) => {
            state.error = null
        }
    },
    extraReducers: {
        [getArticles.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [getArticles.fulfilled]: (state, {payload: {data}}) => {
            state.articles = data
            state.loading = false
            state.error = null
            state.article = null
        },
        [getArticles.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        },
        [addArticle.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [addArticle.fulfilled]: (state, {payload: {data}}) => {
            state.articles.push(data)
        },
        [addArticle.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        },
        [editArticle.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [editArticle.fulfilled]: (state, {payload: {data}}) => {
            state.loading = false
            state.articles = state.articles.map(article => article.id === data.id ? data : article)
        },
        [editArticle.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        },
        [deleteArticle.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [deleteArticle.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.articles = state.articles.filter(article => article._id !== payload)
        },
        [deleteArticle.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        },
        [getArticle.pending]: (state) => {
            state.loading = true
            state.error = null
            state.article = null
        },
        [getArticle.fulfilled]: (state, {payload: {data}}) => {
            state.loading = false
            state.article = data
        },
        [getArticle.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        }
    }
})

export default articlesSlice.reducer
export const {resetError,resetArticle} = articlesSlice.actions