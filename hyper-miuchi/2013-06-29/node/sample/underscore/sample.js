// defaultsで色々設定できる.
var request = require('request').defaults({json:true});
var _ = require('underscore');
var depth = require('../depth');

var url = 'http://ha.logginging.org/hotentrys';

request(url, function(error, response, body){
  if(error) return console.log(error);

  /**************************************************
   *                  tweetだけ抽出
  **************************************************/

  // e -> tweet
  function pickupTweet(e) { return e.tweet; }

  var tweets = _.map(body, pickupTweet);

  //console.log(tweets);

  /**************************************************
   *                  entrysだけ抽出
  **************************************************/

  // e -> entrys
  function pickupTweet(e) { return e.entrys; }

  var entrys = _.flatten(
      _.map(body, pickupTweet)
  );

  //depth(entrys, null, console.log);

  /**************************************************
   *        同じURLのentryをひとつに纏める.
   *        cntが最大のものを残す
  **************************************************/
  // e -> url
  function pickupUrl(e) { return e.url; }

  // e -> cnt
  function pickupCnt(e) { return e.cnt; }

  // cntでソート
  var sorted = _.sortBy(entrys, pickupCnt);

  // url毎にグループ分けする.
  // {url0:[entry0, entry1, entry2, ...entryN],
  //  url1:[entry0, entry1, entry2, ...entryN],
  //  url2:[entry0, entry1, entry2, ...entryN]...}
  //  って感じになる.entryNが最大のcntを持つ
  var grouped = _.groupBy(sorted, pickupUrl);


  // 最大のcntを持つentryだけ抽出
  var uniqEntrys = _.map(grouped, function(value){
    var max_count_entry = _.last(value);
    return max_count_entry;
  });

  //depth(uniqEntrys, null, console.log);

  /**************************************************
   *          cnt >= 100のエントリーだけ抽出
  **************************************************/

  // e.cntが100以上だったらtrue
  function isMoreThan100(e) { return e.cnt >= 100; }


  var more_than_100_count = _.filter(uniqEntrys,isMoreThan100);

  depth(more_than_100_count, null, console.log);

  /**************************************************
   *     titleとurlのペアからなるリストを作る
  **************************************************/
  // titleとurlを抽出
  var pickupTitleAndUrl = function(obj){ return _.pick(obj, 'title', 'url'); }

  var title_url_pear = _.map(entrys, pickupTitleAndUrl);

  console.log(title_url_pear);

  /**************************************************
   *     cntを合計する & 平均値をとる
  **************************************************/
  var counts = _.map(uniqEntrys, pickupCnt);

  var sum = _.reduce(counts, function(acc, cnt){ return acc + cnt; });

  console.log('sum : ' + sum);
  console.log('mean : ' + sum / counts.length);




});
