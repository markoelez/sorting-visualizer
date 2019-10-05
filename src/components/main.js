import React from 'react'
import styled from 'styled-components'
import Row from './array/array'
import { connect } from 'react-redux'
import Navbar from './navbar/navbar'
import Button from '@material-ui/core/Button'
import insertionSort from '../algorithms/insertionSort'
import { genArray } from '../reducers/array'

const MainWrapper = styled.div`
	background-color: ${props => props.theme.bg_color};
	height: 100vh;
	padding-top: 50px;
	text-align: center;
`

class Main extends React.Component {
	genArray = () => {
		this.props.generateArray(100, window.innerHeight / 1.4)
	}
	sortTest = () => {
		this.props.setAlgorithm('insertionSort')
	}
	startSort = () => {
		this.props.startSorting(this.props.algorithm, this.props.array)
	}
	render() {
		let { array, current, algorithm } = this.props
		console.log('in render()' + array)
		return (
			<div>
				<Navbar
					startSort={this.startSort}
					sortTest={this.sortTest}
					genArray={this.genArray}
				/>
				<div>{'Current: ' + current}</div>
				<div>{'Algorithm: ' + algorithm}</div>

				<MainWrapper>
					<Row value={array} />
				</MainWrapper>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		array: state.array,
		algorithm: state.algorithm.algorithm,
		current: state.currentOne
	}
}

const mapDispatchToProps = dispatch => {
	return {
		generateArray: (length, height) => {
			// let array = Array.from({ length: length }, () =>
			// 	Math.floor(Math.random() * height)
			// )
			let array = Array.from(Array(100).keys())
			console.log('in main.js: ' + array)
			dispatch(genArray(array))
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
