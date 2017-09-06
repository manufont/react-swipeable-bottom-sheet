import React, { Component } from 'react';
import PropTypes from 'prop-types';


class HeightUpdater extends Component {
	constructor(props){
		super(props);

		this.onWindowResize = this.onWindowResize.bind(this);
	}

	onWindowResize(){
		const height = window.innerHeight;
		if(height !== this.props.height){
			this.props.onHeightChange(height);
		}
	}

	componentWillMount(){
		window.addEventListener('resize', this.onWindowResize);
		this.onWindowResize();
	}

	componentWillUnmount(){
		window.removeEventListener('resize', this.onWindowResize);
	}

	render(){
		return null;
	}
}

HeightUpdater.propTypes = {
	height: PropTypes.number,
	onHeightChange: PropTypes.func
};

export default HeightUpdater;