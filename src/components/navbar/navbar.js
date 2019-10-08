import React from 'react'
import styled from 'styled-components'
import NavItem from './nav_item'
import { StyledNav, MenuWrapper } from './style'

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
