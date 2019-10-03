import React from 'react'
import styled from 'styled-components'

const Item = styled.li`
	font-size: 16px;
	display: inline;
`

const Link = styled.a`
	${Item}:hover & {
		background-color: ${props => props.theme.navbar_color};
		opacity: 0.5;
	}
	text-decoration: none;
	text-align: center;
	color: white;
	display: inline-block;
	padding: 30px 50px;
`
export default class NavItem extends React.Component {
	render() {
		return (
			<Item>
				<Link href={this.props.link}>{this.props.title}</Link>
			</Item>
		)
	}
}
