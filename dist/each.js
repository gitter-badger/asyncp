'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = each;

var _tryFn = require('./tryFn');

var _tryFn2 = _interopRequireDefault(_tryFn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function each(collection, iteratee) {
    return Promise.all(collection.map(function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _tryFn2.default.apply(undefined, [iteratee].concat(args));
    }));
};