import React from 'react'
import Row from '../array/row'
import Navbar from '../navbar/navbar_container'
import { MainWrapper } from './style'

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
