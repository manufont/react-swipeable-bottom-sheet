import React from 'react';
import ReactDOM from 'react-dom';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

class App extends React.Component {

	render () {
		const styles={
			title:{
				backgroundColor: '#00bcd4',
				padding: '16px 0',
				boxSizing: 'border-box',
				color: 'white',
				minHeight: '64px',
				fontSize: '24px',
				textAlign: 'center'
			},
			colouredDiv: hue => ({
				height: '100px',
				backgroundColor: `hsl(${hue%360}, 80%, 80%)`
			})
		};

		return (
			<SwipeableBottomSheet
				overflowHeight={64}
				marginTop={128}
			>
				<div style={styles.title}>
					Scrollable bottom sheet
				</div>
				{Array(30).fill().map((o, i) => 
					<div key={i} style={styles.colouredDiv(i*20)} />
				)}
			</SwipeableBottomSheet>
		);
	}
};

ReactDOM.render(<App />, document.getElementById('app'));
