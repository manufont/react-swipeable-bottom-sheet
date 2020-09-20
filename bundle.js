require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],2:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],3:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],4:[function(require,module,exports){
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
},{}],5:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],6:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":11}],7:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;
},{}],8:[function(require,module,exports){
var objectWithoutPropertiesLoose = require("./objectWithoutPropertiesLoose");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
},{"./objectWithoutPropertiesLoose":9}],9:[function(require,module,exports){
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
},{}],10:[function(require,module,exports){
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":12,"./assertThisInitialized":1}],11:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],12:[function(require,module,exports){
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],13:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],14:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],15:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var printWarning = function() {};

if ("production" !== 'production') {
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if ("production" !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if ("production" !== 'production') {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;

},{"./lib/ReactPropTypesSecret":19}],16:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

},{"./lib/ReactPropTypesSecret":19}],17:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactIs = require('react-is');
var assign = require('object-assign');

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
var checkPropTypes = require('./checkPropTypes');

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if ("production" !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if ("production" !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("production" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if ("production" !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      "production" !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

},{"./checkPropTypes":15,"./lib/ReactPropTypesSecret":19,"object-assign":13,"react-is":22}],18:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if ("production" !== 'production') {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}

},{"./factoryWithThrowingShims":16,"./factoryWithTypeCheckers":17,"react-is":22}],19:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],20:[function(require,module,exports){
(function (process){
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';



if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}

}).call(this,require('_process'))
},{"_process":14}],21:[function(require,module,exports){
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;

},{}],22:[function(require,module,exports){
(function (process){
'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-is.production.min.js');
} else {
  module.exports = require('./cjs/react-is.development.js');
}

}).call(this,require('_process'))
},{"./cjs/react-is.development.js":20,"./cjs/react-is.production.min.js":21,"_process":14}],23:[function(require,module,exports){
(function (process){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _warning = _interopRequireDefault(require("warning"));

var checkIndexBounds = function checkIndexBounds(props) {
  var index = props.index,
      children = props.children;

  var childrenCount = _react.default.Children.count(children);

  process.env.NODE_ENV !== "production" ? (0, _warning.default)(index >= 0 && index <= childrenCount, "react-swipeable-view: the new index: ".concat(index, " is out of bounds: [0-").concat(childrenCount, "].")) : void 0;
};

var _default = checkIndexBounds;
exports.default = _default;
}).call(this,require('_process'))
},{"@babel/runtime/helpers/interopRequireDefault":7,"_process":14,"react":undefined,"warning":31}],24:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeIndex;

var _react = _interopRequireDefault(require("react"));

var _constant = _interopRequireDefault(require("./constant"));

function computeIndex(params) {
  var children = params.children,
      startIndex = params.startIndex,
      startX = params.startX,
      pageX = params.pageX,
      viewLength = params.viewLength,
      resistance = params.resistance;
  var indexMax = _react.default.Children.count(children) - 1;
  var index = startIndex + (startX - pageX) / viewLength;
  var newStartX;

  if (!resistance) {
    // Reset the starting point
    if (index < 0) {
      index = 0;
      newStartX = (index - startIndex) * viewLength + pageX;
    } else if (index > indexMax) {
      index = indexMax;
      newStartX = (index - startIndex) * viewLength + pageX;
    }
  } else if (index < 0) {
    index = Math.exp(index * _constant.default.RESISTANCE_COEF) - 1;
  } else if (index > indexMax) {
    index = indexMax + 1 - Math.exp((indexMax - index) * _constant.default.RESISTANCE_COEF);
  }

  return {
    index: index,
    startX: newStartX
  };
}
},{"./constant":25,"@babel/runtime/helpers/interopRequireDefault":7,"react":undefined}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  RESISTANCE_COEF: 0.6,
  // This value is closed to what browsers are using internally to
  // trigger a native scroll.
  UNCERTAINTY_THRESHOLD: 3 // px

};
exports.default = _default;
},{}],26:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var getDisplaySameSlide = function getDisplaySameSlide(props, nextProps) {
  var displaySameSlide = false;

  var getChildrenKey = function getChildrenKey(child) {
    return child ? child.key : 'empty';
  };

  if (props.children.length && nextProps.children.length) {
    var oldKeys = _react.default.Children.map(props.children, getChildrenKey);

    var oldKey = oldKeys[props.index];

    if (oldKey !== null && oldKey !== undefined) {
      var newKeys = _react.default.Children.map(nextProps.children, getChildrenKey);

      var newKey = newKeys[nextProps.index];

      if (oldKey === newKey) {
        displaySameSlide = true;
      }
    }
  }

  return displaySameSlide;
};

