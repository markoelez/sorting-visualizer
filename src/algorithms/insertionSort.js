import { updateArray } from '../reducers/array'
import { setCurrentOne, setCurrentTwo } from '../reducers/insertion_sort'
import { setRunning } from '../reducers/running'

function insertionSort(arr, dispatch) {
	let array = arr.slice(0)
	// testHelper(array, dispatch)
	delayedInsertion(array, dispatch)
	dispatch(setRunning(0))
}

function delayedInsertion(array, dispatch) {
	let n = array.length
	var i = 0
	function loop() {
		setTimeout(function() {
			var temp = array[i]
			var j = i - 1
			// dispatch(setCurrentOne(i))
			while (j >= 0 && array[j] > temp) {
				array[j + 1] = array[j]
				j--
				// dispatch(setCurrentTwo(j))
			}
			array[j + 1] = temp
			// console.log('ARRAY: ' + array)
			dispatch(updateArray(array))
			i++
			if (i < n) {
				loop()
			}
		}, 200)
	}
	loop()
	console.log('DONE')
}

function normalInsertion(array, dispatch) {
	for (var i = 0; i < array.length; i++) {
		var temp = array[i]
		var j = i - 1
		while (j >= 0 && array[j] > temp) {
			array[j + 1] = array[j]
			j--
		}
		array[j + 1] = temp
		dispatch(updateArray(array))
		console.log('ARRAY: ' + array)
	}
}

export default insertionSort
