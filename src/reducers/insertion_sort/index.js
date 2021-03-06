import { createAction, handleActions, handleAction } from 'redux-actions'

const initStateOne = 0
const initStateTwo = 0

export const SET_CURRENT_ONE = 'SET_CURRENT_ONE'
export const setCurrentOne = createAction(SET_CURRENT_ONE)

export const SET_CURRENT_TWO = 'SET_CURRENT_TWO'
export const setCurrentTwo = createAction(SET_CURRENT_TWO)

export const currentOne = handleActions(
	{
		SET_CURRENT_ONE: (state, { payload }) => {
			return payload
		}
	},
	initStateOne
)

export const currentTwo = handleActions(
	{
		SET_CURRENT_TWO: (state, { payload }) => {
			return payload
		}
	},
	initStateTwo
)
