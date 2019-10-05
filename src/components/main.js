import React from 'react'
import styled from 'styled-components'
import Row from './array/array'
import { connect } from 'react-redux'
import Navbar from './navbar/navbar'
import Button from '@material-ui/core/Button'
import insertionSort from '../algorithms/insertionSort'
import { setArray } from '../reducers/array'
import { setCurrentOne, setCurrentTwo } from '../reducers/insertion_sort'
import { setRunning } from '../reducers/running'
import { setAlgorithm } from '../reducers/algorithm'

const MainWrapper = styled.div`
	background-color: ${props => props.theme.bg_color};
	height: 100vh;
	padding-top: 50px;
	text-align: center;
`

class Main extends React.Component {
	setArray = () => {
		const { running } = this.props
		if (running == 0) {
			this.props.setArray(100, window.innerHeight / 1.4)
		} else {
			alert('Already Running!')
		}
	}
	sortTest = () => {
		this.props.setAlgorithm('insertionSort')
	}
	startSort = () => {
		const { running } = this.props
		if (running == 0) {
			this.props.startSorting(this.props.algorithm, this.props.array)
		} else {
			alert('Already Running!')
		}
	}
	render() {
		let { array, currentTwo, currentOne, algorithm } = this.props
		return (
			<div>
				<Navbar
					startSort={this.startSort}
					sortTest={this.sortTest}
					setArray={this.setArray}
				/>
				<div>
					Debug Panel:
					<div>{'CurrentOne: ' + currentOne}</div>
					<div>{'CurrentTwo: ' + currentTwo}</div>
					<div>{'Algorithm: ' + algorithm}</div>
				</div>

				<MainWrapper>
					<Row />
				</MainWrapper>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		array: state.array,
		algorithm: state.algorithm,
		currentOne: state.currentOne,
		currentTwo: state.currentTwo,
		running: state.running
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setArray: (length, height) => {
			let array = Array.from({ length: length }, () =>
				Math.floor(Math.random() * height)
			)
			console.log('in main.js: ' + array)
			dispatch(setArray(array))
			dispatch(setCurrentOne(0))
			dispatch(setCurrentTwo(0))
		},
		setAlgorithm: algorithm => {
			dispatch(setAlgorithm(algorithm))
		},
		startSorting: (algorithm, array) => {
			dispatch(setCurrentOne(0))
			dispatch(setCurrentTwo(0))
			var doSort
			if (algorithm == 'insertionSort') {
				doSort = insertionSort
			}
			dispatch(setRunning(1))
			doSort(array, dispatch)
			dispatch(setRunning(0))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)
