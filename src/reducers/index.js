import { combineReducers } from 'redux'
import { array } from './array'
import { currentOne, currentTwo } from './insertion_sort'
import { algorithm } from './algorithm'

export default combineReducers({ array, currentTwo, currentOne, algorithm })
