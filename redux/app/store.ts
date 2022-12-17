import { configureStore } from '@reduxjs/toolkit'
import wishlistReducer from '../features/wishlist/wishlistSlice'
import cartReducer from '../features/shoppingCart/shoppingCartSlice'

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
