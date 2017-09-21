(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['index.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('index.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.index);
    global.thumb = mod.exports;
  }
})(this, function (_index) {
  'use strict';

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // 实例化
  var run = new _index2.default(0, $('#thumb'));
  run.clickAction();
});
