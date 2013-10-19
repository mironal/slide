!SLIDE

# Scala周りの便利なツールの紹介

知ってる人は知っているものなので、お手元の資料作りに勤しんで下さい`_(:3 」∠)_`


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

Scala周りの便利なツールの紹介

1. giter8
2. conscript
3. scala-notebook

<br />

### 最近全然 Scala 出来てないから
### 小ネタで勝負だ≡└(┐卍^o^)卍

!SLIDE

# 初めに

<span class="red">Typesafe Activator 1.0</span> 公開おめでとうございます ٩(๑╹ω╹๑)۶

brew にも登録されています.

(とは言いつつ僕はまだ弄っていません...)


!SLIDE

# Typesafe Activatorって？

* Typesafe Activatorは、JavaおよびScala開発者向けの開発支援ツール
* プロジェクト作成 や テストが出来る.
* sbt と giter8 をひとまとめにした感じ(実際はもっと色々機能がある).

引用:[SourceForgeによる紹介](http://sourceforge.jp/magazine/13/09/25/160000)

!SLIDE

# ちょっと触って思ったこと

ほんのちょっとしか触っていませんが...

!SLIDE

# テンプレートが足りない

* プロジェクトのテンプレートが少ない...
* 現在でも29種類あるらしいが、ちょっと足りない.
* 具体的には Scalatra のテンプレートがない

[-> テンプレート一覧](http://typesafe.com/activator/templates)

!SLIDE

# 現代人が抱える問題

プロジェクトディレクトリが一発で作れないとやる気が出ない体になってしまった...

!SLIDE

# そこで giter8

!SLIDE

# giter8とは?

* Scalaのプロジェクトを生成するコマンドラインツール.

* `play new`みたいなやつ

* プロジェクトのテンプレートはgithubにある<br />
    * 現代的(⌯꒪͒ ૢ∀ ૢ꒪͒)

<br />

[-> giter8](https://github.com/n8han/giter8)

[-> 日本語ドキュメント](http://blog.twiwt.org/e/f12c0f)

!SLIDE

# 導入方法

## brew を使う

```sh
brew install giter8
```

## Conscript を使う

```sh
# conscriptを入れる
curl https://raw.github.com/n8han/conscript/master/setup.sh | sh
# conscript(csコマンド)でgiter8を入れる
cs n8han/giter8
```

!SLIDE

# 使い方(1/2)

例えばScalatraのプロジェクトを作る場合は以下のコマンドを実行する.


```sh
g8 scalatra/scalatra-sbt
```

※ g8というのがgiter8のコマンドです

!SLIDE

# 使い方(2/2)

色々聞かれるので回答する

```
organization [com.example]:
package [com.example.app]:
name [My Scalatra Web App]:
servlet_name [MyScalatraServlet]:
scala_version [2.9.2]:
version [0.1.0-SNAPSHOT]:
```

!SLIDE

# ちなみに

Typesafe Activator にテンプレートを追加することも出来るのでそのうち充実するかも

[http://typesafe.com/activator/template/contribute](http://typesafe.com/activator/template/contribute)


!SLIDE

# おまけ Conscript

!SLIDE

# Conscript とは？

* Scalaで作られたソフトウェアをインストール & アップデートするためのツール

* さっきのgiter8もConscriptを使ってインストールした.

* このスライドを実行しているpicture-showというScala製のツールもConscriptを使ってインストールした.

[-> Conscript](https://github.com/n8han/conscript)

!SLIDE

# 導入方法

```sh
curl https://raw.github.com/n8han/conscript/master/setup.sh | sh
```

!SLIDE

# 使い方


```sh
# giter8 をインストール
cs n8han/giter8

# picture-show をインストール
cs softprops/picture-show
```

※csというのがconscriptのコマンドです

!SLIDE

# もひとつおまけに scala-notebook

!SLIDE

# scala-notebook とは?

## A more friendly,  browser-based interactive Scala prompt (REPL).

<br />

## ブラウザで動くREPL


[-> scala-notebook](https://github.com/Bridgewater/scala-notebook)

!SLIDE

# 導入方法

```sh
git clone https://github.com/Bridgewater/scala-notebook.git
cd scala-notebook
sbt

# sbt内で
> project server
> run
```

!SLIDE

# 起動！

<img src="sectiona/scala-notebook.png">

!SLIDE

# 以上です
