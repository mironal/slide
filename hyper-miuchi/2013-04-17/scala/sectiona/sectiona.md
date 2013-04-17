!SLIDE

# Scala入門

## クラス編


!SLIDE

# Scalaをやる時はね…

![Scalaをやる時はね...画像](http://mironal.github.com/slides/2013-03-13/scala/sectiona/Kodoku_01.jpg)

ってことで始めます

!SLIDE

# ぼく

## [@mironal -> 山口勝也](https://twitter.com/mironal)

[Blog -> http://mironal-memo.blogspot.jp](http://mironal-memo.blogspot.jp)

[Flickr -> http://www.flickr.com/photos/mironal](http://www.flickr.com/photos/mironal)

[GitHub -> https://github.com/mironal](https://github.com/mironal)

!SLIDE

# あじぇんだ

1. クラスの作り方
2. クラスとオブジェクト
3. コンパニオンオブジェクト
4. ケースクラス

!SLIDE

## <span class="blue">最初にざっくりと文法を紹介</span>して、<span class="red">その後ハンズオン</span>でやります


## githubにslideをアップロードしてあるので、<span class="red">コピペで使って下さい</span>


## [SlideのURL](https://github.com/mironal/slide/blob/master/hyper-miuchi/2013-04-17/scala/sectiona/sectiona.md)

## https://github.com/mironal/slide/blob/master/hyper-miuchi/2013-04-17/scala/sectiona/sectiona.md

twitterで流します

!SLIDE

# 1. クラスの作り方

## 定義

```scala
class Greeter {
  // クラスの中味
}
// Greeter : 挨拶する人
```

## インスタンス作成

```scala
val yamada = new Greeter();

val ueda = new Greeter();

```
!SLIDE

# コンストラクタ

<span class="blue">クラスの初期化</span>を行いたいときに使います

```scala
class Greeter {
  // ここに書いた処理がそのままコンストラクタの処理になる
  println("**********");
  println("Created !");
  println("**********");
}
```

!SLIDE

# 引数のあるコンストラクタ

```scala
class Greeter(name: String) {
  def myName() = name
}
```

```scala
yamada = new Greeter("yamada")
yamada.myName()
// yamada
```

!SLIDE

# メンバーの定義

## メソッド(関数のこと)

```scala
class Greeter(name: String) {
  // 公開メソッド
  def sayHello(name: String): Unit = {
    println( mkHello(name) )
    println( "My name is " + myName() )
  }

  // 非公開メソッド
  private def mkHello(name: String): String = {
    s"Hello! ${name}"
  }
}
```

!SLIDE

# メンバーの定義

## フィールド(変数, 定数の事)

```scala
class Greeter(name: String){
  val myName = name
}
```

冗長なので以下のように書ける

```scala
class Greeter(val name: String)
```


!SLIDE

# オブジェクト(Javaのstatic的な奴)

シングルトンなものを表します.

例えばアプリケーションそのものは一つしか無いものです。

```scala
object SayHello {
  def say() = println("Hello")
}

SayHello.say()
// Hello
```

!SLIDE

# ざっくり終了

次からはハンズオンな感じで

!SLIDE

# 例題

これ以降は複素数を表すComplexクラスを用いて説明をします.

エディタを使って以下のコードを<span class="blue">Complex.scala</span>という名前で保存して下さい(コピペ可)

```scala
// real      : 実部
// imaginary : 虚部
class Complex(real: Double, imaginary: Double) {
  def r() = real
  def i() = imaginary
}
```
※sample/Complex1.scalaがｿﾚです

!SLIDE

続いて以下のコードを同じ<span class="blue">Complex.scala</span>の下に追加.

```scala
object ComplexNumbers {
  def main(args: Array[String]) {
    val c = new Complex(1.2, 3.4)
    println("real part     : " + c.r())
    println("imaginary part: " + c.i())
  }
}
```

書けたら<span class="blue">Complex.scala</span>の在るディレクトリで以下のコマンドを実行.

```sh
scalac Complex.scala
scala ComplexNumbers
// real part     : 1.2
// imaginary part: 3.4
```

実行できましたか？

!SLIDE

# このコードを改善していきます

!SLIDE

## 改善1

先ほどのコードの<span class="blue">この部分</span>

```scala
println("real part     : " + c.r())
println("imaginary part: " + c.i())
```

<span class="blue">この部分</span>

```scala
c.r()
c.i()
```

## <span class="red">()がダルい.</span>

メソッド(関数)をフィールド(変数)の様に呼び出せれば、4回タイピング回数が減らせる.

!SLIDE

## ()を無くそう(1/2)

先ほどのComplexクラスを以下のように変更

```scala
class Complex(real: Double, imaginary: Double) {
  def r = real
  def i = imaginary
}
```

### diff

```diff
 class Complex(real: Double, imaginary: Double) {
-  def r() = real
-  def i() = imaginary
+  def r = real
+  def i = imaginary
 }
```

※sample/Complex2.scalaがｿﾚです

!SLIDE


## ()を無くそう(2/2)

ComplexNumbersも以下のように変更

```scala
object ComplexNumbers {
  def main(args: Array[String]) {
    val c = new Complex(1.2, 3.4)
    println("real part     : " + c.r)
    println("imaginary part: " + c.i)
  }
}
```

### diff

```diff
-    println("real part     : " + c.r())
-    println("imaginary part: " + c.i())
+    println("real part     : " + c.r)
+    println("imaginary part: " + c.i)
   }
```

!SLIDE

## 実行

書けたら<span class="blue">Complex.scala</span>の在るディレクトリで以下のコマンドを実行.

```sh
scalac Complex.scala
scala ComplexNumbers
// real part     : 1.2
// imaginary part: 3.4
```

実行できましたか？

!SLIDE

## 解説

引数の無いメソッドは括弧を省略できる.

!SLIDE

# 次のメンドイところ

```scala
object ComplexNumbers {
  def main(args: Array[String]) {
    val c = new Complex(1.2, 3.4)
    println("real part     : " + c.r)
    println("imaginary part: " + c.i)
  }
}
```

## の

```scala
    println("real part     : " + c.r)
    println("imaginary part: " + c.i)
```

いちいち文字列構築するの面倒くさい

!SLIDE

# toStringでキメる

インスタンスの内容をいちいち文字列を構築して表示するのは面倒なので、toStringに任せたい.

しかし…

```scala
val c = new Complex(1.2, 3.4)
println(c.toString)
```
を実行すると以下の様な結果になる.

```scala
Complex@625dcec6
```

# 意味わからん！！

!SLIDE

# 継承とOverride

スーパークラスを指定していない場合、Scalaではscala.Objectというクラスが勝手にスーパークラスになる.

<br />

scala.ObjectのtoString()はクラス名@ハッシュで人間に分かり難い文字列が返ってくるので、<span class="blue">適切にoverrideしよう！</span>

!SLIDE

## toStringを良い感じにしよう(1/2)

Complexクラスを以下のように変更

```scala
class Complex(real: Double, imaginary: Double) {
  def r = real
  def i = imaginary
  // r± ai 的な感じで表示する.
  override def toString() = f"$r%f$i%+fi"
}
```

## diff

```   def i = imaginary
+  // r ± ai 的な感じで表示する.
+  override def toString() = f"$r%f$i%+fi"
```

<span class="blue">※ぶっちゃけ魔術</span>

!SLIDE

## toStringを良い感じにしよう(2/2)

ComplexNumbersも以下のように変更

```scala
object ComplexNumbers {
  def main(args: Array[String]) {
    val c = new Complex(1.2, 3.4)
    println(c.toString)
  }
}
```

## diff


```diff
-    println("real part     : " + c.r)
-    println("imaginary part: " + c.i)
+    println(c.toString)
```
!SLIDE

## 実行

書けたら<span class="blue">Complex.scala</span>の在るディレクトリで以下のコマンドを実行.

```sh
scalac Complex.scala
scala ComplexNumbers
// 1.200000+3.400000i
```

実行できましたか？

!SLIDE

## 解説

スーパークラスのメソッドのオーバーライドには<span class="blue">overrideキーワードが必ず必要</span>

不用意なオーバーライドを避けるためです.

!SLIDE

# さて

!SLIDE

# ここからが<span class="blue">本当の</span><span class="red">Scalaだ！</span>

![jigoku](https://raw.github.com/mironal/slide/master/hyper-miuchi/2013-04-17/scala/sectiona/jigoku.jpg)

!SLIDE

# まだ面倒なところ

## <span class="blue">newがメンドイ</span>

```scala
new Complex(1.2, 3.4)
new Complex(1.2, -3.4)
```

<br />

## <span class="blue">アクセッサーの定義がメンドイ</span>
```scala
class Complex(real: Double, imaginary: Double) {
  def r = real //ここと
  def i = imaginary //ここ
}
```

!SLIDE

# 倒すべき<span class="red">敵</span>

## 1. newがメンドイ
## 2. アクセッサーの定義がメンドイ


!SLIDE

# それ<span class="blue">ケースクラス</span>で解決出来ます!!

その前に以下のことを解説します

1. コンパニオンオブジェクト
2. applyメソッド

!SLIDE

# コンパニオンオブジェクト

クラス定義と<span class="blue">同一のファイルに同一の名前</span>で定義したobject

```scala
// コンパニオンクラス
class Complex(real: Double, imaginary: Double) {
  def r = real
  def i = imaginary
  override def toString() = f"$r%f$i%+fi"
}
// コンパニオンオブジェクト
object Complex {
}
```
!SLIDE

# applyメソッド

言葉で説明するよりコードで！

applyは特別なメソッドで以下のように書くと

```scala
object Complex {
  def apply(i: Double, r: Double) = {
    println(f"$r%f$i%+fi")
  }
}
```

```scala
Complex.apply(1.2, 3.4)
```

の変わりに

```scala
Complex(1.2, 3.4)
```

と書ける！！

!SLIDE

# ??????

前回やった

```scala
val list = List(1, 2, 3, 4)
```
<br />
とかも実は

```scala
val list = List.apply(1, 2, 3, 4)
```

<br />

を呼び出しているのです.

# 簡単でしょ？

!SLIDE

コンパニオンオブジェクト & applyメソッドは原則としてインスタンスを生成するための<span class="blue">ファクトリメソッド</span>として使用します

```scala
// コンパニオンクラス
class Complex(real: Double, imaginary: Double) {
  def r = real
  def i = imaginary
  override def toString() = f"$r%f$i%+fi"
}

// コンパニオンオブジェクト
object Complex {
  def apply(i: Double, r: Double) = {
      new Complex(i, r)
  }
}
// val c = Complex(1.2, 3.4)と書ける
```
!SLIDE

# 解説

コンパニオンオブジェクトでファクトリメソッドを作れば、インスタンス化時に<span class="blue">newが要らなくなる</span>.


<br />

```scala
val c = new Complex(1.2, 3.4)
```

が

```scala
val c = Complex(1.2, 3.4)
```
と書ける

!SLIDE

# newが要らなくなりました！！

## 1. <del>newがメンドイ</del> <span class="blue"><small>(倒した)</small></span>
## 2. アクセッサーの定義がメンドイ


# <span class="red">でも…</span>

!SLIDE

# <span class="red">コード量がメッチャ増えた</span>

<br />

![punpun](https://raw.github.com/mironal/slide/master/hyper-miuchi/2013-04-17/scala/sectiona/punpunmaru.png)


!SLIDE

# 新たな敵が…

## 1. <del>newがメンドイ</del> <small>(倒した)</small>
## 2. アクセッサーの定義がメンドイ
## <span class="red">3. コンパニオンオブジェクト書くのダルい</span>

!SLIDE

# それ<span class="blue">ケースクラス</span>で解決できるよ！

今度こそケースクラスです

!SLIDE

# 説明しよう！

ケースクラスとは以下の機能がﾓﾘﾓﾘなクラスのことだ！！

<br />

1. コンストラクタの引数を<span class="blue">public val(フィールド)にする</span>
2. 上記フィールドでtoStringを<span class="blue">自動的に実装</span>
3. コンパニオンオブジェクトを<span class="blue">自動的に実装</span>
4. applyメソッドも<span class="blue">自動的に実装</span>
5. 他にも色々自動でやってくれるが触れていない言葉が出てくるので省略


!SLIDE

## ケースクラスを使うと

```scala
class Complex(real: Double, imaginary: Double) {
  def r = real
  def i = imaginary
}
object Complex {
  def apply(i: Double, r: Double) = { new Complex(i, r) }
}

```
## が

```scala
case class Complex(r: Double, i: Double)
```

## と書ける...

!SLIDE

<pre id="masaka">
＿人人人人人人人＿
＞　突然の1行　＜
￣Y^Y^Y^Y^Y^Y￣
</pre>

!SLIDE

## REPLでやってみよう

```scala
scala> case class Complex(r: Double, i: Double)
defined class Complex

scala> val c = Complex(1.2, 3.4)
c: Complex = Complex(1.2,3.4)

scala> c.r
res0: Double = 1.2

scala> c.i
res1: Double = 3.4

scala> c.toString
res2: String = Complex(1.2,3.4)
```

!SLIDE

toStringは自動生成されますが、

```scala
c.toString
// Complex(1.2, 3.4)
```
という感じ(コンストラクタっぽく)に生成されますので、気に喰わない場合は以下のようにoverrideしてください

```scala
case class Complex(r: Double, i: Double) {
  override def toString() = f"$r%f$i%+fi"
}
```
!SLIDE

ということで

!SLIDE

# 一気に全部倒した

## 1. <del>newがメンドイ</del>
## 2. <del>アクセッサーの定義がメンドイ</del>
## 3. <del>コンパニオンオブジェクト書くのダルい</del>

# <span class="red">caseクラス 凄い！！</span>

!SLIDE

# おわり
