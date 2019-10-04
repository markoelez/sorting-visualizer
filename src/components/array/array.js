import React from 'react'
import ArrayNode from './array_node'
import styled from 'styled-components'

const RowWrapper = styled.table`
	justify-content: center;
	margin: auto;
`

const CenteredColumn = styled.td`
	vertical-align: middle;
`

class Row extends React.Component {
	renderNode(value) {
		return (
			<CenteredColumn>
				<ArrayNode value={value} />
			</CenteredColumn>
		)
	}
	generateNodes(array) {
		var elements = []
		array.forEach(element => {
			elements.push(this.renderNode(element))
		})
		return elements
	}
	render() {
		const arrayElements = this.generateNodes(this.props.value)
		return <RowWrapper>{arrayElements}</RowWrapper>
	}
}

export default Row
