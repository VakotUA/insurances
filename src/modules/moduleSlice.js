import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: "Bike", coverage: [0, 3000], selectedCoverage: 0, risk: 0.3, price: 0, isInCart: false },
  { id: '1', name: "Jewelry", coverage: [500, 10000], selectedCoverage: 0, risk: 0.05, price: 0, isInCart: false },
  { id: '2', name: "Electronics", coverage: [500, 6000], selectedCoverage: 0, risk: 0.35, price: 0, isInCart: false },
  { id: '3', name: "Sports Equipment", coverage: [0, 20000], selectedCoverage: 0, risk: 0.3, price: 0, isInCart: false },
]

const moduleSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {
    moduleAdded(state, action) {
      state.push(action.payload)
    },
    moduleToCart(state, action) {
      const { id } = action.payload

      const selectedModule = state.find(item => item.id === id)

      if (selectedModule) {
         selectedModule.isInCart = !selectedModule.isInCart
       }
    },
    setCoverage(state, action) {
      const { id, newCoverage } = action.payload

      const selectedModule = state.find(item => item.id === id)

      selectedModule.selectedCoverage = newCoverage
      selectedModule.price = Math.ceil((selectedModule.selectedCoverage * selectedModule.risk)*100)/100
    }
  }
})

export const { moduleAdded, moduleToCart, setCoverage } = moduleSlice.actions

export default moduleSlice.reducer
