import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin';

class CoinContainer extends Component {
	static defaultProps = {
		coins: [
			{ side: 'heads', imgSrc: 'https://tinyurl.com/wmxgwpf' },
			{ side: 'tails', imgSrc: 'https://tinyurl.com/yx2jboba' }
		]
	};
	constructor(props) {
		super(props);
		this.state = {
			currCoin: null,
			nFlips: 0,
			nHeads: 0,
			nTails: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}
	flipCoin() {
		const newCoin = choice(this.props.coins);
		this.setState((st) => {
			return {
				currCoin: newCoin,
				nFlips: st.nFlips + 1,
				nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
				nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
			};
		});
	}
	handleClick(e) {
		this.flipCoin();
	}
	render() {
		return (
			<div className="CoinContainer">
				<h2>Flip</h2>
				<button onClick={this.handleClick}>Flip Me!</button>
				{this.state.currCoin && <Coin side info={this.state.currCoin} />}
				<p>
					Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails}{' '}
					tails.
				</p>
			</div>
		);
	}
}

export default CoinContainer;
