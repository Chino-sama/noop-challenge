import React, { useState } from 'react';
import './App.css';

function App() {
	const [color, setColor] = useState('#123456');

	const changeColor = async () => {
		const res = await fetch('http://api.noopschallenge.com/hexbot');
		const json = await res.json();
		console.log(json)
		setColor(json.colors[0].value);
	}

	return (
		<div className="App">
			<div style={{ backgroundColor: color }} className="theDiv"/>
			<button onClick={changeColor}>Change color!!</button>
		</div>
	);
}

export default App;
