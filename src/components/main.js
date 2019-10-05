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
		const { array } = this.props

		return (
			<div>
				<Navbar
					startSort={this.startSort}
					sortTest={this.sortTest}
					genArray={this.genArray}
				/>
				<div>{'Current: ' + this.props.current}</div>
				<div>{'Algorithm: ' + this.props.algorithm}</div>

				<MainWrapper>
					<Row value={array} />
				</MainWrapper>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		array: state.array.data,
		algorithm: state.algorithm.algorithm,
		current: state.currentOne.idx
	}
}

const mapDispatchToProps = dispatch => {
	return {
		generateArray: (length, max_height) => {
			// dispatch({ type: 'GEN_ARRAY', length: length, max_height: max_height })
			dispatch(genArray(length, max_height))
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
