import { createAction, handleAction } from 'redux-actions'

const initState = {
	currentIdx: 0,
	data: []
}

const START_INSERTION_SORT = createAction('START_INSERTION_SORT')
