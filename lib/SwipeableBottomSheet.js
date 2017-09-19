'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSwipeableViews = require('react-swipeable-views');

var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

var _HeightUpdater = require('./HeightUpdater');

var _HeightUpdater2 = _interopRequireDefault(_HeightUpdater);

var _ScrollToTop = require('./ScrollToTop');

var _ScrollToTop2 = _interopRequireDefault(_ScrollToTop);

var SwipeableBottomSheet = (function (_Component) {
	_inherits(SwipeableBottomSheet, _Component);

	function SwipeableBottomSheet(props) {
		_classCallCheck(this, SwipeableBottomSheet);

		_get(Object.getPrototypeOf(SwipeableBottomSheet.prototype), 'constructor', this).call(this, props);

		this.onHeightChange = this.onHeightChange.bind(this);
		this.onChangeIndex = this.onChangeIndex.bind(this);
		this.onTransitionEnd = this.onTransitionEnd.bind(this);

		this.state = {
			open: props.defaultOpen,
			height: window.innerHeight
		};
	}

	_createClass(SwipeableBottomSheet, [{
		key: 'onHeightChange',
		value: function onHeightChange(height) {
			this.setState({ height: height });
		}
	}, {
		key: 'onChangeIndex',
		value: function onChangeIndex(index) {
			var open = index === 1;
			if (this.props.open === undefined) {
				this.setState({ open: open });
			}
			if (this.props.onChange !== undefined) {
				this.props.onChange(open);
			}
		}
	}, {
		key: 'onTransitionEnd',
		value: function onTransitionEnd() {
			var _props = this.props;
			var overflowHeight = _props.overflowHeight;
			var swipeableViewsProps = _props.swipeableViewsProps;

			if (overflowHeight === 0) {
				this.bodyElt.scrollTop = 0;
			}
			if (swipeableViewsProps.onTransitionEnd) {
				swipeableViewsProps.onTransitionEnd();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			var _props2 = this.props;
			var overflowHeight = _props2.overflowHeight;
			var fullScreen = _props2.fullScreen;
			var marginTop = _props2.marginTop;
			var open = _props2.open;
			var topShadow = _props2.topShadow;
			var shadowTip = _props2.shadowTip;
			var overlay = _props2.overlay;
			var swipeableViewsProps = _props2.swipeableViewsProps;
			var scrollTopAtClose = _props2.scrollTopAtClose;

			var hiddenWhenClosed = overflowHeight === 0;
			var isControlled = open !== undefined;
			var isOpen = isControlled ? open : this.state.open;
			var hideShadows = hiddenWhenClosed && !isOpen;
			var index = isOpen ? 1 : 0;
			var maxHeight = this.state.height - marginTop;

			var styles = {
				root: _extends({
					height: overflowHeight,
					position: 'fixed',
					bottom: 0,
					right: 0,
					left: 0
				}, this.props.style),
				swiper: {
					root: _extends({
						overflowY: 'initial',
						boxSizing: 'border-box'
					}, swipeableViewsProps.style),
					container: _extends({
						boxSizing: 'border-box'
					}, topShadow && !hideShadows && {
						boxShadow: 'rgba(0, 0, 0, 0.156863) 0px -6px 5px'
					}, swipeableViewsProps.containerStyle),
					slide: _extends({
						boxSizing: 'border-box',
						overflow: 'visible',
						marginBottom: -overflowHeight
					}, swipeableViewsProps.slideStyle),
					bottomSlide: {
						marginBottom: overflowHeight
					},
					body: _extends({
						overflow: isOpen ? 'auto' : 'hidden',
						backgroundColor: 'white',
						height: fullScreen ? maxHeight : 'initial',
						maxHeight: maxHeight
					}, this.props.bodyStyle)
				},
				overlay: _extends({
					position: 'fixed',
					top: 0,
					right: 0,
					left: 0,
					height: this.state.height,
					transition: 'opacity 450ms',
					pointerEvents: 'none',
					backgroundColor: 'black',
					opacity: 0
				}, isOpen && {
					opacity: 0.54,
					pointerEvents: 'auto'
				}, this.props.overlayStyle),
				shadowTip: {
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

			return _react2['default'].createElement(
				'div',
				{ style: styles.root },
				_react2['default'].createElement(_HeightUpdater2['default'], {
					height: this.state.height,
					onHeightChange: this.onHeightChange
				}),
				overlay && _react2['default'].createElement('div', { style: styles.overlay, onClick: function () {
						return _this.onChangeIndex(0);
					} }),
				_react2['default'].createElement(
					_reactSwipeableViews2['default'],
					_extends({
						index: index,
						axis: 'y',
						enableMouseEvents: true,
						onChangeIndex: this.onChangeIndex
					}, this.props.swipeableViewsProps, {
						onTransitionEnd: this.onTransitionEnd,
						style: styles.swiper.root,
						containerStyle: styles.swiper.container,
						slideStyle: styles.swiper.slide
					}),
					_react2['default'].createElement(
						'div',
						{
							ref: function (elt) {
								return _this.bodyElt = elt;
							},
							style: styles.swiper.body,
							className: 'ReactSwipeableBottomSheet--' + (isOpen ? 'open' : 'closed')
						},
						this.props.children
					),
					_react2['default'].createElement('div', { style: styles.swiper.bottomSlide })
				),
				shadowTip && !hideShadows && _react2['default'].createElement('div', { style: styles.shadowTip }),
				!isOpen && scrollTopAtClose && !hiddenWhenClosed && _react2['default'].createElement(_ScrollToTop2['default'], { element: function () {
						return _this.bodyElt;
					} })
			);
		}
	}]);

	return SwipeableBottomSheet;
})(_react.Component);

;

SwipeableBottomSheet.propTypes = {
	bodyStyle: _propTypes2['default'].object,
	children: _propTypes2['default'].node.isRequired,
	defaultOpen: _propTypes2['default'].bool,
	fullScreen: _propTypes2['default'].bool,
	marginTop: _propTypes2['default'].number,
	onChange: _propTypes2['default'].func,
	onTransitionEnd: _propTypes2['default'].func,
	open: _propTypes2['default'].bool,
	overflowHeight: _propTypes2['default'].number,
	overlay: _propTypes2['default'].bool,
	overlayStyle: _propTypes2['default'].object,
	scrollTopAtClose: _propTypes2['default'].bool,
	shadowTip: _propTypes2['default'].bool,
	style: _propTypes2['default'].object,
	swipeableViewsProps: _propTypes2['default'].object,
	topShadow: _propTypes2['default'].bool
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

exports['default'] = SwipeableBottomSheet;
module.exports = exports['default'];