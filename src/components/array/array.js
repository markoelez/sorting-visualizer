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
	generateNodes(array) {
		var elements = []
		array.forEach((value, index) => {
			elements.push(
				<CenteredColumn>
					<ArrayNode idx={index} value={value} />
				</CenteredColumn>
			)
		})
		return elements
	}
	render() {
		let { array } = this.props
		console.log('UPDATED ARRAY: ' + array)
		var arrayElements = this.generateNodes(array)
		return <RowWrapper>{arrayElements}</RowWrapper>
	}
}

const mapStateToProps = state => {
	return {
		array: state.array
	}
}

export default connect(mapStateToProps)(Row)
