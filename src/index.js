import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import Main from './components/main_container'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

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
