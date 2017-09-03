import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';


class SwipeableBottomSheet extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			open: props.defaultOpen === true
		};
	};

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

		const height = this.props.overflowHeight || 0;

		const controlled = this.props.open !== undefined;
		const isOpen = controlled ? this.props.open : this.state.open;
		const index = isOpen ? 1 : 0;

		//default parameters
		const topShadow = this.props.topShadow !== false;
		const shadowTip = this.props.shadowTip !== false;
		const overlay = this.props.overlay !== false;
		const swipeableViewsProps = this.props.swipeableViewsProps || {};

		const s = {
			root:{
				width: '100vw',
				height: height,
				position: 'fixed',
				bottom: 0,
				right: 0,
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
					marginBottom: -height,
					...swipeableViewsProps.slideStyle
				},
				bottomSlide:{
					marginBottom: height,
				},
				body:{
					overflow: 'hidden',
					backgroundColor: 'white',
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
			<div style={s.root}>
				{overlay &&
					<div style={s.overlay} onClick={() => this.onChangeIndex(0)}/>
				}
				<SwipeableViews
				index={index}
				axis="y"
				enableMouseEvents
				onChangeIndex={this.onChangeIndex.bind(this)}
				{...this.props.swipeableViewsProps}
				style={s.swiper.root}
				containerStyle={s.swiper.container}
				slideStyle={s.swiper.slide}>
					<div style={s.swiper.body}>
						{this.props.children}
					</div>
					<div style={s.swiper.bottomSlide}/>
				</SwipeableViews>
				{shadowTip &&
					<div style={s.shadowTip}/>
				}
			</div>
		);
	}
};

SwipeableBottomSheet.propTypes = {
  bodyStyle: PropTypes.object,
  children: PropTypes.element.isRequired,
  defaultOpen: PropTypes.bool,
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

export default SwipeableBottomSheet;