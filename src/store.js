import { configureStore } from '@reduxjs/toolkit'
import { reduceItem } from './components/Input'

export default configureStore({
  item: reduceItem
});