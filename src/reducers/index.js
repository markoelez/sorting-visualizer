import { combineReducers } from 'redux'
import { array } from './array'
import { currentOne, currentTwo } from './insertion_sort'
import { algorithm } from './algorithm'
import { running } from './running'

export default combineReducers({
	running,
	array,
	currentTwo,
	currentOne,
	algorithm
})
