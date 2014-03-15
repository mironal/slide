!SLIDE

# Scala と Haskell

## 怖くなれない

!SLIDE

## [@mironal -> 山口勝也](https://twitter.com/mironal) <span class="v-small blue">covelline, LLC.</span>

<img src="http://mironal.github.io/images/twitter_icon.jpeg" width="200">

<br />

[Blog -> http://mironal-memo.blogspot.jp](http://mironal-memo.blogspot.jp)

[Flickr -> http://www.flickr.com/photos/mironal](http://www.flickr.com/photos/mironal)

[GitHub -> https://github.com/mironal](https://github.com/mironal)

[勉強会の資料達 -> http://mironal.github.io](http://mironal.github.io)

!SLIDE

## <span class="blue">1月 (前回)</span>

# 祝 ✩*⋆¸¸.•*¨*꒰⁎˃ ॢꇴ ॢ˂⁎꒱*¨*•.¸¸⋆*✩

## <span class="blue">アプリ リリース</span> (੭ु ›ω‹ )੭ु⁾⁾♡

<br />

<a href="http://covelline.com/feather/"><img src="sectiona/feather_banner.jpg" width="1000"></a>


!SLIDE

# 祝 ✩*⋆¸¸.•*¨*꒰⁎˃ ॢꇴ ॢ˂⁎꒱*¨*•.¸¸⋆*✩

## SNS カテゴリ <span class="red">1位</span> (੭•̀ᴗ•̀)

<img src="sectiona/feather.JPG" width="400">


!SLIDE

## 本題: Scala と Haskell


1. Haskell も勉強しとくといいらしいぞ！
2. すごいH本を買った
3. 途中まで読んだ
4. 放置
5. 重い腰が上がりかけている <- <span class="red">ｲﾏｺｺ</span>


!SLIDE

<img src="sectiona/haskell.jpg" width="400">

!SLIDE

## 最初から読みなおす

- 10/15 章まで読んだ気がしたけど、最初から
- 新宿Scala座のある日の午前中に読む!
- 1000回目あたりで読み終わるのでは？

!SLIDE

## おそらく今日は...

- 環境構築

- 基本的な文法をおさらい

Haskell のコードを読んだことがない人を対象とするぐらい初歩的なやつ


!SLIDE

## 環境構築

Mac なら

```
brew update
brew install ghc
brew install haskell-platform
```

<br />

30分ぐらいかかる₍₍ (ง ˙ω˙)ว ⁾⁾

<span class="v-small">ghc: The Glasgow Haskell Compiler </span>


!SLIDE

## インタプリタの起動

Scala の REPL と同じようにコンソール上で色々実行できるインタプリタがある.

```sh
ghci
```

と実行すると起動する.


!SLIDE

## 関数の実行


```haskell
Prelude> 1 + 2
3
```


```haskell
Prelude> succ 1
2
Prelude> succ 4
5
```

1 + 2 も関数を実行しているの?

!SLIDE

<span class="red">+</span> と言うのは2つの引数を受け取り <br />
それらを加算する<span class="red">中置関数</span>です.

<br />

ちなみに関数界隈では <br />
<span class="blue">関数を実行する</span> というよりも<br />
<span class="blue">関数を適用する</span>という言い方をします


!SLIDE

## 中置関数? と 前置関数?

### 中置関数

```haskell
引数1 関数名 引数2
1 + 2

```

### 前置関数

```haskell
関数名 引数 ...
succ 1
div 2 1
```

!SLIDE

## 前置関数 -> 中置関数


`div 2 1` は `1/2` なのか ` 2/1` なのか分かり難い...

なので

```haskell
2 `div` 1
```

とも書ける.

※ div は2つの整数を除算を行う関数


!SLIDE

## 中置関数 -> 前置関数?

```haskell
Prelude> (+) 1 2
```

<span class="v-small">間違ってるかもしれないけど</span>

これは部分適用を利用していて、詳細に書くと

```haskell
Prelude> (((+) 1) 2)
```

ということをしていて、

関数 "+" に "1" を部分適用した関数に "2" を適用している


!SLIDE

## 時間切れなのでおわり  ⁝(ृʾ́꒳ʿ̀ ृ　)ु⁝

<br />

Scala と Haskell の書き方の違いを比較とかしたかったけど、そこまでいけなかった...

<br />

次回は関数定義の方法とかをやりたい...

!SLIDE


## 突然の宣伝

<span class="v-small">この前、おじゃまさせてもらったのですが、異空間で面白かったです</span>

<img  src="sectiona/tento-banner-1.gif" width="800">

<span class="blue">日本初の小中学生向け</span> <br />
ICT/プログラミング学習機関

[http://www.tento-net.com/](http://www.tento-net.com/)

講師募集中！！