var _default = getDisplaySameSlide;
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":7,"react":undefined}],27:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "checkIndexBounds", {
  enumerable: true,
  get: function get() {
    return _checkIndexBounds.default;
  }
});
Object.defineProperty(exports, "computeIndex", {
  enumerable: true,
  get: function get() {
    return _computeIndex.default;
  }
});
Object.defineProperty(exports, "constant", {
  enumerable: true,
  get: function get() {
    return _constant.default;
  }
});
Object.defineProperty(exports, "getDisplaySameSlide", {
  enumerable: true,
  get: function get() {
    return _getDisplaySameSlide.default;
  }
});
Object.defineProperty(exports, "mod", {
  enumerable: true,
  get: function get() {
    return _mod.default;
  }
});

var _checkIndexBounds = _interopRequireDefault(require("./checkIndexBounds"));

var _computeIndex = _interopRequireDefault(require("./computeIndex"));

var _constant = _interopRequireDefault(require("./constant"));

var _getDisplaySameSlide = _interopRequireDefault(require("./getDisplaySameSlide"));

var _mod = _interopRequireDefault(require("./mod"));
},{"./checkIndexBounds":23,"./computeIndex":24,"./constant":25,"./getDisplaySameSlide":26,"./mod":28,"@babel/runtime/helpers/interopRequireDefault":7}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Extended version of % with negative integer support.
function mod(n, m) {
  var q = n % m;
  return q < 0 ? q + m : q;
}

