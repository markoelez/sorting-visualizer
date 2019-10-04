import { createAction, handleAction } from 'redux-actions'

const initState = {
	array: []
}

// const reducer = (state = initState, action) => {
// 	return state
// }

const GEN_ARRAY = createAction('GEN_ARRAY')

const reducer = handleAction(
	GEN_ARRAY,
	(state, action) => {
		return {
			...state,
			array: Array.from({ length: action.length }, () =>
				Math.floor(Math.random() * action.max_height)
			)
		}
	},
	initState
)

export default reducer
