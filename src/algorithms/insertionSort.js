import { setArray } from '../reducers/array'
import { setCurrentOne, setCurrentTwo } from '../reducers/insertion_sort'
// import

function insertionSort(arr, dispatch) {
	let array = arr.slice(0)
	// let toDispatch = []
	// testHelper(array, dispatch)
	insertionTest(arr, dispatch)
}

function insertionSortHelper(arr, dispatch) {
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

function insertionTest(arr, dispatch) {
	let n = arr.length
	var i = 1
	function loop() {
		setTimeout(function() {
			var key = arr[i]
			var j = i - 1
			dispatch(setCurrentTwo(i))
			while (j >= 0 && arr[j] < key) {
				dispatch(setCurrentOne(j))
				arr[j + 1] = arr[i]
				j = j - 1
			}
			arr[j + 1] = key

			i++
			if (i < n) {
				loop()
			}
		}, 50)
	}
	loop()
}

function testHelper(arr, dispatch) {
	// let n = arr.length
	// for (var i = 1; i < n; i++) {
	// 	dispatch(setCurrentOne(arr[i]))
	// }
	let n = arr.length
	var i = 1
	function loop() {
		setTimeout(function() {
			dispatch(setCurrentOne(i))
			i++
			if (i < n) {
				loop()
			}
		}, 100)
	}
	loop()
}

export default insertionSort
