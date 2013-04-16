case class Talk(name: String, title: String, timeMin: Int) {
    override def toString = {
        s"$name : $title : $timeMin 分"
    }
}

scala.util.Random.shuffle(
    Talk("ｷｬﾒﾁｬﾝ", "画像フィルタ入門", 40) ::
    Talk("mtmta", "iPhone アプリのライブコーディング", 40) ::
    Talk("ｸｿｼｰ", "ゲーム機のユーザーインターフェースの歴史について", 15) ::
    Talk("mironal", "Scala入門 クラス編", 40) ::
    Talk("mironal", "CUIなｱﾚ", 15) ::
    Talk("mironal", "arduinodeの紹介", 10) ::
    Nil
).foreach(println)
