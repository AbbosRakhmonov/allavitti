import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import Api from '../../Config/api'
import {filter, map} from 'lodash'

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (body, {rejectWithValue}) => {
        try {
            const {data} = await Api.get('/product')
            return data
        } catch ({error}) {
            return rejectWithValue(error)
        }
    }
)

export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (body, {rejectWithValue}) => {
        try {
            const {data} = await Api.post('/product', body, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            return data
        } catch ({error}) {
            return rejectWithValue(error)
        }
    })

export const editProduct = createAsyncThunk(
    'products/editProduct',
    async ({id, formData}, {rejectWithValue}) => {
        try {
            const {data} = await Api.put(`/product/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            return data
        } catch ({error}) {
            return rejectWithValue(error)
        }
    })

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (body, {rejectWithValue}) => {
        try {
            await Api.delete(`/product/${body}`)
            return body
        } catch ({error}) {
            return rejectWithValue(error)
        }
    })

export const getProduct = createAsyncThunk(
    'products/getProduct',
    async (body, {rejectWithValue}) => {
        try {
            const {data} = await Api.get(`/product/${body}`)
            return data
        } catch ({error}) {
            return rejectWithValue(error)
        }
    })

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        product: null,
        error: null,
        loading: false
    },
    reducers: {
        resetProduct: (state) => {
            state.product = null
        },
        resetError: (state) => {
            state.error = null
        }
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.error = null
            state.loading = true
        },
        [getProducts.fulfilled]: (state, {payload: {data}}) => {
            state.products = data
            state.loading = false
            state.product = null
        },
        [getProducts.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        },
        [addProduct.pending]: (state) => {
            state.error = null
            state.loading = true
        },
        [addProduct.fulfilled]: (state, {payload: {data}}) => {
            state.products = [...state.products, data]
            state.loading = false
        },
        [addProduct.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        },
        [editProduct.pending]: (state) => {
            state.error = null
            state.loading = true
        },
        [editProduct.fulfilled]: (state, {payload: {data}}) => {
            state.loading = false
            state.products = map(state.products, (item) => {
                if (item._id === data._id) {
                    return data
                }
                return item
            })
        },
        [editProduct.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        },
        [deleteProduct.pending]: (state) => {
            state.error = null
            state.loading = true
        },
        [deleteProduct.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.products = filter(state.products, (item) => item._id !== payload)
        },
        [deleteProduct.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        },
        [getProduct.pending]: (state) => {
            state.error = null
            state.loading = true
            state.product = null
        },
        [getProduct.fulfilled]: (state, {payload: {data}}) => {
            state.loading = false
            state.product = data
        },
        [getProduct.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        }
    }
})

export default productsSlice.reducer

export const {resetError,resetProduct} = productsSlice.actions