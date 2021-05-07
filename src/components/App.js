import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={
			par:false,
		};
		this.pText=this.pText.bind(this);
	};

	pText()
	{
		this.setState({par:true})
	}
    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				{this.state.par && <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}

				<button id="click" onClick={this.pText}>Click Me</button>
    		</div>
    	);
    }
}


export default App;

