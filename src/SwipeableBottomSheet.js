import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import HeightUpdater from './HeightUpdater';


class SwipeableBottomSheet extends Component {

	constructor(props){
		super(props);

		this.state = {
			open: props.defaultOpen
		};
	};

	onHeightChange(height){
		this.setState({ height });
	}

	onChangeIndex(index){
		const open = index === 1;
		if(this.props.open === undefined){
			this.setState({ open });
		}
		if(this.props.onChange !== undefined){
			this.props.onChange(open);
		}
	};


	render() {

		const {
			overflowHeight,
			fullScreen,
			open,
			topShadow,
			shadowTip,
			overlay,
			swipeableViewsProps
		} = this.props;

		const isControlled = open !== undefined;
		const isOpen = isControlled ? open : this.state.open;
		const index = isOpen ? 1 : 0;

		const styles = {
			root:{
				height: overflowHeight,
				position: 'fixed',
				bottom: 0,
				right: 0,
				left: 0,
				...this.props.style
			},
			swiper:{
				root:{
					overflowY: 'initial',
					boxSizing: 'border-box',
					...swipeableViewsProps.style
				},
				container: {
					boxSizing: 'border-box',
					...topShadow && {
						boxShadow: 'rgba(0, 0, 0, 0.156863) 0px -6px 5px',
					},
					...swipeableViewsProps.containerStyle
				},
				slide:{
					boxSizing: 'border-box',
					overflow: 'visible',
					marginBottom: -overflowHeight,
					...swipeableViewsProps.slideStyle
				},
				bottomSlide:{
					marginBottom: overflowHeight,
				},
				body:{
					overflow: isOpen ? 'auto' : 'hidden',
					backgroundColor: 'white',
					height: fullScreen ? this.state.height : 'initial',
					maxHeight: this.state.height,
					...this.props.bodyStyle
				}
			},
			overlay:{
				position: 'fixed',
				height: '100vh',
				width: '100vw',
				top: 0,
				right: 0,
				transition: 'opacity 450ms',
				pointerEvents: 'none',
				backgroundColor: 'black',
				opacity: 0,
				...isOpen && {
					opacity: 0.54,
					pointerEvents: 'auto',
				},
				...this.props.overlayStyle
			},
			shadowTip:{
				position: 'fixed',
				height: 60,
				width: '200%',
				bottom: -60,
				left: '-50%',
				boxShadow: 'rgba(0, 0, 0, 0.7) 0px 0px 30px',
				transition: 'transform 450ms',
				transform: isOpen ? 'translateY(50px)' : 'translateY(0)'
			}
		};

		return (
			<div style={styles.root}>
				<HeightUpdater
					height={this.state.height}
					onHeightChange={this.onHeightChange.bind(this)}
				/>
				{overlay &&
					<div style={styles.overlay} onClick={() => this.onChangeIndex(0)}/>
				}
				<SwipeableViews
					index={index}
					axis="y"
					enableMouseEvents
					onChangeIndex={this.onChangeIndex.bind(this)}
					{...this.props.swipeableViewsProps}
					style={styles.swiper.root}
					containerStyle={styles.swiper.container}
					slideStyle={styles.swiper.slide}
				>
					<div style={styles.swiper.body}>
						{this.props.children}
					</div>
					<div style={styles.swiper.bottomSlide}/>
				</SwipeableViews>
				{shadowTip &&
					<div style={styles.shadowTip}/>
				}
			</div>
		);
	}
};

SwipeableBottomSheet.propTypes = {
	bodyStyle: PropTypes.object,
	children: PropTypes.node.isRequired,
	defaultOpen: PropTypes.bool,
	fullScreen: PropTypes.bool,
	onChange: PropTypes.func,
	open: PropTypes.bool,
	overflowHeight: PropTypes.number,
	overlay: PropTypes.bool,
	overlayStyle: PropTypes.object,
	shadowTip: PropTypes.bool,
	style: PropTypes.object,
	swipeableViewsProps: PropTypes.object,
	topShadow: PropTypes.bool
};

SwipeableBottomSheet.defaultProps = {
	defaultOpen: false,
	fullScreen: false,
	overflowHeight: 0,
	overlay: true,
	shadowTip: true,
  	swipeableViewsProps: {},
  	topShadow: true
};

export default SwipeableBottomSheet;