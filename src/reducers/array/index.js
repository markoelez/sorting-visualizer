import { createAction, handleActions } from 'redux-actions'

const initState = []

export const SET_ARRAY = 'SET_ARRAY'
export const setArray = createAction(SET_ARRAY)

export const array = handleActions(
	{
		SET_ARRAY: (state, { payload }) => {
			console.log('REDUCER:::: ' + payload)
			return payload
		}
	},
	initState
)
