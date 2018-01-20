function Promise(fn) {
  this.PromiseStatus = 'pending';
  this.PromiseValue = '';

  this.resolvedCb = [];
  this.rejectedCb = [];

  const self = this;

  const resolve = function (result) {
    if (self.PromiseStatus === 'pending') {
      self.PromiseStatus = 'resolved';
      self.PromiseValue = result;
      for (let i = 0; i < self.resolvedCb.length; i++) {
        self.resolvedCb[i](i);
      }
    }
  }

  const reject = function (err) {
    // 判断状态
    if (self.PromiseStatus === 'pending') {
      self.PromiseStatus = 'rejected';
      self.PromiseValue = err;

      // rejectedCb 队列依次执行
      for (let i = 0; i < self.rejectedCb.length; i++) {
        self.rejectedCb[i](err)
      }
    }
  }

  // 错误处理 -> rejected
  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }


}

Promise.prototype.then = function (handleSuccess, handleFail) {
  var self = this;
  var PromiseStatus = this.PromiseStatus;

  if(typeof handleSuccess === 'function') {
    handleSuccess = handleSuccess;
  } else {
    handleSuccess = function (result) {}
  }

  if(typeof handleFail === 'function') {
    handleFail = handleFail;
  } else {
    handleFail = function (err) {}
  }

  if(PromiseStatus === 'pending') {
    return new Promise(function(resolve, reject) {
      self.resolvedCb.push(function(result) {
        var res = handleSuccess(self.PromiseValue);
        if (res instanceof Promise) {
          res.then(resolve, reject);
        } else {
          resolve(er);
        }
      })
      self.rejectedCb.push(function(err) {
        var er = handleFail(self.PromiseValue);
        if (er instanceof Promise) {
          er.then(resolve, reject);
        } else {
          reject(er);
        }
      })
    })
  }
  if(PromiseStatus === 'resolved') {
    return new Promise(function(resolve, reject) {
      var result = handleSuccess(self.PromiseValue);
      resolve(result);
    })
  }
  if(PromiseStatus === 'rejected') {
    return new Promise(function(resolve, reject) {
      var result = handleFail(self.PromiseValue);
      reject(result);
    })
  }

}
module.exports = Promise;