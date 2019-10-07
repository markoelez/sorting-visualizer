import React from 'react'
import styled from 'styled-components'
import Row from './array/array'
import Navbar from './navbar/navbar'

const MainWrapper = styled.div`
	background-color: ${props => props.theme.bg_color};
	height: 100vh;
	padding-top: 50px;
	text-align: center;
`

class Main extends React.Component {
	render() {
		const { initArray, startSorting, algorithm, array } = this.props
		console.log('SET ARRAY: ' + typeof initArray)

		return (
			<div>
				<Navbar
					startSort={() => {
						startSorting(algorithm, array)
					}}
					setArray={() => {
						initArray(50, window.innerHeight / 1.4)
					}}
				/>
				<MainWrapper>
					<Row />
				</MainWrapper>
			</div>
		)
	}
}

export default Main
