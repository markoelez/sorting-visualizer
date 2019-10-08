import { connect } from 'react-redux'
import { setAlgorithm } from '../../reducers/algorithm'
import { setArray } from '../../reducers/array'
import insertionSort from '../../algorithms/insertionSort'
import Navbar from './navbar'

const mapStateToProps = state => {
	return {
		algorithm: state.algorithm,
		array: state.array
	}
}

const mapDispatchToProps = dispatch => {
	return {
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
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar)
