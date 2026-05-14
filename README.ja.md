# food-japan

厚生労働省の[食品衛生オープン](https://ifas.mhlw.go.jp/faspub/_link.do)で公開されているすべてのCSVオープンデータをダウンロードするプログラム、およびオープンデータのサンプルアプリケーションです。

## サンプルアプリケーション

- [福井飲食店マップ](https://code4fukui.github.io/food-japan/sample/restaurant-fukui.html)

## 要件

なし。

## 使い方

1. リポジトリをクローンします: `git clone https://github.com/code4fukui/food-japan.git`
2. `deno`ディレクトリに移動します: `cd food-japan/deno`
3. ダウンロードスクリプトを実行します: `deno run -A download.js`

データは`../data/latest`および`../data/[YYYYMM]`ディレクトリにダウンロードされます。

## データ / API

本プロジェクトは、厚生労働省の[食品衛生オープン](https://ifas.mhlw.go.jp/faspub/_link.do)サイトで公開されているオープンデータを利用しています。

## ライセンス

MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
