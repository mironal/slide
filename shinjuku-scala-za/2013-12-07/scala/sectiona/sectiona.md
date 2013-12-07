!SLIDE

# Github の issue を見やすい何かをつくる

## 妄想中

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

# 祝 ✩*⋆¸¸.•*¨*꒰⁎˃ ॢꇴ ॢ˂⁎꒱*¨*•.¸¸⋆*✩

## 会社作りました (੭ु´͈ ᐜ `͈)੭ु⁾⁾

<br />

<span class="red">合同会社コベリン</span>

[http://covelline.com](http://covelline.com)

<br />

## ｵ❣ヾ(῀ ⚙⌄⚙ ῀)ﾉ"ｨｨﾈ❣

!SLIDE

### Github の issue を見やすい何かをつくる

## <span class="blue">背景</span>

1. 会社でgithubのissueを使いまくっている
2. 色々要望が出てきた
3. 内製しよう！
4. あわよくば公開しよう！


!SLIDE

## <span class="blue">githubのissueを使ってて思うこと</span>

1. 見づらい
2. 作りづらい
3. 管理しづらい

<br />

※ Githubで閉じたいのでredmineとかを使う予定は今のところ考えていない

!SLIDE

## <span class="blue">要望イロイロ</span>

- issueの親子関係を簡単に作りたい
- issueを階層化して表示したい
- 他のissueを見ながらissueを作りたい
    - 2ペインで表示
    - D&Dで親子関係作成
- 時間的なものも集計したい

などなど...

!SLIDE

### <span class="blue">issueを階層表示したい</span>

<img src="sectiona/issue_list.png">

!SLIDE

### <span class="blue">issue作る時に他のissueを見たい</span>

<img src="sectiona/new_issue.png">

!SLIDE

### <span class="blue">issue作る画面のイメージ</span>

2ペーンでいい感じ

```
issueの一覧    |      issueの詳細 or issueの作成画面
               |
親issue1       |
  |- 子issue1  |
  |- 子issue2  |
  |- 子issue3  |
親issue2       |
  |- 子issue1  |
後でやるissue2 |
  |- 子issue1  |
  |- 子issue2  |
               |
```

!SLIDE

## <span class="blue">どんなものを作るのか</span>

1. さっきの要望に応える奴 +
2. ローカルとリモートの概念(Gitっぽい)
    - 各々ローカルで起動してブラウザでアクセス
    - 自前でサーバを持つのが面倒くさい
    - githubトラブル率 ＜ 自前鯖トラブル率
    - github落ちていてもissueが見れる

が出来ると楽しそう.

!SLIDE

## <span class="blue">構成</span>

せっかくなのでScalaで

- WebFrameworkは skinny framework
- 通信はDispatch

!SLIDE

## <span class="blue">skinny framework</span>

<br />

日本人の @seratch が開発している Scalatra をベースとしたFramework

<br />

[https://github.com/skinny-framework/skinny-framework](https://github.com/skinny-framework/skinny-framework)

まだ全然触れてないので、これからイロイロやってみます.

!SLIDE

## <span class="blue">skinny 小話</span>

1. 昨日 skinny-framework を試す
2. サンプルが動かない(☝◞‸◟)☝
3. @seratchさんに報告する
4. <span class="red">"ついさっき直したバージョンをリリースしました"</span>との返信
5. 凄いスピード感 =͟͟͞͞(๑•̀=͟͟͞͞(๑•̀д•́=͟͟͞͞(๑•̀д•́๑)=͟͟͞͞(๑•̀д•́

※ おそらく3 でメールを書いているうちに直ったらしい

!SLIDE

## <span class="blue">Dispatch</span>

<br />

ScalaのHTTP Client ライブラリ

<br />

[https://github.com/dispatch/reboot](https://github.com/dispatch/reboot)


```scala
val svc: Req = url("https://api.github.com/user/repos") <:< Map("Authorization" ->"token 762228d5ab09808b1f025fd71c46db1c67b1f407")
val f = Http(svc OK as.String)

  f.onComplete{
    case Success(resp) => println(resp)
      case Failure(t) => println(t)
er/repos") <:< Map("Authorization" ->"token 762228d5ab09808b1f025fd71c46db1c67b1f407")
val f = Http(svc OK as.String)
```

!SLIDE

## <span class="blue">進捗</span>

一晩で作ったのでとりあえずissueが取得できるところまで (ヽ'ω`)

[localhost:8080](localhost:8080)

