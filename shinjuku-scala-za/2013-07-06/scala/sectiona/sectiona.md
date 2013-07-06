!SLIDE

# Scalaのソースコードリーディング環境を考える

!SLIDE

## 自己紹介

<img src="http://mironal.github.io/images/twitter_icon.jpeg">

## [@mironal -> 山口勝也](https://twitter.com/mironal)


[Blog -> http://mironal-memo.blogspot.jp](http://mironal-memo.blogspot.jp)

[Flickr -> http://www.flickr.com/photos/mironal](http://www.flickr.com/photos/mironal)

[GitHub -> https://github.com/mironal](https://github.com/mironal)

!SLIDE

# 前回の確認

<img class="border" src="https://raw.github.com/mironal/slide/master/shinjuku-scala-za/2013-07-06/scala/sectiona/list.png">

<br />

進展は無い... ｽﾏﾇ...

!SLIDE

# Scalaのコードを読みたい！

* Scalaは全体的に<span class="red">情報が少ない</span>

* 最も良い情報源はライブラリとかのコード

* なので<span class="red">快適にコードが読める環境</span>が欲しい

* 読んで分かったことを発表して、フィードバックを得たい

* 情報の足しになれば嬉しい


!SLIDE

# コードを読むのに必須な条件

* 宣言元とかに気軽にジャンプしたい
* Scala標準ライブラリやその他ライブラリにもジャンプ
* 書いて実行もしたいので読むだけ×

!SLIDE

# 何を使って読む?

* Vim?
* emacs?
* Eclipse?
* IntelliJ?

!SLIDE

# 結論から言うと

(IntelliJ持ってないので)

## <span class="red">Eclipseになった</span>

[-> Scala IDE for Eclipse](http://scala-ide.org/)

こんな感じです!(Demo)

!SLIDE

# 以上！

!SLIDE

この一ヶ月でやったこと

!SLIDE

# たどった道筋

!SLIDE

# 最初はVimで読もうとした

Scalaを書くときはVimを使ってたから、当然の判断だった

!SLIDE

## こんな画面になった

<img src="https://raw.github.com/mironal/slide/master/shinjuku-scala-za/2013-07-06/scala/sectiona/scala-vim.png">

!SLIDE

# 挫折 <span class="v-small">(ｳﾞｨﾑに申し訳ない)</span>

* 俺のVim力が足りなかった
* 宣言元にジャンプできない(事が多い)
* Scalaのコードが必要になる

<br />

implicitとか...

!SLIDE

# emacs

ｽﾏﾇ...

Vim派なんだ...

!SLIDE

# そしてEclipse

* Scalaのコードにジャンプできる
* Play2のコードにもジャンプできる

だたし...

* 全てIDEで閉じてない. ターミナルでの作業が必要
* Play2のプロジェクトを作るのが面倒
* sbtとの連携は調べてない

!SLIDE

# IntelliJはどうなのでしょうか？

* sbtとの連携とか?

* IntelliJの中で全部出来るのでしょうか?

!SLIDE

# 以上です
