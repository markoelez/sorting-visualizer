import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Square = styled.div`
	background: ${props => props.theme.node_color};
    height: ${props => props.height}px
	width: 8px;
`

class ArrayNode extends React.Component {
	render() {
		const height = this.props.value
		const current = this.props.current

		return <Square height={height}></Square>
	}
}

const mapStateToProps = state => {
	return {
		current: state.currentOne.idx
	}
}

export default connect(mapStateToProps)(ArrayNode)
