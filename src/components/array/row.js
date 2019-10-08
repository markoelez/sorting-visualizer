import React from 'react'
import Node from './node'
import { connect } from 'react-redux'
import { RowWrapper, CenteredColumn } from './style'

class Row extends React.Component {
	generateNodes(array) {
		var elements = []
		array.forEach((value, index) => {
			elements.push(
				<CenteredColumn>
					<Node idx={index} value={value} />
				</CenteredColumn>
			)
		})
		return elements
	}
	render() {
		const { array } = this.props
		console.log('updating array - stage 3: ' + array)
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
