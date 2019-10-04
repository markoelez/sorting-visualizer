import React from 'react'
import styled from 'styled-components'
import Row from './array/array'
import { connect } from 'react-redux'
import Navbar from './navbar/navbar'
import Button from '@material-ui/core/Button'

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
		this.props.startSorting('INSERTION_SORT', this.props.array)
	}
	render() {
		const { array } = this.props
		return (
			<div>
				<Navbar sortTest={this.sortTest} genArray={this.genArray} />
				<MainWrapper>
					<Row value={array} />
				</MainWrapper>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		array: state.array.data
	}
}

const mapDispatchToProps = dispatch => {
	return {
		generateArray: (length, max_height) => {
			dispatch({ type: 'GEN_ARRAY', length: length, max_height: max_height })
		},
		startSorting: (method, data) => {
			dispatch({ type: method, data: data })
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)
