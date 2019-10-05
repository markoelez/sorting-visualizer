import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Square = styled.div`
	${'' /* background: ${props => props.theme.node_color}; */}
	
    background: ${props => props.current}
	height: ${props => props.value}px
	width: 8px;
`

class ArrayNode extends React.Component {
	color = () => {
		if (this.props.idx == this.props.currentOne) {
			return '#a5ff54'
		} else if (this.props.idx == this.props.currentTwo) {
			return '#ed6c66'
		} else {
			return '#ffcb00'
		}
	}
	render() {
		const { currentOne, value, idx, array } = this.props

		console.log('in render()' + currentOne)

		return <Square value={value} current={this.color()}></Square>
	}
}

const mapStateToProps = state => {
	return {
		currentOne: state.currentOne,
		currentTwo: state.currentTwo,

		array: state.array
	}
}

export default connect(mapStateToProps)(ArrayNode)
