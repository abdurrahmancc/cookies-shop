import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductModel } from '../../../types/types'

import {
  addWishlist,
  deleteAllWishlist,
  deleteWishlist,
  getWishlist
} from './wishlistAPI'

type InitialState = {
  isLoading: boolean
  wishlist: ProductModel[] | []
  isExist: boolean
  isError: boolean
  error: string
}

const initialState: InitialState = {
  isLoading: false,
  wishlist: [],
  isExist: false,
  isError: false,
  error: ''
}

export const fetchWishlist = createAsyncThunk(
  'wishlist/fetchWishlist',
  async () => {
    const wishlist = await getWishlist()
    return wishlist
  }
)

export const removeToWishlist = createAsyncThunk(
  'wishlist/removeWishlist',
  async (id: string) => {
    const wishlist = await deleteWishlist(id)
    return wishlist
  }
)

export const removeAllWishlist = createAsyncThunk(
  'shoppingCart/removeAllCarts',
  async () => {
    const carts = await deleteAllWishlist()
    return carts
  }
)

export const addToWishlist = createAsyncThunk(
  'wishlist/addWishlist',
  async (id: string) => {
    const wishlist = await addWishlist(id)
    return wishlist
  }
)

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWishlist.pending, state => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchWishlist.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = false
        state.wishlist = action.payload
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.wishlist = []
        state.error = action.error?.message || 'something is Error'
      })
      .addCase(removeToWishlist.pending, state => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(
        removeToWishlist.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false
          state.isError = false
          state.wishlist = action.payload
        }
      )
      .addCase(removeToWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.wishlist = []
        state.error = action.error?.message || 'something is error'
      })
      .addCase(addToWishlist.pending, state => {
        state.isLoading = true
        state.isError = false
        state.isExist = false
      })
      .addCase(addToWishlist.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = false
        if (!action.payload) {
          state.wishlist = [...state.wishlist]
          state.isExist = true
        } else {
          state.isExist = false
          state.wishlist = [...state.wishlist, action.payload]
        }
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.isExist = false
        state.wishlist = []
        state.error = action.error?.message || 'something is Error'
      })
      .addCase(removeAllWishlist.pending, state => {
        state.isLoading = true
        state.isError = false
        state.isExist = false
      })
      .addCase(removeAllWishlist.fulfilled, state => {
        state.isLoading = false
        state.isError = false
        state.wishlist = []
      })
      .addCase(removeAllWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.isExist = false
        state.error = action.error?.message || 'something is Error'
      })
  }
})

export default wishlistSlice.reducer
