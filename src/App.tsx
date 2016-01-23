import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as Highcharts from 'highcharts';

import './App.less';

class App extends React.Component<any, any> {
	componentDidMount() {
		new Highcharts.Chart({
			chart: {
				renderTo: ReactDOM.findDOMNode(this) as HTMLElement
			}
		});
	}

	render() {
		return (
			<div>
				<h1>App title</h1>
				<div>App content</div>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.body);