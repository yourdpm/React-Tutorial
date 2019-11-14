import React, { Component } from 'react';
import Form from '../Form/index';

class App extends Component{
	constructor() {
		super();
		this.state = {
			data: []
		}
	}
	render(){
		return (
			<div>
				<Form />
			</div>
		);
	}
}

export default App;
