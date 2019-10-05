import { createAction, handleAction } from 'redux-actions'

const initState = {
	algorithm: 'insertionSort'
}

export const SET_ALGORITHM = 'SET_ALGORITHM'
export const setAlgorithm = createAction(SET_ALGORITHM)

export const algorithm = handleAction(
	SET_ALGORITHM,
	(state, action) => {
		return {
			algorithm: action.algorithm
		}
	},
	initState
)
