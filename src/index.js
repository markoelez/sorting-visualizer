import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import Main from './components/main/main_container'
import './index.css'

const store = createStore(rootReducer)

class App extends React.Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Main />
			</ThemeProvider>
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
