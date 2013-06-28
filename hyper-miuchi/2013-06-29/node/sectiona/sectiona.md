!SLIDE

# node.jsでよく使うｱﾚ

```js
var module = require('ｱﾚ');
```

!SLIDE

# ぼく

## [@mironal -> 山口勝也](https://twitter.com/mironal)

[Blog -> http://mironal-memo.blogspot.jp](http://mironal-memo.blogspot.jp)

[Flickr -> http://www.flickr.com/photos/mironal](http://www.flickr.com/photos/mironal)

[GitHub -> https://github.com/mironal](https://github.com/mironal)

!SLIDE

# ※諸注意

<span class="red">javascript歴が一番浅い私が発表しますよん(^q^)</span>

<br />
<br />

<span class="blue">javascript界隈だと普通こうするよってのがあったら教えてください</span>


!SLIDE

# あじぇんだ

## <span class="red">1. node.jsって何？</span>

node.js知らない人向けにﾁｮｯﾋﾟﾘだけ説明

<br />

## <span class="red">2. 3つのモジュールを紹介</span>

```
    1. request.js
    2. underscore.js
    3. async.js
```

!SLIDE

# <span class="red">node.jsって何?</span>

javascriptを実行するためのプログラム(Platform)

  <br />

## keyword(ググると面白いと思われる)

  * <span class="red">C10K問題</span>
  * 非同期プログラミング
  * ノンブロッキングI/O
  * WebSocket

!SLIDE

# <span class="red">3つのモジュールを紹介</span>

1. request.js
2. underscore.js
3. async.js


!SLIDE

# 何故この3つ?

!SLIDE

# つ [https://npmjs.org](https://npmjs.org)

!SLIDE

<center>
  <img src="https://raw.github.com/mironal/slide/master/hyper-miuchi/2013-06-29/node/sectiona/npmjs.org.png">
</center>

!SLIDE

<center>
  <img src="https://raw.github.com/mironal/slide/master/hyper-miuchi/2013-06-29/node/sectiona/npmjs.org_allow.png">
</center>

!SLIDE

<center>
  <img src="https://raw.github.com/mironal/slide/master/hyper-miuchi/2013-06-29/node/sectiona/kitakore.png" width="900px">
</center>

※説明の関係上アジェンダの順番は前後しています.

!SLIDE

## ちなみに…

!SLIDE

## <span class="red">arduinode.js</span>

<center>
  <p>ｳｴｰｨ</p>
  <img src="https://raw.github.com/mironal/slide/master/hyper-miuchi/2013-06-29/node/sectiona/uei.png">
</center>

!SLIDE

# <span class="v-small">話は戻って</span>何故あの3つ?

<br />

* <span class="blue">underscore.js</span>
* <span class="blue">async.js</span>
* <span class="blue">request.js</span>

<br />

は<span class="red">沢山のプロジェクトに使われてる.</span>

なので汎用性が高く、知っておいて損はない！


!SLIDE

<span class="v-small">まずは1つ目</span>

# <span class="red">request.js</span>

[https://github.com/mikeal/request](https://github.com/mikeal/request)

!SLIDE

<span class="red">Simplified</span> <span class="blue">HTTP request client.</span>

<br />
<br />

<span class="red">簡略化された</span><span class="blue">HTTPリクエストクライアント</span>

!SLIDE

node.jsにも標準でhttpの機能が揃っているが...

微妙に使いにくい...

そんな時に便利な<span class="red">request.js</span>

!SLIDE

## request.jsを<span class="red">使わない</span>コード

```js
var http = require('http');
http.get('http://ha.logginging.org/hotentrys', function(res){
  res.setEncoding('utf-8');
  // チャンクデータが入ってくる.
  res.on('data', function(chunk){
    console.log(chunk);
  });
  // 全部受信し終わったら呼ばれる.
  res.on('end', function(){
    console.log('end');
  });
});
```
!SLIDE

## request.jsを<span class="red">使った</span>コード

```js
var request = require('request');
var url = 'http://ha.logginging.org/hotentrys';

request(url, function(err, resp, body){
  if(err) return console.log(err);
  console.log(body);
});
```

<span class="red">Super simple to use</span>

!SLIDE

# 実際に実行してみる

1. request.jsを使わないコード
2. request.jsを使ったコード
3. 受け取った内容が同じ事を比較

!SLIDE

# <span class="red">request.js</span>のまとめ

* 簡単にhttpリクエストを発行できる
* GET以外にもPOST, PUT, DELETE, HEAD, ...が出来る
* httpリクエストしたい時はrequest.jsを使おう!
* 機能が豊富で把握しきれてない
* 開発がとても活発で常時Pull Requestが発生してる


!SLIDE
<span class="v-small">2つ目</span>

# <span class="red">underscore.js</span>

## [http://underscorejs.org](http://underscorejs.org)

!SLIDE

Underscore is a utility-belt library for JavaScript that provides a lot of the <span class="red">functional programming</span> support that <span class="blue">you would expect</span> in Prototype.js (or Ruby), but without extending any of the built-in JavaScript objects.


<br />
<br />

## <span class="v-small">英語は自身ないが...</span><span class="blue">期待したとおり</span>の<span class="red">関数型</span>っぽいプログラミングが出来るってことでおｋ？

!SLIDE

# ん？ <span class="red">関数型？</span>

!SLIDE

<center>
  <img src="https://raw.github.com/mironal/slide/master/hyper-miuchi/2013-06-29/node/sectiona/trollface.jpg" width="600px">
</center>

!SLIDE

# ってことでコーディング

## さっきrequest.jsで取得したJSONを加工する

1. tweetだけ抽出
2. entryだけ抽出
3. 同じURLのentryをひとつに纏める. cntが最大のものを残す
4. cntが100以上のエントリーだけ抽出
5. titleとurlのペアのリストを作る
6. cntを合計する & 平均値をとる

!SLIDE

# <span class="red">underscore.js</span>のまとめ

* 構造を持ったデータを加工するのに便利！
* あるデータを別のデータに変換することはプログラムにとって当たり前の事なので常に便利ってこと！

!SLIDE

<span class="v-small">最後 3つ目</span>

# <span class="red">async.js</span>

[https://github.com/caolan/async](https://github.com/caolan/async)

!SLIDE

Async is a utility module which provides <span class="blue">straight-forward, powerful functions</span> for working with <span class="red">asynchronous JavaScript</span>.

<br />

<span class="red">非同期javascript</span>を扱うための<span class="blue">簡単で強力な関数</span>を提供する

<br />

<span class="v-small">straight-forwardには"真っ直ぐ"って意味があるので、ネストを解決して真っ直ぐ書けるって意味に掛けてある？</span>

!SLIDE

# <span class="red">node.jsの要点</span>をおさらい

node.jsは<span class="blue">非同期プログラミング</span>

処理をした結果の受け取り方は以下の2種類

1. イベントリスナ
2. コールバック

がある.

```js
var result = proc();
```
というスタイルは同期プログラミング.

!SLIDE

# イベントリスナ

<span class="v-small">こういう奴</span>

```js
  // チャンクデータが入ってくる.
  res.on('data', function(chunk){
    console.log(chunk);
  });
```

微妙に使い難い

コールバックが適用できない場面で仕方なく使うイメージ.

!SLIDE

# コールバック

<span class="v-small">こういう奴</span>

<span>　　　　</span>これ<span class="blue">↓↓↓↓↓↓↓↓↓↓</span>が<span class="red">コールバック</span>.

```js
request(url, function(err, resp, body){
  if(err) return console.log(err);
  console.log(body);
});
```
こっちをよく使う.

コールバックには<span class="blue">重要な規約</span>が課せられている.

<span class="red">一体それは？？？</span>

!SLIDE

# コールバックに約束されたもの...

## <span class="red">第一引数はエラーの為に使う</span>


```js
request(url, function(err, resp, body){
  if(err) return console.log(err);
  console.log(body);
});
```

<span class="red">err</span>の部分

ソース : [http://nodeguide.com/style.html#callbacks](http://nodeguide.com/style.html#callbacks)

!SLIDE

この原則が様々なモジュールで守られているので、<span class="blue">async.jsの汎用性が半端ない</span>ことになっています.

!SLIDE

でわ、コーディング.

1. hotentryとnewentryを取得してファイルに保存 <- <span class="red">ネスト地獄</span>
2. <span class="red">ネスト地獄</span>を解消


!SLIDE

# <span class="red">async.js</span>のまとめ

* ネスト地獄の救世主
* もう無いと生きられない体になった
* yield使えるようになるらしいけどよく知らん！

!SLIDE

# おしまい

