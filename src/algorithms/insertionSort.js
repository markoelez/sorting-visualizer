import { setArray } from '../reducers/array'
import { setCurrentOne, setCurrentTwo } from '../reducers/insertion_sort'
import { setRunning } from '../reducers/running'

function insertionSort(arr, dispatch) {
	let array = arr.slice(0)
	// testHelper(array, dispatch)
	insertionTest(array, dispatch)
	dispatch(setRunning(0))
}

function insertionTest(arr, dispatch) {
	let n = 4 //arr.length
	var i = 1
	function loop() {
		setTimeout(function() {
			var temp = arr[i]
			var j = i - 1
			// dispatch(setCurrentTwo(i))
			while (j >= 0 && arr[j] > temp) {
				// dispatch(setCurrentOne(j))
				console.log('swap j: ' + arr[j + 1])
				console.log('swap i: ' + arr[i])

				arr[j + 1] = arr[i]
				j--
			}
			console.log('temp: ' + temp)

			arr[j + 1] = temp
			// dispatch(setArray(arr))
			console.log('ARRAY: ' + arr)
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
