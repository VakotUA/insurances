import { configureStore } from '@reduxjs/toolkit'
import modulesReducer from '../modules/moduleSlice'

export default configureStore({
  reducer: {
    modules: modulesReducer
  }
})
