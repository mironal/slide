var util = require('util');


// cbはconsole.log系統のものであることを期待.
// 第一引数にerrorじゃないので注意.
function depth(obj, depth, cb){
  var msg = util.inspect(obj, {depth:depth});

  if(cb && typeof cb === 'function'){
    cb(msg);
  }
  return msg;
}

module.exports = depth;

