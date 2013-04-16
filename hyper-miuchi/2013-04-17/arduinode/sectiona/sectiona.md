!SLIDE

# arduinodeのご紹介


<img src="https://raw.github.com/mironal/slide/master/hyper-miuchi/2013-04-17/arduinode/sectiona/nodejs-dark.png">
<span class="big">＋</span>
<img src="https://raw.github.com/mironal/slide/master/hyper-miuchi/2013-04-17/arduinode/sectiona/ArduinoUno_r2_front.jpg" width="300">

### <span class="blue">Web</span>と<span class="red">ハードウェア</span>を繋げる

!SLIDE

# ぼく

## [@mironal -> 山口勝也](https://twitter.com/mironal)

[Blog -> http://mironal-memo.blogspot.jp](http://mironal-memo.blogspot.jp)

[Flickr -> http://www.flickr.com/photos/mironal](http://www.flickr.com/photos/mironal)

[GitHub -> https://github.com/mironal](https://github.com/mironal)

!SLIDE

# 背景

Arduinoを使ってみたいけど…

## <span class="blue">JavaScriptは書ける</span>けど、<span class="red">C言語は書けない…</span>

## ハードウェアのプログラミングって<span class="blue">敷居が高そう</span>

## <span class="blue">複数の言語</span>を使って書くのはダルい


!SLIDE

# それ、<span class="blue">arduinode</span>で解決できるよ！

!SLIDE

# arduinodeって？

arduinodeは<span class="blue">Arduinoのプログラミングを不要</span>にし、<span class="red">node.jsのみでアプリケーションを開発可能</span>にします。

!SLIDE

# どうなってんの？

## <span class="blue">node.jsからArduinoの操作を全て行います。</span>

<br />

#### RPC(リモートプロシージャコール)的なｱﾚです

#### ArduinoにJavaScriptを流しこんで実行！みたいなやつではありません

!SLIDE

# 構成

<img src="https://raw.github.com/mironal/slide/master/hyper-miuchi/2013-04-17/arduinode/sectiona/arduinode.png">

!SLIDE

# 登場人物

arduinodeは以下の2つで構成されています

## 1. GeneralIoSerial.ino

## 2. arduinode.js


!SLIDE

# 1. GeneralIoSerial.ino

Arduinoのプログラム

node.jsからの指示により色々な動作をする働き者


!SLIDE

# 2. arduinode.js

node.jsのモジュール

node-serialportのラッパー

```sh
npm install arduinode
```

!SLIDE

# 使い方

1. リポジトリのクローン
2. Arduinoに書き込む
3. npm install arduinode
4. 開発する

<br />

## まずはリポジトリのクローン

```sh
git clone https://github.com/mironal/Node-Arduino-General-IO.git
```

!SLIDE

## 2. Arduinoに書き込む

```sh
cd Node-Arduino-General-IO/arduino/GeneralIoSerial
open .
```

<span class="blue">GeneralIoSerial.ino</span>を<span class="red">Arduino IDEで開いて書き込みボタンを押すだけ</span>(シリアルポートとボードの設定が最初に必要です)

<img src="https://raw.github.com/mironal/slide/master/hyper-miuchi/2013-04-17/arduinode/sectiona/arduino_ide.png">

!SLIDE

## 3. npm install arduinode

適当な開発用ディレクトリを作ってarduinodeモジュールをインストールします

```sh
mkdir sample
cd sample
npm install arduinode
```

!SLIDE

## 4. 開発する

```js
var Arduinode = require("arduinode").Arduinode;
var portName = "/dev/tty.usbmodem1411";

var arduinode = new Arduinode(portName), function(err, reuslt){

  // アナログ0番ポートの値の読み込み
  var port = 0;
  arduinode.analogRead(port, function(err, reuslt){
    if(err) throw err;
    console.log(result);
  });
});
```
!SLIDE

## サンプルコード & ドキュメント


[サンプルプロジェクト(arduinode + express + web socket)](https://github.com/mironal/Node-Arduino-General-IO/tree/master/node/example)

[サンプルソース(テストコード)](https://github.com/mironal/Node-Arduino-General-IO/tree/master/node/module/test)

[APIドキュメント](https://github.com/mironal/Node-Arduino-General-IO/blob/master/doc/API.md)

!SLIDE

# Demo


!SLIDE

# おわり

!SLIDE
## TODO

サンプルプロジェクトでStream APIを使ってるのが分かるような図を作る
