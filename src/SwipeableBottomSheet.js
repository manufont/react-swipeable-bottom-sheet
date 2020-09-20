import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import HeightUpdater from './HeightUpdater';
import ScrollToTop from './ScrollToTop';


class SwipeableBottomSheet extends Component {

	constructor(props){
		super(props);

		this.onHeightChange = this.onHeightChange.bind(this);
		this.onChangeIndex = this.onChangeIndex.bind(this);
		this.onTransitionEnd = this.onTransitionEnd.bind(this);

		this.state = {
			open: props.defaultOpen,
			height: window.innerHeight
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

	onTransitionEnd(){
		const { overflowHeight, swipeableViewsProps } = this.props;
		if(overflowHeight === 0){
			this.bodyElt.scrollTop = 0;
		}
		if(swipeableViewsProps.onTransitionEnd){
			swipeableViewsProps.onTransitionEnd();
		}
	};


	render() {

		const {
			overflowHeight,
			fullScreen,
			marginTop,
			open,
			topShadow,
			shadowTip,
			overlay,
			swipeableViewsProps,
			scrollTopAtClose
		} = this.props;

		const hiddenWhenClosed = overflowHeight === 0;
		const isControlled = open !== undefined;
		const isOpen = isControlled ? open : this.state.open;
		const hideShadows = hiddenWhenClosed && !isOpen;
		const index = isOpen ? 1 : 0;
		const maxHeight = this.state.height - marginTop;


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
					...topShadow && !hideShadows && {
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
					height: fullScreen ? maxHeight : 'initial',
					maxHeight: maxHeight,
					...this.props.bodyStyle
				}
			},
			overlay:{
				position: 'fixed',
				top: 0,
				right: 0,
				left: 0,
				height: this.state.height,
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
					onHeightChange={this.onHeightChange}
				/>
				{overlay &&
					<div style={styles.overlay} onClick={() => this.onChangeIndex(0)}/>
				}
				<SwipeableViews
					index={index}
					axis="y"
					enableMouseEvents
					onChangeIndex={this.onChangeIndex}
					{...this.props.swipeableViewsProps}
					onTransitionEnd={this.onTransitionEnd}
					style={styles.swiper.root}
					containerStyle={styles.swiper.container}
					slideStyle={styles.swiper.slide}
				>
					<div
						ref={elt => this.bodyElt = elt}
						style={styles.swiper.body}
						className={`ReactSwipeableBottomSheet--${isOpen ? 'open' : 'closed'}`}
					>
						{this.props.children}
					</div>
					<div style={styles.swiper.bottomSlide}/>
				</SwipeableViews>
				{shadowTip && !hideShadows &&
					<div style={styles.shadowTip}/>
				}
				{!isOpen && scrollTopAtClose && !hiddenWhenClosed &&
					<ScrollToTop element={() => this.bodyElt}/>
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
	marginTop: PropTypes.number,
	onChange: PropTypes.func,
	onTransitionEnd: PropTypes.func,
	open: PropTypes.bool,
	overflowHeight: PropTypes.number,
	overlay: PropTypes.bool,
	overlayStyle: PropTypes.object,
	scrollTopAtClose: PropTypes.bool,
	shadowTip: PropTypes.bool,
	style: PropTypes.object,
	swipeableViewsProps: PropTypes.object,
	topShadow: PropTypes.bool
};

SwipeableBottomSheet.defaultProps = {
	defaultOpen: false,
	fullScreen: false,
	marginTop: 0,
	overflowHeight: 0,
	overlay: true,
	scrollTopAtClose: true,
	shadowTip: true,
  	swipeableViewsProps: {},
  	topShadow: true
};

export default SwipeableBottomSheet;
