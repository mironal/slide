!SLIDE

# 開発中に生まれたツールを紹介

[前回言ってた奴は進捗ダメです](http://mironal.github.io/slides/2013-12-07/scala/index.html)

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

## <span class="blue">前回(12月)</span>

# 祝 ✩*⋆¸¸.•*¨*꒰⁎˃ ॢꇴ ॢ˂⁎꒱*¨*•.¸¸⋆*✩

## 会社作りました (੭ु´͈ ᐜ `͈)੭ु⁾⁾

<br />

<span class="red">合同会社コベリン</span>

[http://covelline.com](http://covelline.com)

<br />

## ｵ❣ヾ(῀ ⚙⌄⚙ ῀)ﾉ"ｨｨﾈ❣

!SLIDE

# 祝 ✩*⋆¸¸.•*¨*꒰⁎˃ ॢꇴ ॢ˂⁎꒱*¨*•.¸¸⋆*✩

## アプリ リリースされました (੭ु ›ω‹ )੭ु⁾⁾♡

<br />

<a href="http://covelline.com/feather/"><img src="sectiona/feather_banner.jpg" width="1000"></a>

!SLIDE

# 本題: 開発中に生まれたツール達

## 弊社オープンソースリポジトリ: <a href="https://github.com/neethouse">Neet House</a>

### <a href="https://github.com/neethouse/frasco"><span class="blue">* frasco</span></a>

iOS simulator の保存・リストアを行ったりするコマンド

### <a href="https://github.com/neethouse/git-count"><span class="blue">* git-count</span></a>

Gitリポジトリ中で誰が何行のコードを書いたか数えるコマンド

### <a href="https://github.com/neethouse/GenCoding"><span class="blue">* GenCoding</span></a>

Cbjective-C の NSCoding の 単調なコードを自動生成するコマンド

!SLIDE

### Scala で書かれたツールが少ない...

何故か？

コンパイルや JVM の起動に時間が掛かるので、ちょっとしたツールに Scala を使うのは使い勝手が悪い

### なので

コンパイルや起動時間が無視できるぐらいのツールに Scala を使うことにした

!SLIDE

最近、Scalaで書いたツールを 2つ紹介 (まだ未公開だけど使ってはいる)

1. update-acknowledgements-md
2. search-feather

!SLIDE

## update-acknowledgements-md (<a href="https://gist.github.com/mironal/8485561">gist</a>)

<br />

CocoaPods が生成する `Pods-acknowledgements.markdown` のライブラリの並び順を入れ替えるコマンド

<br />

### 採用理由

`pod install` 実行後に使うことを想定しているが `pod install`の実行に時間が結構掛かるので、 Scala のもたつきが無視できる

<br />

Demo

!SLIDE

### search-feather (<a href="https://gist.github.com/mironal/22acb387b24b3250ba07">gist</a>)

<br />

<span class="blue">feather for Twitter</span> のユーザの動きを収集する常駐型のツール

Twitter4J で `source:feather_for_ios lang:ja` な呟きを収集して、時間・曜日毎のアクティブユーザ数を計測してアップデートの告知タイミングなどの検討に使う.

<br />

### 採用理由

常駐系なので起動時間は無視できる & Twitter4J が使えるので Scala でやる以外に考えられない！！！

!SLIDE

### まとめ

サーバサイドで長時間実行する系には向くけど、ちょっとしたコマンドラインツールを作るのには辛い...

<br />

でも、データ処理とかするツールとは非常に相性が良いので、頑張って使う価値あり！！！

