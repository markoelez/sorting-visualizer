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

function testHelper(arr, dispatch) {
	// let n = arr.length
	let n = 100
	// for (var i = 1; i < n; i++) {
	// 	dispatch(setCurrentOne(arr[i]))
	// }

	var i = 1 //  set your counter to 1

	function myLoop() {
		//  create a loop function
		setTimeout(function() {
			//  call a 3s setTimeout when the loop is called
			dispatch(setCurrentOne(arr[i]))
			i++
			if (i < n) {
				//  if the counter < 10, call the loop function
				myLoop() //  ..  again which will trigger another
			} //  ..  setTimeout()
		}, 100)
	}

	myLoop() //  start the loop
}

export default insertionSort
