import Main from './main'
import { connect } from 'react-redux'
import insertionSort from '../algorithms/insertionSort'
import { setArray } from '../reducers/array'
import { setAlgorithm } from '../reducers/algorithm'

const mapStateToProps = state => {
	return {
		array: state.array,
		algorithm: state.algorithm,
		currentOne: state.currentOne,
		currentTwo: state.currentTwo,
		running: state.running
	}
}

const mapDispatchToProps = () => dispatch => ({
	initArray: (length, height) => {
		let array = Array.from({ length: length }, () =>
			Math.floor(Math.random() * height)
		)
		console.log('in main.js: ' + array)
		dispatch(setArray(array))
	},

	setAlgorithm: algorithm => {
		dispatch(setAlgorithm(algorithm))
	},

	startSorting: (algorithm, array) => {
		var doSort
		if (algorithm == 'insertionSort') {
			doSort = insertionSort
		}
		doSort(array, dispatch)
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)
