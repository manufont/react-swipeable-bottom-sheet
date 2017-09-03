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

var SwipeableBottomSheet = (function (_React$Component) {
	_inherits(SwipeableBottomSheet, _React$Component);

	function SwipeableBottomSheet(props) {
		_classCallCheck(this, SwipeableBottomSheet);

		_get(Object.getPrototypeOf(SwipeableBottomSheet.prototype), 'constructor', this).call(this, props);

		this.state = {
			open: props.defaultOpen === true
		};
	}

	_createClass(SwipeableBottomSheet, [{
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

			var height = this.props.overflowHeight || 0;

			var controlled = this.props.open !== undefined;
			var isOpen = controlled ? this.props.open : this.state.open;
			var index = isOpen ? 1 : 0;

			//default parameters
			var topShadow = this.props.topShadow !== false;
			var shadowTip = this.props.shadowTip !== false;
			var overlay = this.props.overlay !== false;
			var swipeableViewsProps = this.props.swipeableViewsProps || {};

			var s = {
				root: _extends({
					width: '100vw',
					height: height,
					position: 'fixed',
					bottom: 0,
					right: 0
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
						marginBottom: -height
					}, swipeableViewsProps.slideStyle),
					bottomSlide: {
						marginBottom: height
					},
					body: _extends({
						overflow: 'hidden',
						backgroundColor: 'white'
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
				{ style: s.root },
				overlay && _react2['default'].createElement('div', { style: s.overlay, onClick: function () {
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
						style: s.swiper.root,
						containerStyle: s.swiper.container,
						slideStyle: s.swiper.slide }),
					_react2['default'].createElement(
						'div',
						{ style: s.swiper.body },
						this.props.children
					),
					_react2['default'].createElement('div', { style: s.swiper.bottomSlide })
				),
				shadowTip && _react2['default'].createElement('div', { style: s.shadowTip })
			);
		}
	}]);

	return SwipeableBottomSheet;
})(_react2['default'].Component);

;

SwipeableBottomSheet.propTypes = {
	bodyStyle: _propTypes2['default'].object,
	children: _propTypes2['default'].element.isRequired,
	defaultOpen: _propTypes2['default'].bool,
	onChange: _propTypes2['default'].func,
	open: _propTypes2['default'].bool,
	overflowHeight: _propTypes2['default'].number,
	overlay: _propTypes2['default'].bool,
	overlayStyle: _propTypes2['default'].object,
	shadowTip: _propTypes2['default'].bool,
	style: _propTypes2['default'].object,
	swipeableViewsProps: _propTypes2['default'].object,
	topShadow: _propTypes2['default'].bool
};

exports['default'] = SwipeableBottomSheet;
module.exports = exports['default'];