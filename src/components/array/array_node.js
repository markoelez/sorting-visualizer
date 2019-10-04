import React from 'react'
import styled from 'styled-components'

const Square = styled.div`
	background: ${props => props.theme.node_color};
    height: ${props => props.height}px
	width: 20px;
`

class ArrayNode extends React.Component {
	render() {
		const height = this.props.value
		return <Square height={height}></Square>
	}
}

export default ArrayNode
