import React from 'react'
import styled from 'styled-components'
import Row from './array/array'
import { connect } from 'react-redux'
import Navbar from './navbar/navbar'

const MainWrapper = styled.div`
	background-color: #a5ff54;
	height: 100vh;
	padding: 150px;
	text-align: center;
`

class Main extends React.Component {
	genArray = () => {
		this.props.generateArray(50, window.innerHeight / 2)
	}
	render() {
		const { array } = this.props
		return (
			<div>
				<Navbar genArray={this.genArray} />
				<MainWrapper>
					{/* <button onClick={generateArray} /> */}
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
		generateArray: (length, max_height) => {
			dispatch({ type: 'GEN_ARRAY', length: length, max_height: max_height })
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)
