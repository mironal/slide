!SLIDE

# Scala入門

## 趣旨

細かい所は置いといて、とりあえず少し書けるようになろう.

(細かい所は突っ込まれても答えられません...)

!SLIDE

# Scalaをやる時はね…

![foo](sectiona/Kodoku_01.jpg)

ってことで始めます

!SLIDE

# ぼく

## [@mironal -> 山口勝也](https://twitter.com/mironal)

[Blog -> http://mironal-memo.blogspot.jp](http://mironal-memo.blogspot.jp)

[Flickr -> http://www.flickr.com/photos/mironal](http://www.flickr.com/photos/mironal)

[GitHub -> https://github.com/mironal](https://github.com/mironal)

!SLIDE

# あじぇんだ

1. Scalaをｲﾝｽｺ
2. Scalaってなに？
3. Java vs Scala
4. Scalaの文法 ← メイン

<br />

* 関数型言語以外の言語と比較するとパラダイムが違う。
* 頭の体操 & 分かんなかったら質問して下さい


!SLIDE

## Scalaをｲﾝｽｺ

Scalaのインストールにはbrewを使います.

brew未インストールの人は以下のコマンドでｲﾝｽｺ

```sh
ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"
```
<br />
次に以下のコマンドでScalaをインストール.

```sh
brew install scala
```

Mac以外の人は適当に頑張ってください(個別に聞いて下さい).

!SLIDE

## Scalaってなに?

1. オブジェクト指向 & 関数型
2. 短く書ける！(Javaと比較して)
3. 型推論とかモダンな機能が沢山

!SLIDE

## 型推論?

```java
int i = 4 //今まで
```

```scala
val i = 4 //これから(型推論)
```

変数iの型は何が代入されたのかで、決定可能。

ってことはいちいち変数宣言のときに型を書く必要はねぇ！！！

<br />
スクリプト言語だと普通だと思うでしょ？

<br />
でも、実はこれ、静的型付けなんですよ！！！！

```
変数の方を一意に決定できなければコンパイル時にエラーを出す。
なので、エラーが出ない ＝ 型を間違えているというバグが無い
ということが証明されるって事になるらしい。
```
!SLIDE

## Java vs Scala

Javaをdisるぞー！

### Java
```java
List<Integer> list = new ArrayList<Integer>(); //馬鹿なの?
list.add(1); //長い
list.add(2); //ダルい
list.add(3); //無駄
int one = list.get(0)
```

### Scala
```scala
val list = List(1, 2, 3) //スッキリ(≧∇≦)/
val one = list(0)
```

!SLIDE

## Java vs Scala

### Java
```java
Map<String, Integer> map = new HashMap<String, Integer>(); //馬鹿なの？
map.put("one", 1);   //長い
map.put("two", 2);   //ダルい
map.put("three", 3); //無駄
int one = map.get("one");
```

### Scala
```scala
val map = Map(("one" -> 1), ("two" -> 2), ("three" -> 3))
val one = map("one")
```
<br />
※Javaのダメさを強調したことをお詫び申し上げます.

!SLIDE

## Scalaの文法の前に

REPLの使い方

### REPLとは？

Scalaのインタープリタ(対話的実行環境).
Rubyでいうirb.

ターミナルでscalaって実行してみましょう.下のような奴が起動します.


```scala
Welcome to Scala version 2.10.0 (Java HotSpot(TM) 64-Bit Server VM,  Java 1.6.0_43).
Type in expressions to have them evaluated.
Type :help for more information.

scala>
```

!SLIDE

## Scalaの文法

紹介するコードは全てREPLで実行可能です.

1. 変数宣言
2. 代表的な型
3. 代表的な型を使った演算
4. 関数宣言

!SLIDE

#### Scalaの文法

### 変数宣言

```scala
scala> val foo = "foooooooo"
foo: String = foooooooo
```

or


```scala
scala> var bar = "barrrrrrrr"
bar: String = barrrrrrrr
```

valは定数でvarは変数です。通常はvalを使用。

# 通常はvalを(ry

!SLIDE

#### 試してみよう!

1. varで宣言した変数に再代入してみよう.
2. valで宣言した変数に再代入(ry


!SLIDE
#### Scalaの文法

### 代表的な型(1/2)


```scala
scala> val i = 1
i: Int = 1

scala> val l = 1L
l: Long = 1

scala> val d = 0.2
d: Double = 0.2

scala> val s = "hogehoge"
s: String = hogehoge
```

!SLIDE
#### Scalaの文法

### 代表的な型(2/2)

```scala
scala> val list = List(1,2,3,4,5)
list: List[Int] = List(1, 2, 3, 4, 5)

scala> val stringList = List("a", "b", "c")
stringList: List[String] = List(a, b, c)

scala> val map = Map("a" -> 1, "b" -> 2, "c" -> 3)
map: scala.collection.immutable.Map[String,Int] = Map(a -> 1, b -> 2, c -> 3)
```

!SLIDE
#### Scalaの文法

### 代表的な型(3/4)
リストの色々な宣言方法

```scala
scala> List.range(0, 10)
res5: List[Int] = List(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)

scala> List.fill(10)("a")
res6: List[String] = List(a, a, a, a, a, a, a, a, a, a)


scala> List.tabulate(5)( _ * 2)
res7: List[Int] = List(0, 2, 4, 6, 8)
```


!SLIDE
#### Scalaの文法

### 代表的な型(4/4)

タプル

```scala
scala> (1,"a",1.2)
res0: (Int, String, Double) = (1,a,1.2)

scala> val t = (1,"aa")
t: (Int, String) = (1,aa)

scala> val (i, s) = (1, "aa")
i: Int = 1
s: String = aa
```

!SLIDE
#### Scalaの文法

### 代表的な型を使った演算(Int)(1/7)

```scala
scala> val a = 10
a: Int = 10
scala> val b = 20
b: Int = 20
scala> val sum = a + b
sum: Int = 30
scala> val product= a * b
product: Int = 200
scala> a > b
res0: Boolean = false
scala> a < b
res1: Boolean = true
```

!SLIDE
#### Scalaの文法

### 代表的な型を使った演算(Int)(2/7)


tabキーでメソッド一覧を表示可能.


Int型ではこんな感じ

```scala
scala> a.
%              &              *              +              -              /
>              >=             >>             >>>            ^              asInstanceOf
isInstanceOf   toByte         toChar         toDouble       toFloat        toInt
toLong         toShort        toString       unary_+        unary_-        unary_~
```


!SLIDE
#### Scalaの文法

### 代表的な型を使った演算(String)(3/7)

```scala
scala> val foo = "foo"
foo: String = foo
scala> val bar = "bar"
bar: String = bar
scala> foo + bar
res2: String = foobar
scala> foo.length
res3: Int = 3
scala> foo * 10
res4: String = foofoofoofoofoofoofoofoofoofoo
```


!SLIDE
#### Scalaの文法

### 代表的な型を使った演算(String)(4/7)

```scala
scala> foo.
+                     asInstanceOf          charAt                codePointAt
codePointBefore       codePointCount        compareTo             compareToIgnoreCase
concat                contains              contentEquals         endsWith
equalsIgnoreCase      getBytes              getChars              indexOf
intern                isEmpty               isInstanceOf          lastIndexOf
length                matches               offsetByCodePoints    regionMatches
replace               replaceAll            replaceFirst          split
startsWith            subSequence           substring             toCharArray
toLowerCase           toString              toUpperCase           trim
```


!SLIDE
#### Scalaの文法

### 代表的な型を使った演算(List)(4/7)



```scala
// 空のリスト宣言.
scala> List()
res16: List[Nothing] = List()
scala> Nil
res17: scala.collection.immutable.Nil.type = List()
// List宣言
scala> List(1,2,3)
res23: List[Int] = List(1, 2, 3)
scala> val oneTwoThree = 1 :: 2 :: 3 :: Nil
oneTwoThree: List[Int] = List(1, 2, 3)
//上は空のリストの先頭に3を連結したリストを作って更に先頭に2を連結して...
//という風にリストが作られている
```


!SLIDE
#### Scalaの文法

### 代表的な型を使った演算(List)(5/7)


```scala

scala> 0 +: List(1,2)
res24: List[Int] = List(0, 1, 2)

scala> List(0,1) :+ 2
res25: List[Int] = List(0, 1, 2)
```

末尾が:のメソッドは右側のオブジェクトがメソッドを呼び出す.

!SLIDE
#### Scalaの文法

### 代表的な型を使った演算(List)(6/7)


```scala
scala> List(1,2,3,4).head
res27: Int = 1

scala> List(1,2,3,4).tail
res28: List[Int] = List(2, 3, 4)

scala> List(1,2,3,4).filter( n => n%2==0)
res26: List[Int] = List(2, 4)

scala> List(1,2,3,4).filter(_%2==0)
res1: List[Int] = List(2, 4)
```


!SLIDE
#### Scalaの文法

### 代表的な型を使った演算(List)(7/7)
その他色々...

```scala
scala> list.
++                   ++:                  +:                   /:
/:\                  :+                   ::                   :::
:\                   addString            aggregate            andThen
apply                applyOrElse          asInstanceOf         canEqual
collect              collectFirst         combinations         companion
compose              contains             containsSlice        copyToArray
copyToBuffer         corresponds          count                diff
distinct             drop                 dropRight            dropWhile
endsWith             exists               filter               filterNot
find                 flatMap              flatten              fold
foldLeft             foldRight            forall               foreach
genericBuilder       groupBy              grouped              hasDefiniteSize
head                 headOption           indexOf              indexOfSlice
indexWhere           indices              init                 inits
intersect            isDefinedAt          isEmpty              isInstanceOf
isTraversableAgain   iterator             last                 lastIndexOf
lastIndexOfSlice     lastIndexWhere       lastOption           length
lengthCompare        lift                 map                  mapConserve
max                  maxBy                min                  minBy
mkString             nonEmpty             orElse               padTo
par                  partition            patch                permutations
prefixLength         product              productArity         productElement
productIterator      productPrefix        reduce               reduceLeft
reduceLeftOption     reduceOption         reduceRight          reduceRightOption
removeDuplicates     repr                 reverse              reverseIterator
reverseMap           reverse_:::          runWith              sameElements
scan                 scanLeft             scanRight            segmentLength
seq                  size                 slice                sliding
sortBy               sortWith             sorted               span
splitAt              startsWith           stringPrefix         sum
tail                 tails                take                 takeRight
takeWhile            to                   toArray              toBuffer
toIndexedSeq         toIterable           toIterator           toList
toMap                toSeq                toSet                toStream
toString             toTraversable        toVector             transpose
union                unzip                unzip3               updated
view                 withFilter           zip                  zipAll
```


!SLIDE

#### Scalaの文法

### 関数宣言


#### メソッド
```scala
def add(a: Int, b: Int): Int = {
  a + b
}
```

#### 関数
```scala
val add = (a: Int, b: Int) => {
  a + b
}
```
メソッドは関数オブジェクトでは無い.REPLで試してみると分かる(デモします).

!SLIDE

#### Scalaの文法

### メソッド宣言の詳細

```scala
def add(a: Int, b: Int): Int = {
  a + b
}
```

```scala
def メソッド名(引数1: 引数1の型, 引数2: 引数2の型,....): 戻り値の型 = {
  処理内容(処理内容が一行の場合は{}を省略可能)
}
```

!SLIDE

#### Scalaの文法

### メソッド宣言の詳細

メソッド(関数)は入れ子に出来る。

```scala
def func() = {
  def innerFunc() = {
    println("innerFunc")
  }
  innerFunc()
}
```

```scala
val func = () => {
  val innerFunc = () => {
    println("innerFunc")
  }
  innerFunc()
}
```

!SLIDE

#### Scalaの文法

### 関数宣言の詳細

```scala
val add = (a: Int, b: Int) => {
  a + b
}
```

```scala
val 関数名 = (引数1: 引数1の型, 引数2: 引数2の型,...) => {
  処理内容(処理内容が一行の場合は{}を省略可能)
}
```

!SLIDE

#### Scalaの文法
### if文(1/2)
```scala
val a = 1
if( a > 2){
 // true
}else{
 // false
}
```


!SLIDE

#### Scalaの文法
### if文(2/2)
if文は値を返す

```scala
val flag = true
val a = if(flag){
          1
        }else{
          2
        }
println(a)
```

!SLIDE


#### Scalaの文法
### パターンマッチ

```scala
式 match {
  case パターン1 => { 処理1 }
  case パターン2 => { 処理2 }
}
```
<br />

```scala
val lang = "Java"
lang match {
  case "Java" => println("Java")
  case "Scala" => println("Scala")
  case _ => println("Other")
}
```

!SLIDE

#### Scalaの文法
### パターンマッチ


```scala
val list = List(1,2,"3")
list match {
  // Int型で要素数が3つのリストとマッチ.変数a, b, cに値を束縛できる.
  case List(a: Int,b: Int,c: Int) => println(s"Int => ${a}, ${b}, ${c}")
  // 要素数が3つのリストとマッチ
  case List(a, b, c) => println(s"${a}, ${b}, ${c}")
  // なんでもマッチ.
  case _ => println("Other")
}
```


!SLIDE
#### Scalaの文法

終了 ?

!SLIDE
#### Scalaの文法

ちょっと待て？

forとかwhileの繰り返し構文は？

!SLIDE
#### Scalaの文法

不思議なことにScalaでは繰り返し構文を使う機会はあまりありません。

Listなどのコレクションクラスが持つメソッドが強力だからだと思います。

!SLIDE
### Scalaの文法
全ての要素を2倍したリストを作る.

```scala
// Java風
var evens = List[Int]() // <- var (ヽ´ω`)
for( i <- List.range(1, 10)){
  evens = evens :+ i
}
evens: List[Int] = List(1, 2, 3, 4, 5, 6, 7, 8, 9)
```
<br />

```scala
// Scala風
scala> List.range(0, 10).map( _ * 2)
res8: List[Int] = List(0, 2, 4, 6, 8, 10, 12, 14, 16, 18)
```
Scalaの方が明らかに簡潔に書けている。

!SLIDE
偶数だけを取り出して、それぞれの要素を2倍したい

```scala
// Java風
var evens = List[Int]()
for( i <- List.range(1, 10)){
  if( i % 2 == 0 ){
    evens = evens :+ i * 2
  }
}
```
<br />

```scala
// Scala風
scala> List.range(0, 10).filter(_%2==0).map(_*2)
res9: List[Int] = List(0, 4, 8, 12, 16)
```

先の例からの変更箇所はScalaの方が明らかに少ない.

!SLIDE
Scalaにはbreakが無いよ！(実はあるけど…)

何かを待ちたいとき

```scala
// Java風(コンパイル通りません)
while(true){ if(somethingIsOver()){ break } }
```

```scala
// Scala風
def waitSomething(): Unit = {
  def wait(isOver:Boolean): Unit = isOver match {
      case true => () //()はUnitの事
      case false => wait(somethingIsOver())
    }
  wait(false)
}
```

再帰を使ってキメる！！

```scala
/*memo*/  def somethingIsOver() = true //を定義しておけば実行できる
```
!SLIDE

#### 今後に向けて

今回はクラスの作り方を扱っていません。

Scalaでクラスを説明するとケースクラスやコンパニオンオブジェクト等、色々な言葉が出てきます。

消化不良に陥る可能性を考慮して今日は止めておくことにしました。

最後にScalaの強力な型チェックの一例を紹介して終わります。

!SLIDE

## 問題(ここではJavaを例にする)
1. switch caseを使うとき、しばしばcaseの漏れが発生する。
2. コンパイル時にcaseの漏れを検出することが不可能。

<br />

```java
// numは0〜2までの値を取る
switch (num) {
  case 0: /* something */ break;
  case 1: /* something */ break;
  default: throw new IllegalStateException("Unknown case.");
}
```
(=_=;) コンパイル時にcase漏れが検出出来れば、テストする必要も無いのにな…

!SLIDE

```scala
// SealedTraitSample.scalaとして保存してみよう.
sealed trait Error { def msg: String }
case class FooError(msg: String) extends Error
case class BarError(msg: String) extends Error

object SealedTraitSample extends App {
  val error: Error = FooError("foo")
  printError(error)

  def printError(e: Error) = {
    error match {
      case FooError(msg) => println(msg)
      case BarError(msg) => println(msg)
    }
  }
}
```

!SLIDE

保存したディレクトリに行って以下のコマンドを実行

```sh
scalac SealedTraitSample.scalk
```


無事にコンパイル出来たかな？

何も出なければ正常です。

!SLIDE

```scala
sealed trait Error { def msg: String }
case class FooError(msg: String) extends Error
case class BarError(msg: String) extends Error

object SealedTraitSample extends App {
  val error: Error = FooError("foo")
  printError(error)

  def printError(e: Error) = {
    error match {
      case FooError(msg) => println(msg)
      //書き換えてみよう
      //case BarError(msg) => println(msg)
    }
  }
}
```


!SLIDE

もう一度以下のコマンドを実行

```sh
scalac SealedTraitSample.scalk
```

以下のエラーが出たかな？

```
SealedTraitSample.scala:10: warning: match may not be exhaustive.
It would fail on the following input: BarError(_)
    error match {
    ^
one warning found
```


!SLIDE

match may not be exhaustive.

マッチは網羅できない場合があります。

!SLIDE

## 何が起きたのか？

1. sealedがついたクラス(trait)は同一ソースファイル内でのみ継承可能
2. そのためコンパイル時に、存在しうる全てのサブクラスが確定する。
3. その結果sealedクラスをパターンマッチに使用した場合、matchの網羅性をコンパイラがチェック可能。
4. パターンに漏れがある場合は、コンパイラが警告を出す

(ﾟ∀ﾟ) パターンに漏れが有るかどうかのテストはいらねぇ！！！


!SLIDE

以上 & 質問
