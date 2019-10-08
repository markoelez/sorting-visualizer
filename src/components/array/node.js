import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Square = styled.div`	
    background: ${props => props.current}
	height: ${props => props.value}px
	width: 8px;
`

class Node extends React.Component {
	color = () => {
		if (this.props.idx == this.props.currentOne) {
			return '#80d6ce'
		} else if (this.props.idx == this.props.currentTwo) {
			return '#ff6dff'
		} else {
			return '#a5ff54'
		}
	}
	render() {
		const { currentOne, value } = this.props

		return <Square value={value} current={this.color()}></Square>
	}
}

const mapStateToProps = state => {
	return {
		currentOne: state.currentOne,
		currentTwo: state.currentTwo
	}
}

export default connect(mapStateToProps)(Node)
