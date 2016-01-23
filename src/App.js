import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Highcharts from 'highcharts';
import addFunnel from 'highcharts/modules/funnel';

import './App.less';

class App extends React.Component {
	componentDidMount() {
		// After window is present, normally on componentDidMount or in the callback of ReactDOM.render
		addFunnel(Highcharts);

		Highcharts.chart(ReactDOM.findDOMNode(this), { /*Options*/ });
	}

	render() {
		let chartsConfig = {};

		return (
			<div>
				<h1>App title</h1>
				<div>App content</div>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.body);