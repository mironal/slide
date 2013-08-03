!SLIDE

# <span class="blue">Scalatra</span>で<span class="red">WebSocket</span>

!SLIDE

# <span class="blue">Scalatra</span>で<span class="red">WebSocket</span>
## に辿りつけなかったので、そこまでのお話

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


# <span class="blue">Scalatra</span>って？

RubyのSinatraっぽく書けるWebFramework.


```scala
class HelloWorldApp extends ScalatraFilter {
  get("/") {
    <h1>Hello, {params("name")}</h1>
  }
}
```

<span class="red">XMLリテラル</span>があるから捗るね！

<span class="v-small">※ちなみにSinatra使ったこと無い／(^o^)＼</span>

!SLIDE

# <span class="blue">Play2</span>と比較して

* コンパクト

<br />

<span class="red">さくっと何かを作るのに良さそう</span>

<br />
<br />

## もちろん本格的なプロジェクトにも

[gitbucket](https://github.com/takezoe/gitbucket)

!SLIDE

# <span class="blue">WebSocket</span>使えるの?

リポジトリに<span class="blue">AtmosphereChat.scala</span>というWebSocketのサンプルが含まれている.


!SLIDE

# <span class="blue">example</span>の実行方法

```sh
# cloneしてくる
git clone git@github.com:scalatra/scalatra.git
# 移動してsbt
cd scalatra
sbt
# sbtの中で
container:start
# ブラウザでアクセス
open localhost:8080
```

!SLIDE

# <span class="blue">example</span>が壊れてたのでﾌﾟﾙﾘｸ

[https://github.com/scalatra/scalatra/commit/39ba4a62de450d2ec22b358d24e9048d2dcec57b](https://github.com/scalatra/scalatra/commit/39ba4a62de450d2ec22b358d24e9048d2dcec57)

<br />

diff

```diff
-  defaultScripts = "/jquery/jquery-1.9.0.js" :: "/assets/js/bootstrap.min.js" :: Nil
+  defaultScripts = "/assets/js/jquery.min.js" :: "/assets/js/bootstrap.min.js" :: Nil
```

!SLIDE

# <span class="blue">Scalatraプロジェクト</span>の作り方

[giter8](https://github.com/n8han/giter8)を使います.

```sh
> g8 scalatra/scalatra-sbt
```

色々聞かれるので適当に答える

```sh
> g8 scalatra/scalatra-sbt
organization [com.example]:
package [com.example.app]:
name [My Scalatra Web App]:
servlet_name [MyScalatraServlet]:
scala_version [2.9.2]:
version [0.1.0-SNAPSHOT]:
```

!SLIDE

# 色々作られる


```
.
├── README.md
├── project
│   ├── build.properties
│   ├── build.scala
│   └── plugins.sbt
├── sbt
└── src
    ├── main
    │   ├── resources
    │   │   └── logback.xml
    │   ├── scala
    │   │   ├── ScalatraBootstrap.scala
    │   │   └── hoge
    │   │       ├── HogeStack.scala
    │   │       └── MyScalatraServlet.scala
    │   └── webapp
    │       └── WEB-INF
    │           ├── templates
    │           │   ├── layouts
    │           │   │   └── default.jade
    │           │   └── views
    │           │       └── hello-scalate.jade
    │           └── web.xml
    └── test
        └── scala
            └── hoge
                └── MyScalatraServletSpec.scala
```

!SLIDE

# 実行方法

```sh
> cd project-dir
> sbt
> container:start
```


!SLIDE


# <span class="blue">eclipse</span>で開発できるようにする

sbt内で

```sh
eclipse
```

と実行すれば、eclipseにimport出来る形になる.

<br />

## <span class="red">が！しかし！</span>

!SLIDE

# 宣言元にジャンプすると...

<img src="sectiona/code-jump.png">

!SLIDE

# Oh... 読めない...

<img src="sectiona/class-file.png">

!SLIDE

# <span class="blue">eclipse</span>で開発できる(ry. <span class="red">その2</span>

sbt内で

```sh
eclipse with-source=true
```

<br />

with-source=trueでライブラリの<span class="red">ソースコードが関連付けされた状態</span>でEclipseのプロジェクトが生成される

<br />

:情報源
[https://github.com/typesafehub/sbteclipse/wiki/Using-sbteclipse](https://github.com/typesafehub/sbteclipse/wiki/Using-sbteclipse)

!SLIDE

# これで宣言元にジャンプできる


<img src="sectiona/src-file.png">

<br />

<span class="red">捗るね！</span>

!SLIDE

# <span class="blue">Scalatra</span>で書いたコードを紹介

<br />

```scala
class HelloWorldApp extends ScalatraFilter {
  get("/") {
    <h1>Hello, {params("name")}</h1>
  }
}
```

!SLIDE

# 簡単なルーティング

```scala
  get("/") {
    <h1>Hello!</h1>
  }

  get("/user/:id") {
    <h1>Id is {params("id")}</h1>
  }
```

[http://www.scalatra.org/2.2/guides/http/routes.html]((http://www.scalatra.org/2.2/guides/http/routes.html)

!SLIDE

# パラメータをOptionで取得

```scala
  // /user?id=10
  get("/user") {
    val opt: Option[String] = params.get("id")

    // idが無かったら400BadRequestを返す
    opt match {
      case Some(id) =>  <h1> ID is {id}</h1>
      case None => halt(400)
    }
  }
```

!SLIDE

# getOrElseでスッキリ

```scala
  // /user?id=10
  get("/user") {
    val id = params.getOrElse("id",halt(400))
    <h1> ID is {id}</h1>
  }
```

!SLIDE

# Hook

```scala
  before(){
    println("before!!!")
  }

  after(){
    println("after!!!")
  }
```

!SLIDE


# 特定の領域だけ


```scala
  before("/user"){
    println("before!!!")
  }

  after("/user"){
    println("after!!!")
  }
```

!SLIDE


# 色々なHTTPメソッド

```scala
  get("/articles/:id") {
  }

  post("/articles") {
  }

  put("/articles/:id") {
  }

  delete("/articles/:id") {
  }
```


!SLIDE

以上!

また別の機会に

* atosphere
* WebSocket
