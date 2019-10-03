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
			array: Array.from({ length: 40 }, () => Math.floor(Math.random() * 40))
		}
	},
	initState
)

export default reducer
