import React from 'react'
import styled from 'styled-components'
import NavItem from './nav_item'

const StyledNav = styled.nav`
	text-align: center;
	position: sticky;
	top: 0;
	z-index: 1;
`

const MenuWrapper = styled.ul`
	background-color: ${props => props.theme.navbar_color};
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	width: 100%;
`

export default class Navbar extends React.Component {
	render() {
		return (
			<StyledNav>
				<MenuWrapper>
					<NavItem onClick={this.props.genArray} title={'Generate Array'} />
					<NavItem />
					<NavItem onClick={this.props.sortTest} title={'Insertion Sort'} />
					<NavItem title={'Quick Sort'} />
					<NavItem />
					<NavItem onClick={this.props.startSort} title={'Start Sorting'} />
				</MenuWrapper>
			</StyledNav>
		)
	}
}
