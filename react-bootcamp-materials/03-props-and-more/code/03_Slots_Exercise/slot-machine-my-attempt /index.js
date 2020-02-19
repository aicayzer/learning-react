class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Slot Machine!</h1>
				<Machine s1="x" s2="y" s3="z" />
				<Machine s1="x" s2="y" s3="y" />
				<Machine s1="z" s2="z" s3="z" />
				<Machine s1="x" s2="x" s3="z" />
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));

// class App extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Slot Machines!</h1>
// 				<Machine s1="🍒" s2="🍒" s3="🍒" />
// 				<Machine s1="🍒" s2="🍒" s3="🍊" />
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(<App />, document.getElementById('root'));
