import { createAction, handleActions } from 'redux-actions'

const initState = 0

export const SET_RUNNING = 'SET_RUNNING'
export const setRunning = createAction(SET_RUNNING)

export const running = handleActions(
	{
		SET_RUNNING: (state, { payload }) => {
			console.log('RUNNING: ' + payload)
			return payload
		}
	},
	initState
)
