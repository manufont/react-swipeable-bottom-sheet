require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactSwipeableBottomSheet = require('react-swipeable-bottom-sheet');

var _reactSwipeableBottomSheet2 = _interopRequireDefault(_reactSwipeableBottomSheet);

var App = (function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		_get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);

		this.state = {
			open: false
		};
	}

	_createClass(App, [{
		key: 'openBottomSheet',
		value: function openBottomSheet(open) {
			this.setState({ open: open });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			var styles = {
				title: {
					backgroundColor: '#00bcd4',
					padding: '16px 0',
					boxSizing: 'border-box',
					color: 'white',
					fontSize: '24px',
					textAlign: 'center'
				},
				text: {
					padding: '10px',
					boxSizing: 'border-box',
					backgroundColor: 'white',
					fontSize: '18px'
				}
			};

			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(
					'button',
					{ onClick: function () {
							return _this.openBottomSheet(true);
						} },
					'Open bottom sheet'
				),
				_react2['default'].createElement(
					_reactSwipeableBottomSheet2['default'],
					{
						open: this.state.open,
						onChange: this.openBottomSheet.bind(this),
						fullScreen: true,
						shadowTip: false,
						topShadow: false },
					_react2['default'].createElement(
						'div',
						{ style: styles.title },
						'Controlled fullscreen bottom sheet'
					),
					_react2['default'].createElement(
						'div',
						{ style: styles.text },
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						_react2['default'].createElement('br', null),
						_react2['default'].createElement(
							'button',
							{ onClick: function () {
									return _this.openBottomSheet(false);
								} },
							'Close'
						)
					)
				)
			);
		}
	}]);

	return App;
})(_react2['default'].Component);

;

_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-swipeable-bottom-sheet":undefined}]},{},[1]);
