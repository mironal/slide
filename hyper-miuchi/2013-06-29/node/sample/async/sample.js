var request = require('request').defaults({json:true});
var _ = require('underscore');
var fs = require('fs');

var HOTENTRY_URL = 'http://ha.logginging.org/hotentrys';
var NEWENTRY_URL = 'http://ha.logginging.org/newentrys';

// hotentry取得
request(HOTENTRY_URL, function(err, response, hotentrys){

  if(err) return console.log(err);

  //newentry取得
  request(NEWENTRY_URL, function(err, response, newentrys){
    if(err) return console.log(err);

    var pickupEntrys = function(e){ return e.entrys; }

    // 両方のentryを抽出
    var entrys = _.flatten([_.map(hotentrys, pickupEntrys), _.map(newentrys, pickupEntrys)]);

    var FILENAME = 'entrys.json';

    // ファイルに保存.
    fs.writeFile(FILENAME, JSON.stringify(entrys), function(err) {
      if(err) return console.log(err);
      console.log("save : " + FILENAME);
    });
  });
});

// コールバックが深くなってくるとﾂﾗｲ...
// 1つ目のリクエストが終わってから2つ目のリクエスト出しているので
// 効率が悪い.並列化するべき.