var _default = mod;
exports.default = _default;
},{}],29:[function(require,module,exports){
(function (process){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDomTreeShapes = getDomTreeShapes;
exports.findNativeHandler = findNativeHandler;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _warning = _interopRequireDefault(require("warning"));

var _reactSwipeableViewsCore = require("react-swipeable-views-core");

function addEventListener(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return {
    remove: function remove() {
      node.removeEventListener(event, handler, options);
    }
  };
}

var styles = {
  container: {
    direction: 'ltr',
    display: 'flex',
    willChange: 'transform'
  },
  slide: {
    width: '100%',
    WebkitFlexShrink: 0,
    flexShrink: 0,
    overflow: 'auto'
  }
};
var axisProperties = {
  root: {
    x: {
      overflowX: 'hidden'
    },
    'x-reverse': {
      overflowX: 'hidden'
    },
    y: {
      overflowY: 'hidden'
    },
    'y-reverse': {
      overflowY: 'hidden'
    }
  },
  flexDirection: {
    x: 'row',
    'x-reverse': 'row-reverse',
    y: 'column',
    'y-reverse': 'column-reverse'
  },
  transform: {
    x: function x(translate) {
      return "translate(".concat(-translate, "%, 0)");
    },
    'x-reverse': function xReverse(translate) {
      return "translate(".concat(translate, "%, 0)");
    },
    y: function y(translate) {
      return "translate(0, ".concat(-translate, "%)");
    },
    'y-reverse': function yReverse(translate) {
      return "translate(0, ".concat(translate, "%)");
    }
  },
  length: {
    x: 'width',
    'x-reverse': 'width',
    y: 'height',
    'y-reverse': 'height'
  },
  rotationMatrix: {
    x: {
      x: [1, 0],
      y: [0, 1]
    },
    'x-reverse': {
      x: [-1, 0],
      y: [0, 1]
    },
    y: {
      x: [0, 1],
      y: [1, 0]
    },
    'y-reverse': {
      x: [0, -1],
      y: [1, 0]
    }
  },
  scrollPosition: {
    x: 'scrollLeft',
    'x-reverse': 'scrollLeft',
    y: 'scrollTop',
    'y-reverse': 'scrollTop'
  },
  scrollLength: {
    x: 'scrollWidth',
    'x-reverse': 'scrollWidth',
    y: 'scrollHeight',
    'y-reverse': 'scrollHeight'
  },
  clientLength: {
    x: 'clientWidth',
    'x-reverse': 'clientWidth',
    y: 'clientHeight',
    'y-reverse': 'clientHeight'
  }
};

function createTransition(property, options) {
  var duration = options.duration,
      easeFunction = options.easeFunction,
      delay = options.delay;
  return "".concat(property, " ").concat(duration, " ").concat(easeFunction, " ").concat(delay);
} // We are using a 2x2 rotation matrix.


function applyRotationMatrix(touch, axis) {
  var rotationMatrix = axisProperties.rotationMatrix[axis];
  return {
    pageX: rotationMatrix.x[0] * touch.pageX + rotationMatrix.x[1] * touch.pageY,
    pageY: rotationMatrix.y[0] * touch.pageX + rotationMatrix.y[1] * touch.pageY
  };
}

function adaptMouse(event) {
  event.touches = [{
    pageX: event.pageX,
    pageY: event.pageY
  }];
  return event;
}

function getDomTreeShapes(element, rootNode) {
  var domTreeShapes = [];

  while (element && element !== rootNode) {
    // We reach a Swipeable View, no need to look higher in the dom tree.
    if (element.hasAttribute('data-swipeable')) {
      break;
    }

    var style = window.getComputedStyle(element);

    if ( // Ignore the scroll children if the element is absolute positioned.
    style.getPropertyValue('position') === 'absolute' || // Ignore the scroll children if the element has an overflowX hidden
    style.getPropertyValue('overflow-x') === 'hidden') {
      domTreeShapes = [];
    } else if (element.clientWidth > 0 && element.scrollWidth > element.clientWidth || element.clientHeight > 0 && element.scrollHeight > element.clientHeight) {
      // Ignore the nodes that have no width.
      // Keep elements with a scroll
      domTreeShapes.push({
        element: element,
        scrollWidth: element.scrollWidth,
        scrollHeight: element.scrollHeight,
        clientWidth: element.clientWidth,
        clientHeight: element.clientHeight,
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      });
    }

    element = element.parentNode;
  }

  return domTreeShapes;
} // We can only have one node at the time claiming ownership for handling the swipe.
// Otherwise, the UX would be confusing.
// That's why we use a singleton here.


var nodeWhoClaimedTheScroll = null;

function findNativeHandler(params) {
  var domTreeShapes = params.domTreeShapes,
      pageX = params.pageX,
      startX = params.startX,
      axis = params.axis;
  return domTreeShapes.some(function (shape) {
    // Determine if we are going backward or forward.
    var goingForward = pageX >= startX;

    if (axis === 'x' || axis === 'y') {
      goingForward = !goingForward;
    }

    var scrollPosition = shape[axisProperties.scrollPosition[axis]];
    var areNotAtStart = scrollPosition > 0;
    var areNotAtEnd = scrollPosition + shape[axisProperties.clientLength[axis]] < shape[axisProperties.scrollLength[axis]];

    if (goingForward && areNotAtEnd || !goingForward && areNotAtStart) {
      nodeWhoClaimedTheScroll = shape.element;
      return true;
    }

    return false;
  });
}

var SwipeableViews =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(SwipeableViews, _React$Component);

  function SwipeableViews(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SwipeableViews);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SwipeableViews).call(this, props));
    _this.rootNode = null;
    _this.containerNode = null;
    _this.ignoreNextScrollEvents = false;
    _this.viewLength = 0;
    _this.startX = 0;
    _this.lastX = 0;
    _this.vx = 0;
    _this.startY = 0;
    _this.isSwiping = undefined;
    _this.started = false;
    _this.startIndex = 0;
    _this.transitionListener = null;
    _this.touchMoveListener = null;
    _this.activeSlide = null;
    _this.indexCurrent = null;
    _this.firstRenderTimeout = null;

    _this.setRootNode = function (node) {
      _this.rootNode = node;
    };

    _this.setContainerNode = function (node) {
      _this.containerNode = node;
    };

    _this.setActiveSlide = function (node) {
      _this.activeSlide = node;

      _this.updateHeight();
    };

    _this.handleSwipeStart = function (event) {
      var axis = _this.props.axis;
      var touch = applyRotationMatrix(event.touches[0], axis);
      _this.viewLength = _this.rootNode.getBoundingClientRect()[axisProperties.length[axis]];
      _this.startX = touch.pageX;
      _this.lastX = touch.pageX;
      _this.vx = 0;
      _this.startY = touch.pageY;
      _this.isSwiping = undefined;
      _this.started = true;
      var computedStyle = window.getComputedStyle(_this.containerNode);
      var transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');

      if (transform && transform !== 'none') {
        var transformValues = transform.split('(')[1].split(')')[0].split(',');
        var rootStyle = window.getComputedStyle(_this.rootNode);
        var tranformNormalized = applyRotationMatrix({
          pageX: parseInt(transformValues[4], 10),
          pageY: parseInt(transformValues[5], 10)
        }, axis);
        _this.startIndex = -tranformNormalized.pageX / (_this.viewLength - parseInt(rootStyle.paddingLeft, 10) - parseInt(rootStyle.paddingRight, 10)) || 0;
      }
    };

    _this.handleSwipeMove = function (event) {
      // The touch start event can be cancel.
      // Makes sure we set a starting point.
      if (!_this.started) {
        _this.handleTouchStart(event);

        return;
      } // We are not supposed to hanlde this touch move.


      if (nodeWhoClaimedTheScroll !== null && nodeWhoClaimedTheScroll !== _this.rootNode) {
        return;
      }

      var _this$props = _this.props,
          axis = _this$props.axis,
          children = _this$props.children,
          ignoreNativeScroll = _this$props.ignoreNativeScroll,
          onSwitching = _this$props.onSwitching,
          resistance = _this$props.resistance;
      var touch = applyRotationMatrix(event.touches[0], axis); // We don't know yet.

      if (_this.isSwiping === undefined) {
        var dx = Math.abs(touch.pageX - _this.startX);
        var dy = Math.abs(touch.pageY - _this.startY);
        var isSwiping = dx > dy && dx > _reactSwipeableViewsCore.constant.UNCERTAINTY_THRESHOLD; // We let the parent handle the scroll.

        if (!resistance && (axis === 'y' || axis === 'y-reverse') && (_this.indexCurrent === 0 && _this.startX < touch.pageX || _this.indexCurrent === _react.default.Children.count(_this.props.children) - 1 && _this.startX > touch.pageX)) {
          _this.isSwiping = false;
          return;
        } // We are likely to be swiping, let's prevent the scroll event.


        if (dx > dy) {
          event.preventDefault();
        }

        if (isSwiping === true || dy > _reactSwipeableViewsCore.constant.UNCERTAINTY_THRESHOLD) {
          _this.isSwiping = isSwiping;
          _this.startX = touch.pageX; // Shift the starting point.

          return; // Let's wait the next touch event to move something.
        }
      }

      if (_this.isSwiping !== true) {
        return;
      } // We are swiping, let's prevent the scroll event.


      event.preventDefault(); // Low Pass filter.

      _this.vx = _this.vx * 0.5 + (touch.pageX - _this.lastX) * 0.5;
      _this.lastX = touch.pageX;

      var _computeIndex = (0, _reactSwipeableViewsCore.computeIndex)({
        children: children,
        resistance: resistance,
        pageX: touch.pageX,
        startIndex: _this.startIndex,
        startX: _this.startX,
        viewLength: _this.viewLength
      }),
          index = _computeIndex.index,
          startX = _computeIndex.startX; // Add support for native scroll elements.


      if (nodeWhoClaimedTheScroll === null && !ignoreNativeScroll) {
        var domTreeShapes = getDomTreeShapes(event.target, _this.rootNode);
        var hasFoundNativeHandler = findNativeHandler({
          domTreeShapes: domTreeShapes,
          startX: _this.startX,
          pageX: touch.pageX,
          axis: axis
        }); // We abort the touch move handler.

        if (hasFoundNativeHandler) {
          return;
        }
      } // We are moving toward the edges.


      if (startX) {
        _this.startX = startX;
      } else if (nodeWhoClaimedTheScroll === null) {
        nodeWhoClaimedTheScroll = _this.rootNode;
      }

      _this.setIndexCurrent(index);

      var callback = function callback() {
        if (onSwitching) {
          onSwitching(index, 'move');
        }
      };

      if (_this.state.displaySameSlide || !_this.state.isDragging) {
        _this.setState({
          displaySameSlide: false,
          isDragging: true
        }, callback);
      }

      callback();
    };

    _this.handleSwipeEnd = function () {
      nodeWhoClaimedTheScroll = null; // The touch start event can be cancel.
      // Makes sure that a starting point is set.

      if (!_this.started) {
        return;
      }

      _this.started = false;

      if (_this.isSwiping !== true) {
        return;
      }

      var indexLatest = _this.state.indexLatest;
      var indexCurrent = _this.indexCurrent;
      var delta = indexLatest - indexCurrent;
      var indexNew; // Quick movement

      if (Math.abs(_this.vx) > _this.props.threshold) {
        if (_this.vx > 0) {
          indexNew = Math.floor(indexCurrent);
        } else {
          indexNew = Math.ceil(indexCurrent);
        }
      } else if (Math.abs(delta) > _this.props.hysteresis) {
        // Some hysteresis with indexLatest.
        indexNew = delta > 0 ? Math.floor(indexCurrent) : Math.ceil(indexCurrent);
      } else {
        indexNew = indexLatest;
      }

      var indexMax = _react.default.Children.count(_this.props.children) - 1;

      if (indexNew < 0) {
        indexNew = 0;
      } else if (indexNew > indexMax) {
        indexNew = indexMax;
      }

      _this.setIndexCurrent(indexNew);

      _this.setState({
        indexLatest: indexNew,
        isDragging: false
      }, function () {
        if (_this.props.onSwitching) {
          _this.props.onSwitching(indexNew, 'end');
        }

        if (_this.props.onChangeIndex && indexNew !== indexLatest) {
          _this.props.onChangeIndex(indexNew, indexLatest, {
            reason: 'swipe'
          });
        } // Manually calling handleTransitionEnd in that case as isn't otherwise.


        if (indexCurrent === indexLatest) {
          _this.handleTransitionEnd();
        }
      });
    };

    _this.handleTouchStart = function (event) {
      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }

      _this.handleSwipeStart(event);
    };

    _this.handleTouchEnd = function (event) {
      if (_this.props.onTouchEnd) {
        _this.props.onTouchEnd(event);
      }

      _this.handleSwipeEnd(event);
    };

    _this.handleMouseDown = function (event) {
      if (_this.props.onMouseDown) {
        _this.props.onMouseDown(event);
      }

      event.persist();

      _this.handleSwipeStart(adaptMouse(event));
    };

    _this.handleMouseUp = function (event) {
      if (_this.props.onMouseUp) {
        _this.props.onMouseUp(event);
      }

      _this.handleSwipeEnd(adaptMouse(event));
    };

    _this.handleMouseLeave = function (event) {
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      } // Filter out events


      if (_this.started) {
        _this.handleSwipeEnd(adaptMouse(event));
      }
    };

    _this.handleMouseMove = function (event) {
      if (_this.props.onMouseMove) {
        _this.props.onMouseMove(event);
      } // Filter out events


      if (_this.started) {
        _this.handleSwipeMove(adaptMouse(event));
      }
    };

    _this.handleScroll = function (event) {
      if (_this.props.onScroll) {
        _this.props.onScroll(event);
      } // Ignore events bubbling up.


      if (event.target !== _this.rootNode) {
        return;
      }

      if (_this.ignoreNextScrollEvents) {
        _this.ignoreNextScrollEvents = false;
        return;
      }

      var indexLatest = _this.state.indexLatest;
      var indexNew = Math.ceil(event.target.scrollLeft / event.target.clientWidth) + indexLatest;
      _this.ignoreNextScrollEvents = true; // Reset the scroll position.

      event.target.scrollLeft = 0;

      if (_this.props.onChangeIndex && indexNew !== indexLatest) {
        _this.props.onChangeIndex(indexNew, indexLatest, {
          reason: 'focus'
        });
      }
    };

    _this.updateHeight = function () {
      if (_this.activeSlide !== null) {
        var child = _this.activeSlide.children[0];

        if (child !== undefined && child.offsetHeight !== undefined && _this.state.heightLatest !== child.offsetHeight) {
          _this.setState({
            heightLatest: child.offsetHeight
          });
        }
      }
    };

    if (process.env.NODE_ENV !== 'production') {
      (0, _reactSwipeableViewsCore.checkIndexBounds)(props);
    }

    _this.state = {
      indexLatest: props.index,
      // Set to true as soon as the component is swiping.
      // It's the state counter part of this.isSwiping.
      isDragging: false,
      // Help with SSR logic and lazy loading logic.
      renderOnlyActive: !props.disableLazyLoading,
      heightLatest: 0,
      // Let the render method that we are going to display the same slide than previously.
      displaySameSlide: true
    };

    _this.setIndexCurrent(props.index);

    return _this;
  }

  (0, _createClass2.default)(SwipeableViews, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _this2 = this;

      return {
        swipeableViews: {
          slideUpdateHeight: function slideUpdateHeight() {
            _this2.updateHeight();
          }
        }
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      // Subscribe to transition end events.
      this.transitionListener = addEventListener(this.containerNode, 'transitionend', function (event) {
        if (event.target !== _this3.containerNode) {
          return;
        }

        _this3.handleTransitionEnd();
      }); // Block the thread to handle that event.

      this.touchMoveListener = addEventListener(this.rootNode, 'touchmove', function (event) {
        // Handling touch events is disabled.
        if (_this3.props.disabled) {
          return;
        }

        _this3.handleSwipeMove(event);
      }, {
        passive: false
      });

      if (!this.props.disableLazyLoading) {
        this.firstRenderTimeout = setTimeout(function () {
          _this3.setState({
            renderOnlyActive: false
          });
        }, 0);
      } // Send all functions in an object if action param is set.


      if (this.props.action) {
        this.props.action({
          updateHeight: this.updateHeight
        });
      }
    } // eslint-disable-next-line camelcase,react/sort-comp

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var index = nextProps.index;

      if (typeof index === 'number' && index !== this.props.index) {
        if (process.env.NODE_ENV !== 'production') {
          (0, _reactSwipeableViewsCore.checkIndexBounds)(nextProps);
        }

        this.setIndexCurrent(index);
        this.setState({
          // If true, we are going to change the children. We shoudn't animate it.
          displaySameSlide: (0, _reactSwipeableViewsCore.getDisplaySameSlide)(this.props, nextProps),
          indexLatest: index
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.transitionListener.remove();
      this.touchMoveListener.remove();
      clearTimeout(this.firstRenderTimeout);
    }
  }, {
    key: "setIndexCurrent",
    value: function setIndexCurrent(indexCurrent) {
      if (!this.props.animateTransitions && this.indexCurrent !== indexCurrent) {
        this.handleTransitionEnd();
      }

      this.indexCurrent = indexCurrent;

      if (this.containerNode) {
        var axis = this.props.axis;
        var transform = axisProperties.transform[axis](indexCurrent * 100);
        this.containerNode.style.WebkitTransform = transform;
        this.containerNode.style.transform = transform;
      }
    }
  }, {
    key: "handleTransitionEnd",
    value: function handleTransitionEnd() {
      if (!this.props.onTransitionEnd) {
        return;
      } // Filters out when changing the children


      if (this.state.displaySameSlide) {
        return;
      } // The rest callback is triggered when swiping. It's just noise.
      // We filter it out.


      if (!this.state.isDragging) {
        this.props.onTransitionEnd();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          action = _this$props2.action,
          animateHeight = _this$props2.animateHeight,
          animateTransitions = _this$props2.animateTransitions,
          axis = _this$props2.axis,
          children = _this$props2.children,
          containerStyleProp = _this$props2.containerStyle,
          disabled = _this$props2.disabled,
          disableLazyLoading = _this$props2.disableLazyLoading,
          enableMouseEvents = _this$props2.enableMouseEvents,
          hysteresis = _this$props2.hysteresis,
          ignoreNativeScroll = _this$props2.ignoreNativeScroll,
          index = _this$props2.index,
          onChangeIndex = _this$props2.onChangeIndex,
          onSwitching = _this$props2.onSwitching,
          onTransitionEnd = _this$props2.onTransitionEnd,
          resistance = _this$props2.resistance,
          slideStyleProp = _this$props2.slideStyle,
          slideClassName = _this$props2.slideClassName,
          springConfig = _this$props2.springConfig,
          style = _this$props2.style,
          threshold = _this$props2.threshold,
          other = (0, _objectWithoutProperties2.default)(_this$props2, ["action", "animateHeight", "animateTransitions", "axis", "children", "containerStyle", "disabled", "disableLazyLoading", "enableMouseEvents", "hysteresis", "ignoreNativeScroll", "index", "onChangeIndex", "onSwitching", "onTransitionEnd", "resistance", "slideStyle", "slideClassName", "springConfig", "style", "threshold"]);
      var _this$state = this.state,
          displaySameSlide = _this$state.displaySameSlide,
          heightLatest = _this$state.heightLatest,
          indexLatest = _this$state.indexLatest,
          isDragging = _this$state.isDragging,
          renderOnlyActive = _this$state.renderOnlyActive;
      var touchEvents = !disabled ? {
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd
      } : {};
      var mouseEvents = !disabled && enableMouseEvents ? {
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onMouseLeave: this.handleMouseLeave,
        onMouseMove: this.handleMouseMove
      } : {}; // There is no point to animate if we are already providing a height.

      process.env.NODE_ENV !== "production" ? (0, _warning.default)(!animateHeight || !containerStyleProp || !containerStyleProp.height, "react-swipeable-view: You are setting animateHeight to true but you are\nalso providing a custom height.\nThe custom height has a higher priority than the animateHeight property.\nSo animateHeight is most likely having no effect at all.") : void 0;
      var slideStyle = (0, _extends2.default)({}, styles.slide, slideStyleProp);
      var transition;
      var WebkitTransition;

      if (isDragging || !animateTransitions || displaySameSlide) {
        transition = 'all 0s ease 0s';
        WebkitTransition = 'all 0s ease 0s';
      } else {
        transition = createTransition('transform', springConfig);
        WebkitTransition = createTransition('-webkit-transform', springConfig);

        if (heightLatest !== 0) {
          var additionalTranstion = ", ".concat(createTransition('height', springConfig));
          transition += additionalTranstion;
          WebkitTransition += additionalTranstion;
        }
      }

      var containerStyle = {
        height: null,
        WebkitFlexDirection: axisProperties.flexDirection[axis],
        flexDirection: axisProperties.flexDirection[axis],
        WebkitTransition: WebkitTransition,
        transition: transition
      }; // Apply the styles for SSR considerations

      if (!renderOnlyActive) {
        var transform = axisProperties.transform[axis](this.indexCurrent * 100);
        containerStyle.WebkitTransform = transform;
        containerStyle.transform = transform;
      }

      if (animateHeight) {
        containerStyle.height = heightLatest;
      }

      return _react.default.createElement("div", (0, _extends2.default)({
        ref: this.setRootNode,
        style: (0, _extends2.default)({}, axisProperties.root[axis], style)
      }, other, touchEvents, mouseEvents, {
        onScroll: this.handleScroll
      }), _react.default.createElement("div", {
        ref: this.setContainerNode,
        style: (0, _extends2.default)({}, containerStyle, styles.container, containerStyleProp),
        className: "react-swipeable-view-container"
      }, _react.default.Children.map(children, function (child, indexChild) {
        if (renderOnlyActive && indexChild !== indexLatest) {
          return null;
        }

        process.env.NODE_ENV !== "production" ? (0, _warning.default)(_react.default.isValidElement(child), "react-swipeable-view: one of the children provided is invalid: ".concat(child, ".\nWe are expecting a valid React Element")) : void 0;
        var ref;
        var hidden = true;

        if (indexChild === indexLatest) {
          hidden = false;

          if (animateHeight) {
            ref = _this4.setActiveSlide;
            slideStyle.overflowY = 'hidden';
          }
        }

        return _react.default.createElement("div", {
          ref: ref,
          style: slideStyle,
          className: slideClassName,
          "aria-hidden": hidden,
          "data-swipeable": "true"
        }, child);
      })));
    }
  }]);
  return SwipeableViews;
}(_react.default.Component); // Added as an ads for people using the React dev tools in production.
// So they know, the tool used to build the awesome UI they
// are looking at/retro engineering.


