import React from 'react'
import { Item, Link } from './style'

export default class NavItem extends React.Component {
	render() {
		return (
			<Item>
				<Link class='active' href='#' onClick={this.props.onClick}>
					{this.props.title}
				</Link>
			</Item>
		)
	}
}
