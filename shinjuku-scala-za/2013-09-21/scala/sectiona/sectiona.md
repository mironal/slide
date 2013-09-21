!SLIDE

# <span class="blue">生きるのが面倒</span>だから
## <span class="red">Scala</span>を使って
# <span class="blue">家を制御</span>できるようにした


!SLIDE

## 自己紹介

## [@mironal -> 山口勝也](https://twitter.com/mironal)

<img src="http://mironal.github.io/images/twitter_icon.jpeg">

<br />

[Blog -> http://mironal-memo.blogspot.jp](http://mironal-memo.blogspot.jp)

[Flickr -> http://www.flickr.com/photos/mironal](http://www.flickr.com/photos/mironal)

[GitHub -> https://github.com/mironal](https://github.com/mironal)

[勉強会の資料達 -> http://mironal.github.io](http://mironal.github.io)

!SLIDE

# 話すこと

* 我が家の構成 & 問題点
* Scalatraで作ったもの
* Scalaで外部プロセスを実行する方法

!SLIDE

# 我が家の構成員

<img src="sectiona/oheya.png">

!SLIDE

# MacServerへ<span class="red">入力</span><span class="v-small">(Mac, iPhone -> MacServer</span>

<img src="sectiona/oheya-input.png" width="550">

<br />
<br />

<span class="red">AirPlay</span>(Reflector)を使って音楽 & 画面共有

<span class="v-small"><a href="http://www.airsquirrels.com/reflector/">Reflector($12.99也)</a></span>

!SLIDE

# MacServerから<span class="red">出力</span><span class="v-small">(MacServer -> TV, Amp</span>

<img src="sectiona/oheya-output.png">

* MacServerとTVは<span class="red">HDMI</span>で接続(映像 & 音声)

* MacServerとAmpは<span class="red">Phone plug</span>で接続(音声のみ)

<br />


!SLIDE

# 音声出力が<span class="blue">2系統</span>

* 動画を流す時は<span class="red">HDMI</span>で
* 音楽を流す時は<span class="red">Phone plug</span>を使いたい


<br />

<img src="sectiona/oheya-output.png">

!SLIDE

# <span class="red">問題点</span>


毎回Settingから変更するのは面倒

しかも画面共有(vnc)で接続しなくてはいけない...

<img src="sectiona/NeetHouseSoundSetting.png" width="800">

!SLIDE

# そこで！


<span class="blue">ブラウザ</span>から設定できるようにしました.

<span class="red">Scalatra</span> + <span class="red">ちょっとしたコマンドラインツール</span>で構成

<br />

## ブラウザからだからiPhoneでも制御できるよ！！


!SLIDE

# PCで見た画面


<img src="sectiona/NeetHouseServerSound.png">


<p class="blue">
Scalatraで作ったヽ(•̀ω•́ )ゝ✧
</p>


!SLIDE

# iPhoneで見た画面

<img src="sectiona/NeetHouseServerSound-iPhone.png" width=400>

!SLIDE

# コマンドラインツールの紹介

## <span class="blue"><strong>soundoutput</strong></span>

<span class="v-small">Macの音声出力デバイスを制御するコマンド</span>

* カレントデバイス表示
* デバイス一覧の表示
* デバイスの設定

<br />

<span class="red">ScalatraのServerでこのコマンドを実行している</span>

!SLIDE

## <span class="red">近日公開！？</span>(↓helpも完備)


```help
NeetHouse:bin neethouse$ ./soundoutput -h
usage: soundoutput
Show current output sound device

or: soundoutput <device-name|device-number>
Set output sound device

or: soundoutput [-l|--list] [-h|--help]

Generic Options
-l,  --list  List all output devices
-h,  --help  Show this help
```

!SLIDE

# ちょっとDemo

!SLIDE

# ここからScalaのお話

!SLIDE

# Scalaからコマンドを実行する方法


REPLで試せます

```scala

// プロセス実行に必要なパッケージをimport
import scala.sys.process._

// 実行して結果を標準出力
// 文字列がProcessオブジェクトに暗黙の型変換される. Process("ls").! と同等
// 戻り値はコマンドの終了ステータス
"ls".!
```

!SLIDE

```scala

// 実行して結果を取得
// \n区切りの文字列で結果が取得できる
val result = "ls".!!

// 実行して結果をStreamで取得
val result = Process("ls").lines

/*
val result = "ls".lines
とやるとPredefにある暗黙の型変換と被ってエラーが出る.
StringOpsの中にlinesメソッドがあるため.
*/
```

!SLIDE

# パイプも出来る

```scala

// ls | grep confを実行
// #|は暗黙の型変換で衝突しないので文字列のまま使える
"ls" #| "grep conf" lines
```

[続きはWebで -> Document](http://www.scala-lang.org/api/current/index.html#scala.sys.process.ProcessBuilder)


!SLIDE

# 他の機能

Reflectorが不安定だから再起動出来るようにしといた

<br />

<img src="sectiona/NeetHouseServerProcess.png">

!SLIDE

あとArduinoと赤外線LEDを使って

* テレビ
* アンプ
* エアコン

の操作もブラウザから出来るようにしたい.

<br />

[arduinode](https://github.com/mironal/arduinode)というnode.jsからArduinoを制御できるライブラリを使いたい.

!SLIDE

# 以上です。
