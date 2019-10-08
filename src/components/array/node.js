import React from 'react'
import { connect } from 'react-redux'
import { Square } from './style'

class Node extends React.Component {
	color = () => {
		if (this.props.idx == this.props.currentOne) {
			return '#80d6ce'
		} else if (this.props.idx == this.props.currentTwo) {
			return '#ff6dff'
		} else {
			return '#aca9d2'
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
