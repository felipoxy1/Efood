import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Prato } from '../../models/Restaurante'

type CartState = {
  items: Prato[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const prato = state.items.find(item => item.id === action.payload.id)

      if (!prato) {
        state.items.push(action.payload)
      } else {
        alert('Prato ja esta no carrinho')
      }
    },
    open: state => {
      state.isOpen = true
    },
    close: state => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
  },
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
