import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ScrollToTop extends Component {

	componentDidMount(){
		this.props.element().scrollTop = 0;
	}

	render(){
		return null;
	}
}

ScrollToTop.propTypes = {
	element: PropTypes.func.isRequired
};

export default ScrollToTop;