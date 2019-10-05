import { createAction, handleActions } from 'redux-actions'

const initState = []

// const reducer = (state = initState, action) => {
// 	return state
// }

export const GEN_ARRAY = 'GEN_ARRAY'
export const genArray = createAction(GEN_ARRAY)

// export const array = handleAction(
// 	GEN_ARRAY,
// 	(state, action) => {
// return {
// 	...state,
// 	data: Array.from({ length: action.length }, () =>
// 		Math.floor(Math.random() * action.max_height)
// 	)
// }
// 	},
// 	initState
// )

export const array = handleActions(
	{
		GEN_ARRAY: (state, { payload }) => {
			console.log('in reducer: ' + payload)
			return payload
		}
	},
	initState
)
