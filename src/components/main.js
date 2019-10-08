import React from 'react'
import styled from 'styled-components'
import Row from './array/row'
import Navbar from './navbar/navbar_container'

const MainWrapper = styled.div`
	background-color: ${props => props.theme.bg_color};
	height: 100vh;
	padding-top: 50px;
	text-align: center;
`

class Main extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<MainWrapper>
					<Row />
				</MainWrapper>
			</div>
		)
	}
}

export default Main
