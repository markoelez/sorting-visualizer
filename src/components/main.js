import React from 'react'
import styled from 'styled-components'
import Row from './array/array'
import { connect } from 'react-redux'
import Navbar from './navbar/navbar'
import Button from '@material-ui/core/Button'
import insertionSort from '../algorithms/insertionSort'
import { genArray } from '../reducers/array'
import { setCurrentOne, setCurrentTwo } from '../reducers/insertion_sort'

const MainWrapper = styled.div`
	background-color: ${props => props.theme.bg_color};
	height: 100vh;
	padding-top: 50px;
	text-align: center;
`

class Main extends React.Component {
	genArray = () => {
		this.props.generateArray(50, window.innerHeight / 1.4)
	}
	sortTest = () => {
		this.props.setAlgorithm('insertionSort')
	}
	startSort = () => {
		this.props.startSorting(this.props.algorithm, this.props.array)
	}
	render() {
		let { array, currentTwo, currentOne, algorithm } = this.props
		return (
			<div>
				<Navbar
					startSort={this.startSort}
					sortTest={this.sortTest}
					genArray={this.genArray}
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
		algorithm: state.algorithm.algorithm,
		currentOne: state.currentOne,
		currentTwo: state.currentTwo
	}
}

const mapDispatchToProps = dispatch => {
	return {
		generateArray: (length, height) => {
			let array = Array.from({ length: length }, () =>
				Math.floor(Math.random() * height)
			)
			// let array = Array.from(Array(100).keys())
			console.log('in main.js: ' + array)
			dispatch(genArray(array))
			dispatch(setCurrentOne(0))
			dispatch(setCurrentTwo(0))
		},
		setAlgorithm: algorithm => {
			dispatch({ type: 'SET_ALGORITHM', algorithm: algorithm })
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
)(Main)
