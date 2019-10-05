import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Square = styled.div`
	${'' /* background: ${props => props.theme.node_color}; */}
	
    background: ${props => props.current}
	height: ${props => props.height}px
	width: 8px;
`

class ArrayNode extends React.Component {
	color = () => {
		if (this.props.value == this.props.current) {
			return '#a5ff54'
		} else {
			return '#ed6c66'
		}
	}
	render() {
		const height = this.props.value
		const current = this.props.current

		return <Square height={height} current={this.color()}></Square>
	}
}

const mapStateToProps = state => {
	return {
		current: state.currentOne
	}
}

export default connect(mapStateToProps)(ArrayNode)
