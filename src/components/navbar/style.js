import styled from 'styled-components'

export const StyledNav = styled.nav`
	text-align: center;
	position: sticky;
	top: 0;
	z-index: 1;
`

export const MenuWrapper = styled.ul`
	background-color: ${props => props.theme.navbar_color};
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	width: 100%;
`
export const Item = styled.li`
	font-size: 16px;
	display: inline;
`

export const Link = styled.a`
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
