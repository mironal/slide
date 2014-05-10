!SLIDE

# Scala と Haskell

## <span class="v-small">Haskell の</span>  <span class="blue">Functor</span>

眠くなりそうな内容だ...

!SLIDE

## [@mironal -> 山口勝也](https://twitter.com/mironal) <span class="v-small blue">covelline, LLC.</span>

<img src="http://mironal.github.io/images/twitter_icon.jpeg" width="200">

<br />

[Blog -> http://mironal-memo.blogspot.jp](http://mironal-memo.blogspot.jp)

[Flickr -> http://www.flickr.com/photos/mironal](http://www.flickr.com/photos/mironal)

[GitHub -> https://github.com/mironal](https://github.com/mironal)

[勉強会の資料達 -> http://mironal.github.io](http://mironal.github.io)

!SLIDE

## 参考文献

<img src="sectiona/haskell.jpg" width="400">

!SLIDE

前回に引き続き Haskell をﾁﾏﾁﾏ勉強して、その内容を発表するよー


でも、色々飛ばして今日は <span class="blue">Functor</span> やります

!SLIDE

## とりあえずの目標

<span class="red">Monad</span> をそれとなく理解したい...

!SLIDE

##  今の僕の知識

### <span class="red">Monad</span> ???

- <span class="red">Monad</span> 則を満たすもの
- List Monad とか、Maybe Monad とか色々あるらしい...

### Monad 則が理解できていない

- 関数型でプログラミングしている時に「今、<span class="red">Monad</span> 使ってる！」って意識できるようになりたい.
- たぶん今は知らないうちに使ってる

!SLIDE

### すごいH本の構成が

1. Functor
2. Applicative Functor
3. Monoid
4. Monad

### となっているので  <span class="blue">Functor</span> は <span class="red">Monad</span> への入り口

だと思った.

### ってことで早速 <span class="blue">Functor</span> (╭☞•́⍛•̀)╭☞

!SLIDE

### Functor

よくあるイメージ

- Functor は箱の中に入っている値に関数を適用して箱に入ったまま返す.
- 箱の中身だけを変更する方法

```scala
Option(1).map(i => s"$i")
```

`Option[Int]` から `Option[String]` に変わった


!SLIDE

# Functor

### Haskell の型クラスの1つ.

```haskell
class Functor f where
  fmap :: (a -> b) -> f a -> f b
```
<br />
<br />

( ˘ω˘ ) 味わい深い...

!SLIDE

```haskell
class Functor f where
  fmap :: (a -> b) -> f a -> f b
```

- 型クラス Functor は関数 fmap を持っている
- fmap は 2つの引数をとる関数
    1. "型a から型b への関数"
    2. "型a に適用されたファンクター値"
- 戻り値は "型b に適用されたファンクター値"

※ Scala でいうと "型a に適用されたファンクター値" というのは f が `Option` , a が `1: Int` だとしたら `Option(1)` ということ

!SLIDE

### 全然分からん

まず何が書いてあるか全然わからないので、 <span class="blue">Functor</span>の型クラスをネタに Haskell について学びます.


!SLIDE

## <small>まずは</small> 関数宣言

hello という名前の String を1つ引数に取って  String を返す関数

```haskell
hello :: String -> String
hello name = "Hello " ++ name
```

ぬまさんにだけ特別な挨拶をしたい

```haskell
hello :: String -> String
hello "numa" = "(⑅ ☞三☞´◔‿ゝ◔`)☞三☞ｼｭｯｼｭｯｼｭｯｼｭ)ﾟдﾟ )つ ぬまさん"
hello name = "Hello " ++ name
```

パターンマッチがそのまま使える

!SLIDE

Int を2つ引数に取って、加算した値を返す関数

```haskell
add2 :: Int -> Int -> Int
add2 x y = x + y
```

空の List を与えるとエラーが発生する sum

```haskell
sumNum :: Num a => [a] -> a
sumNum [] = error "empty!"
sumNum x = sum x
```

※ `Num a => [a] -> a` 数値っぽい型 "a" の リスト"[a]" を取ってその合計を返す

!SLIDE

## 型クラス

- インターフェース
- 実装は型クラスのインスタンスである型が実装する

## ex)

- Eq 型クラスは 等値を比較するインターフェースを定義
- 比較する方法は 各々の型(Int, Stringなど)で定義する

```haskell
class Eq a where
  (==) :: a -> a -> Bool
  (/=) :: a -> a -> Bool
```

!SLIDE

このような信号機のライトの種類を示す型を比較可能にする

```haskell
data TrafficLight = Red | Yellow | Green
```

TrafficLight を型クラスのインスタンスにする

```haskell
instance Eq TrafficLight where
  Red == Red = True
  Green == Green = True
  Yellow == Yellow = True
  _ == _ = False
```

!SLIDE

Functor に戻ります

!SLIDE

## 簡単な Functor の例

# Maybe

- Scala の Option
- Scala -> Haskell
- Some -> Just
- None -> Nothing

```
Prelude> :info Maybe
data Maybe a = Nothing | Just a         -- Defined in `Data.Maybe'
instance Eq a => Eq (Maybe a) -- Defined in `Data.Maybe'
instance Monad Maybe -- Defined in `Data.Maybe'
instance Functor Maybe -- Defined in `Data.Maybe'
instance Ord a => Ord (Maybe a) -- Defined in `Data.Maybe'
instance Read a => Read (Maybe a) -- Defined in `GHC.Read'
instance Show a => Show (Maybe a) -- Defined in `GHC.Show'
```

!SLIDE

## instance

```haskell
instance Functor Maybe where
  fmap f (Just x) = Just (f x)
  fmap f Nothing = Nothing
```
fは (a -> b) な関数

`fmap f (Just x) = Just (f x)` は Just x の x に関数 fを適用して もっかい Just の中に入れて返す


- 確かに箱の中身だけを変更してるっぽい

!SLIDE

## 他にはどんな Functor があるの？

Functor 則を満たせば何でも良い


```
Functor 則 その1: fmap id == id
Functor 則 その2: fmap (f . g) == fmap f . fmap g
```

- `id` は受け取った値をそのまま返す関数

```haskell
id 1
1
id "a"
"a"
```

- . は関数の合成

!SLIDE

### Maybe で Functor 則を試してみる

#### Functor 則 その1

```
> fmap id (Just 2)
Just 2
> id (Just 2)
Just 2
```

#### Functor 則 その2

```
> fmap ((*2) . (*3)) (Just 2)
Just 12
> fmap (*2) (fmap (*3) (Just 2))
Just 12
```

満たしてそう (੭•̀ᴗ•̀)


!SLIDE

### List で Functor 則を試してみる

#### Functor 則 その1

```
> fmap id [1, 2, 3]
[1, 2, 3]
> id [1, 2, 3]
[1, 2, 3]
```

#### Functor 則 その2

```
> fmap ((*2) . (*3)) [1, 2, 3]
[6, 12, 18]
> fmap (*2) (fmap (*3) [1, 2, 3])
[6, 12, 18]
```

満たしてそう (੭•̀ᴗ•̀)

!SLIDE

時間切れ

- Functor は汎用性の高い概念なのでｽｯｷﾘと理解するには脳が足りなかった
- Functor 則を満たしていると何が嬉しいのかをもうちょっと調べたい

### ちなみに

- Functor 則を守っていない Functor のインスタンスを作ることも出来るので注意！
- fmap を定義すれば Functor になれるというわけではない
- fmap は注意深く実装すること

!SLIDE

おわり

