'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.guard = exports.setDefault = exports.cat = exports.isNull = exports.map = exports.reduce = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reduce = function reduce(obj, handler) {
  var initial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return (0, _keys2.default)(obj).reduce(function (last, key, index) {
    return handler(last, obj[key], key, index);
  }, initial);
};
var map = function map(obj, handler) {
  return reduce(obj, function (last, value, key, index) {
    return (0, _extends4.default)({}, last, (0, _defineProperty3.default)({}, key, handler(value, key, index)));
  });
};
var isNull = function isNull(obj) {
  return obj === undefined || obj === null;
};
var exec = function exec(condition, handle, defaultValue) {
  return function () {
    return !!condition ? handle.apply(undefined, arguments) : defaultValue;
  };
};
var setDefault = function setDefault(current, defaultValue) {
  return current || defaultValue;
};
var exer = function exer(target, name) {
  return function () {
    var cleat = target[name] || target;
    return typeof cleat === 'function' ? exec(cleat, cleat).apply(undefined, arguments) : cleat;
  };
};
var guard = function guard(checker, handle, errorHandle) {
  return function () {
    return exer(checker).apply(undefined, arguments) ? handle.apply(undefined, arguments) : errorHandle.apply(undefined, arguments);
  };
};
var cat = function cat() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var head = args[0],
      rest = args.slice(1);

  return head.concat.apply(head, (0, _toConsumableArray3.default)(rest));
};

exports.reduce = reduce;
exports.map = map;
exports.isNull = isNull;
exports.cat = cat;
exports.setDefault = setDefault;
exports.guard = guard;