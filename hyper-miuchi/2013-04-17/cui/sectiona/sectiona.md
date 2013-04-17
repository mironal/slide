!SLIDE

# CUI

1. 環境構築
2. vim
3. git
4. tmux


!SLIDE

# 1. 環境構築

[こちら](https://docs.google.com/presentation/d/10xdTbBoIY6h5Qaunz_t9-uacdR9mWD0b6ObIXdgZwOM/pub?start=false&loop=false&delayms=3000#slide=id.p)

!SLIDE

# 2. Vim


## NeoBudleVim

さっきのｱﾚ

プラグイン管理マネージャ

Ubuntuで言う所のapt-get

!SLIDE

# 2. Vim

テキストオブジェクト

## 選択系

<p class="blue">vit</p>

<p class="blue">vat</p>

<br />
v: visual(選択)

i: inner

a: all

t: tag

!SLIDE

# 2. Vim

テキストオブジェクト

## 削除

<p class="blue">dit</p>
<p class="blue">dat</p>

<br />

d: delete

直ぐに編集したいときは

<p class="blue">cit</p>
<p class="blue">cat</p>

c: 削除して編集

!SLIDE

## タグ以外にも色々操作できる

<span class="blue">di(</span>
で括弧の内側を削除

<span class="blue">di"</span>
でダブルコーテーションの内側を削除

<span class="blue">diw</span>
で単語を削除

w:word

他にも色々。組み合わせ無限大！

!SLIDE

# 2. Vim

surround.vim

良い感じに囲める奴

デモします

<p class="blue">ysst</p>

<p class="blue">Shift + s</p>

<p class="blue">dst</p>


!SLIDE

# 3. git

## .gitconfig

```sh
[merge]
  ff = false
```

でグラフをウニョウニョさせよう

## .oh-my-zshのgitﾌﾟﾗｷﾞﾝでエイリアスを使おう

```sh
g=git
ga='git add'
gb='git branch'
gba='git branch -a'
gc='git commit -v'
'gc!'='git commit -v --amend'
gca='git commit -v -a'
'gca!'='git commit -v -a --amend'
gcl='git config --list'
gcm='git checkout master'
gco='git checkout'
gcount='git shortlog -sn'
gcp='git cherry-pick'
gd='git diff'
gf='git ls-files | grep'
ggpnp='git pull origin $(current_branch) && git push origin $(current_branch)'
ggpull='git pull origin $(current_branch)'
ggpush='git push origin $(current_branch)'
git-svn-dcommit-push='git svn dcommit && git push github master:svntrunk'
gl='git pull'
glg='git log --stat --max-count=5'
glgg='git log --graph --max-count=5'
glgga='git log --graph --decorate --all'
gm='git merge'
gp='git push'
gpoat='git push origin --all && git push origin --tags'
gr='git remote'
grh='git reset HEAD'
grhh='git reset HEAD --hard'
grmv='git remote rename'
grrm='git remote remove'
grset='git remote set-url'
grt='cd $(git rev-parse --show-toplevel || echo ".")'
grup='git remote update'
grv='git remote -v'
gsd='git svn dcommit'
gsr='git svn rebase'
gss='git status -s'
gst='git status'
gup='git pull --rebase'
gwc='git whatchanged -p --abbrev-commit --pretty=medium'
```

!SLIDE

# 4. tmux

<span class="blue">蝶のように舞い蜂のように刺す</span>
