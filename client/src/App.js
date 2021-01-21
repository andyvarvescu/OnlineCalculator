import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout';
import Calculator from './containers/Calculator'
import History from './containers/History'
import './App.css';

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact component={Calculator} />
				<Route path="/history" component={History} />
			</Switch>
		</Layout>
	);
}

export default App;
