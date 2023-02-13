import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  addCart,
  deleteCart,
  deleteCarts,
  getCarts,
  setCartQuantityToDb
} from './shoppingCartAPI'

type InitialState = {
  isLoading: boolean
  carts: [] | any
  isExist: boolean
  isError: boolean
  cartQuantity: number
  error: string
  shoppingCartQuantity: {}
}

const initialState: InitialState = {
  isLoading: false,
  carts: [],
  isExist: false,
  isError: false,
  shoppingCartQuantity: {},
  cartQuantity: 0,
  error: ''
}

export const fetchCarts = createAsyncThunk(
  'shoppingCart/fetchCarts',
  async () => {
    const carts = await getCarts()
    return carts
  }
)

export const removeToCart = createAsyncThunk(
  'shoppingCart/removeCart',
  async (id: string) => {
    const cart = await deleteCart(id)
    return cart
  }
)

export const removeAllCarts = createAsyncThunk(
  'shoppingCart/removeAllCarts',
  async () => {
    const carts = await deleteCarts()
    return carts
  }
)

export const addToCart = createAsyncThunk(
  'shoppingCart/addCart',
  async (id: string) => {
    const cart = await addCart(id)
    return cart
  }
)

export const changeQuantity = createAsyncThunk(
  'shoppingCart/changeQuantity',
  async (data: any) => {
    const result = await setCartQuantityToDb(data)
    return result
  }
)

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: initialState,
  reducers: {
    setQuantity: (state, action) => {
      state.cartQuantity = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCarts.pending, state => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchCarts.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        // console.log(action.payload)
        state.isError = false
        state.carts = action.payload?.keys
        state.shoppingCartQuantity = action.payload.shoppingCartQuantity
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        state.isLoading = false
        state.carts = []
        state.error = action.error?.message || 'something is error'
      })
      .addCase(removeToCart.pending, state => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(removeToCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.carts = action.payload
      })
      .addCase(removeToCart.rejected, (state, action) => {
        state.isLoading = false
        state.carts = []
        state.error = action.error?.message || 'something is error'
      })
      .addCase(addToCart.pending, state => {
        state.isLoading = true
        state.isError = false
        state.isExist = false
      })
      .addCase(addToCart.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = false
        if (!action.payload) {
          state.carts = [...state.carts]
          state.isExist = true
        } else {
          state.isExist = false
          state.carts = [...state.carts, action.payload]
        }
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false
        state.isExist = false
        state.error = action.error?.message || 'something is error'
      })
      .addCase(removeAllCarts.pending, state => {
        state.isLoading = true
        state.isError = false
        state.isExist = false
      })
      .addCase(removeAllCarts.fulfilled, state => {
        state.isLoading = false
        state.isError = false
        state.carts = []
      })
      .addCase(removeAllCarts.rejected, (state, action) => {
        state.isLoading = false
        state.isExist = false
        state.error = action.error?.message || 'something is error'
      })
      .addCase(changeQuantity.pending, state => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(changeQuantity.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.carts = [...state.carts]
        state.cartQuantity = action.payload
      })
      .addCase(changeQuantity.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error?.message || 'something is error'
      })
  }
})

export const { setQuantity } = shoppingCartSlice.actions
export default shoppingCartSlice.reducer
