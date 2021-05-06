import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={
			par:'',
		};
	};
    render() {
		const change = ()=>
		{
			this.setState({par:"hi"})
		};


    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }

				<p id="para">{this.state.par}</p>

				<button id="click" onClick={this.change}>Click Me</button>
    		</div>
    	);
    }
}


export default App;

