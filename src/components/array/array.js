import React from 'react'
import ArrayNode from './array_node'
import styled from 'styled-components'
import { connect } from 'react-redux'

const RowWrapper = styled.table`
	justify-content: center;
	margin: auto;
`

const CenteredColumn = styled.td`
	vertical-align: middle;
`

class Row extends React.Component {
	renderNode(idx, value) {
		return (
			<CenteredColumn>
				<ArrayNode idx={idx} value={value} />
			</CenteredColumn>
		)
	}
	generateNodes(array) {
		var elements = []
		array.forEach((value, index) => {
			elements.push(this.renderNode(index, value))
		})
		return elements
	}
	render() {
		const { array } = this.props
		const arrayElements = this.generateNodes(array)
		return <RowWrapper>{arrayElements}</RowWrapper>
	}
}

const mapStateToProps = state => {
	return {
		array: state.array
	}
}

export default connect(mapStateToProps)(Row)
