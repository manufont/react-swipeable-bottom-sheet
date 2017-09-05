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

var SwipeableBottomSheet = (function (_Component) {
	_inherits(SwipeableBottomSheet, _Component);

	function SwipeableBottomSheet(props) {
		_classCallCheck(this, SwipeableBottomSheet);

		_get(Object.getPrototypeOf(SwipeableBottomSheet.prototype), 'constructor', this).call(this, props);

		this.state = {
			open: props.defaultOpen
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
		key: 'render',
		value: function render() {
			var _this = this;

			var _props = this.props;
			var overflowHeight = _props.overflowHeight;
			var fullScreen = _props.fullScreen;
			var scrollOnWindowOverflow = _props.scrollOnWindowOverflow;
			var open = _props.open;
			var topShadow = _props.topShadow;
			var shadowTip = _props.shadowTip;
			var overlay = _props.overlay;
			var swipeableViewsProps = _props.swipeableViewsProps;

			var isControlled = open !== undefined;
			var isOpen = isControlled ? open : this.state.open;
			var index = isOpen ? 1 : 0;

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
					}, topShadow && {
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
						overflow: 'hidden',
						backgroundColor: 'white'
					}, scrollOnWindowOverflow && {
						overflow: isOpen ? 'auto' : 'hidden',
						height: fullScreen ? this.state.height : 'initial',
						maxHeight: fullScreen ? 'initial' : this.state.height
					}, this.props.bodyStyle)
				},
				overlay: _extends({
					position: 'fixed',
					height: '100vh',
					width: '100vw',
					top: 0,
					right: 0,
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
				scrollOnWindowOverflow && _react2['default'].createElement(_HeightUpdater2['default'], {
					height: this.state.height,
					onHeightChange: this.onHeightChange.bind(this) }),
				overlay && _react2['default'].createElement('div', { style: styles.overlay, onClick: function () {
						return _this.onChangeIndex(0);
					} }),
				_react2['default'].createElement(
					_reactSwipeableViews2['default'],
					_extends({
						index: index,
						axis: 'y',
						enableMouseEvents: true,
						onChangeIndex: this.onChangeIndex.bind(this)
					}, this.props.swipeableViewsProps, {
						style: styles.swiper.root,
						containerStyle: styles.swiper.container,
						slideStyle: styles.swiper.slide }),
					_react2['default'].createElement(
						'div',
						{ style: styles.swiper.body },
						this.props.children
					),
					_react2['default'].createElement('div', { style: styles.swiper.bottomSlide })
				),
				shadowTip && _react2['default'].createElement('div', { style: styles.shadowTip })
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
	onChange: _propTypes2['default'].func,
	open: _propTypes2['default'].bool,
	overflowHeight: _propTypes2['default'].number,
	overlay: _propTypes2['default'].bool,
	overlayStyle: _propTypes2['default'].object,
	scrollOnWindowOverflow: _propTypes2['default'].bool,
	shadowTip: _propTypes2['default'].bool,
	style: _propTypes2['default'].object,
	swipeableViewsProps: _propTypes2['default'].object,
	topShadow: _propTypes2['default'].bool
};

SwipeableBottomSheet.defaultProps = {
	defaultOpen: false,
	fullScreen: false,
	overflowHeight: 0,
	overlay: true,
	scrollOnWindowOverflow: true,
	shadowTip: true,
	swipeableViewsProps: {},
	topShadow: true
};

exports['default'] = SwipeableBottomSheet;
module.exports = exports['default'];