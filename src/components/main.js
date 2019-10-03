import React from 'react'
import styled from 'styled-components'
import Row from './array'
import { connect } from 'react-redux'

const MainWrapper = styled.div`
	background-color: #a5ff54;
	height: 100vh;
	padding: 150px;
	text-align: center;
`

class Main extends React.Component {
	render() {
		const { array, generateArray } = this.props
		return (
			<div>
				<MainWrapper>
					<button onClick={generateArray} />
					<Row value={array} />
				</MainWrapper>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		array: state.array
	}
}

const mapDispatchToProps = dispatch => {
	return {
		generateArray: length => {
			dispatch({ type: 'GEN_ARRAY', length: length })
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)
