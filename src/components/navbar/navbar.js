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

class Navbar extends React.Component {
	render() {
		const {
			array,
			algorithm,
			initArray,
			setAlgorithm,
			startSorting
		} = this.props
		return (
			<StyledNav>
				<MenuWrapper>
					<NavItem
						onClick={() => {
							return initArray(20, window.innerHeight / 1.4)
						}}
						title={'Generate Array'}
					/>
					<NavItem />
					<NavItem
						onClick={() => {
							return setAlgorithm(algorithm)
						}}
						title={'Insertion Sort'}
					/>
					<NavItem title={'Quick Sort'} />
					<NavItem />
					<NavItem
						onClick={() => {
							return startSorting(algorithm, array)
						}}
						title={'Start Sorting'}
					/>
				</MenuWrapper>
			</StyledNav>
		)
	}
}

export default Navbar
