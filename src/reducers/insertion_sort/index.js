import { createAction, handleActions, handleAction } from 'redux-actions'

const initStateOne = 0
const initStateTwo = { idx: 0 }

export const SET_CURRENT_ONE = 'SET_CURRENT_ONE'
export const setCurrentOne = createAction(SET_CURRENT_ONE)

export const SET_CURRENT_TWO = 'SET_CURRENT_TWO'
export const setCurrentTwo = createAction(SET_CURRENT_TWO)

// export const currentOne = handleAction(
// 	SET_CURRENT_ONE,
// 	(state, action) => {
// 		console.log('ACTION: ' + action)
// 		return {
// 			idx: action.current
// 		}
// 	},
// 	initStateOne
// )

export const currentOne = handleActions(
	{
		SET_CURRENT_ONE: (state, { payload }) => {
			return payload
		}
	},
	initStateOne
)

export const currentTwo = handleAction(
	SET_CURRENT_TWO,
	(state, action) => {
		return state
	},
	initStateTwo
)
