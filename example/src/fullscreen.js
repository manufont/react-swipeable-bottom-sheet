import React from 'react';
import ReactDOM from 'react-dom';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			open: false
		};
	};

	openBottomSheet(open){
		this.setState({ open });
	};

	render () {
		const styles={
			title:{
				backgroundColor: '#00bcd4',
				padding: '16px 0',
				boxSizing: 'border-box',
				color: 'white',
				fontSize: '24px',
				textAlign: 'center'
			},
			text:{
				padding: '10px',
				boxSizing: 'border-box',
				backgroundColor: 'white',
				fontSize: '18px',
			}
		};

		return (
			<div>
				<button onClick={() => this.openBottomSheet(true)}>
					Open bottom sheet
				</button>
				<SwipeableBottomSheet
					open={this.state.open}
					onChange={this.openBottomSheet.bind(this)}
					fullScreen
				>
					<div style={styles.title}>
						Fullscreen bottom sheet
					</div>
					<div style={styles.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
						deserunt mollit anim id est laborum.<br/>
						<button onClick={() => this.openBottomSheet(false)}>
							Close
						</button>
					</div>
				</SwipeableBottomSheet>
			</div>
		);
	}
};

ReactDOM.render(<App />, document.getElementById('app'));
