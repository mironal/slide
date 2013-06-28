var http = require('http');

http.get('http://ha.logginging.org/hotentrys', function(res){

  res.setEncoding('utf-8');

  var data = "";

  // チャンクデータが入ってくる.
  res.on('data', function(chunk){
    data = data + chunk;
  });

  // 全部受信し終わったら呼ばれる.
  res.on('end', function(){
    console.log(data);
  });
});