SwipeableViews.displayName = 'ReactSwipableView';
SwipeableViews.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * This is callback property. It's called by the component on mount.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports updateHeight() action.
   *
   * @param {object} actions This object contains all posible actions
   * that can be triggered programmatically.
   */
  action: _propTypes.default.func,

  /**
   * If `true`, the height of the container will be animated to match the current slide height.
   * Animating another style property has a negative impact regarding performance.
   */
  animateHeight: _propTypes.default.bool,

  /**
   * If `false`, changes to the index prop will not cause an animated transition.
   */
  animateTransitions: _propTypes.default.bool,

  /**
   * The axis on which the slides will slide.
   */
  axis: _propTypes.default.oneOf(['x', 'x-reverse', 'y', 'y-reverse']),

  /**
   * Use this property to provide your slides.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * This is the inlined style that will be applied
   * to each slide container.
   */
  containerStyle: _propTypes.default.object,

  /**
   * If `true`, it will disable touch events.
   * This is useful when you want to prohibit the user from changing slides.
   */
  disabled: _propTypes.default.bool,

  /**
   * This is the config used to disable lazyloding,
   * if `true` will render all the views in first rendering.
   */
  disableLazyLoading: _propTypes.default.bool,

  /**
   * If `true`, it will enable mouse events.
   * This will allow the user to perform the relevant swipe actions with a mouse.
   */
  enableMouseEvents: _propTypes.default.bool,

  /**
   * Configure hysteresis between slides. This value determines how far
   * should user swipe to switch slide.
   */
  hysteresis: _propTypes.default.number,

  /**
   * If `true`, it will ignore native scroll container.
   * It can be used to filter out false positive that blocks the swipe.
   */
  ignoreNativeScroll: _propTypes.default.bool,

  /**
   * This is the index of the slide to show.
   * This is useful when you want to change the default slide shown.
   * Or when you have tabs linked to each slide.
   */
  index: _propTypes.default.number,

  /**
   * This is callback prop. It's call by the
   * component when the shown slide change after a swipe made by the user.
   * This is useful when you have tabs linked to each slide.
   *
   * @param {integer} index This is the current index of the slide.
   * @param {integer} indexLatest This is the oldest index of the slide.
   * @param {object} meta Meta data containing more information about the event.
   */
  onChangeIndex: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseDown: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseLeave: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseMove: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseUp: _propTypes.default.func,

  /**
   * @ignore
   */
  onScroll: _propTypes.default.func,

  /**
   * This is callback prop. It's called by the
   * component when the slide switching.
   * This is useful when you want to implement something corresponding
   * to the current slide position.
   *
   * @param {integer} index This is the current index of the slide.
   * @param {string} type Can be either `move` or `end`.
   */
  onSwitching: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchEnd: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchMove: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchStart: _propTypes.default.func,

  /**
   * The callback that fires when the animation comes to a rest.
   * This is useful to defer CPU intensive task.
   */
  onTransitionEnd: _propTypes.default.func,

  /**
   * If `true`, it will add bounds effect on the edges.
   */
  resistance: _propTypes.default.bool,

  /**
   * This is the className that will be applied
   * on the slide component.
   */
  slideClassName: _propTypes.default.string,

  /**
   * This is the inlined style that will be applied
   * on the slide component.
   */
  slideStyle: _propTypes.default.object,

  /**
   * This is the config used to create CSS transitions.
   * This is useful to change the dynamic of the transition.
   */
  springConfig: _propTypes.default.shape({
    delay: _propTypes.default.string,
    duration: _propTypes.default.string,
    easeFunction: _propTypes.default.string
  }),

  /**
   * This is the inlined style that will be applied
   * on the root component.
   */
  style: _propTypes.default.object,

  /**
   * This is the threshold used for detecting a quick swipe.
   * If the computed speed is above this value, the index change.
   */
  threshold: _propTypes.default.number
} : {};
SwipeableViews.defaultProps = {
  animateHeight: false,
  animateTransitions: true,
  axis: 'x',
  disabled: false,
  disableLazyLoading: false,
  enableMouseEvents: false,
  hysteresis: 0.6,
  ignoreNativeScroll: false,
  index: 0,
  threshold: 5,
  springConfig: {
    duration: '0.35s',
    easeFunction: 'cubic-bezier(0.15, 0.3, 0.25, 1)',
    delay: '0s'
  },
  resistance: false
};
SwipeableViews.childContextTypes = {
  swipeableViews: _propTypes.default.shape({
    slideUpdateHeight: _propTypes.default.func
  })
};
var _default = SwipeableViews;
exports.default = _default;
}).call(this,require('_process'))
},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/extends":4,"@babel/runtime/helpers/getPrototypeOf":5,"@babel/runtime/helpers/inherits":6,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/objectWithoutProperties":8,"@babel/runtime/helpers/possibleConstructorReturn":10,"_process":14,"prop-types":18,"react":undefined,"react-swipeable-views-core":27,"warning":31}],30:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SwipeableViews = _interopRequireDefault(require("./SwipeableViews"));

