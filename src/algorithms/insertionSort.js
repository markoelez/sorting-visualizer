import { setArray } from '../reducers/array'
import { setCurrentOne } from '../reducers/insertion_sort'
// import

function insertionSort(arr, dispatch) {
	let array = arr.slice(0)
	// let toDispatch = []
	testHelper(array, dispatch)
}

function insertionSortHelper(arr) {
	let n = arr.length
	for (var i = 1; i < n; i++) {
		var key = arr[i]
		var j = i - 1
		while (j >= 0 && arr[j] < key) {
			arr[j + 1] = arr[i]
			j = j - 1
		}
		arr[j + 1] = key
	}
}

async function testHelper(arr, dispatch) {
	let n = arr.length
	for (var i = 1; i < n; i++) {
		console.log(i)
		dispatch(
			setCurrentOne({
				idx: i
			})
		)
	}
}

export default insertionSort
