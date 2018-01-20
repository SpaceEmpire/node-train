require('eventproxy');
var events = require('events');

function Stream() {
  events.EventEmitter.call(this);
}

var ff = function (callback) {
  try {
    JSON.parse(a);
    console.log("next");
    callback();
  } catch (e) {
    console.log("error");
    console.log(e);
    callback("出错啦");
  }
};

ff(function (error, result) {
  console.log("error:" + error);
  console.log("result:" + result);
});