var _default = _SwipeableViews.default;
exports.default = _default;
},{"./SwipeableViews":29,"@babel/runtime/helpers/interopRequireDefault":7}],31:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;

},{}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var HeightUpdater = (function (_Component) {
	_inherits(HeightUpdater, _Component);

	function HeightUpdater(props) {
		_classCallCheck(this, HeightUpdater);

		_get(Object.getPrototypeOf(HeightUpdater.prototype), 'constructor', this).call(this, props);

		this.onWindowResize = this.onWindowResize.bind(this);
	}

	_createClass(HeightUpdater, [{
		key: 'onWindowResize',
		value: function onWindowResize() {
			var height = window.innerHeight;
			if (height !== this.props.height) {
				this.props.onHeightChange(height);
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.addEventListener('resize', this.onWindowResize);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('resize', this.onWindowResize);
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);

	return HeightUpdater;
})(_react.Component);

HeightUpdater.propTypes = {
	height: _propTypes2['default'].number,
	onHeightChange: _propTypes2['default'].func
};

exports['default'] = HeightUpdater;
module.exports = exports['default'];

},{"prop-types":18,"react":undefined}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var ScrollToTop = (function (_Component) {
	_inherits(ScrollToTop, _Component);

	function ScrollToTop() {
		_classCallCheck(this, ScrollToTop);

		_get(Object.getPrototypeOf(ScrollToTop.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(ScrollToTop, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.element().scrollTop = 0;
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);

	return ScrollToTop;
})(_react.Component);

ScrollToTop.propTypes = {
	element: _propTypes2['default'].func.isRequired
};

exports['default'] = ScrollToTop;
module.exports = exports['default'];

},{"prop-types":18,"react":undefined}],"react-swipeable-bottom-sheet":[function(require,module,exports){
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

},{"./HeightUpdater":32,"./ScrollToTop":33,"prop-types":18,"react":undefined,"react-swipeable-views":30}]},{},[]);
