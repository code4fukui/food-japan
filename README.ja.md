# food-japan

厚生労働省の[食品衛生公開](https://ifas.mhlw.go.jp/faspub/_link.do)で公開されているオープンデータを定期的にダウンロードし、福井県の飲食店営業データを地図表示するサンプルアプリです。

## サンプルアプリ

- [福井レストランマップ](https://code4fukui.github.io/food-japan/sample/restaurant-fukui.html)

## 機能

- 食品衛生公開のオープンデータを定期的にダウンロードする
- 福井県の飲食店営業のデータを抽出し、地図表示するサンプルアプリ

## 必要環境

- Deno

## 使い方

1. Denoをインストールする
2. リポジトリをクローンする
3. `cd deno; deno run -A download.js`を実行してデータをダウンロードする
4. `cd ../sample; deno run -A server.js`を実行してサンプルアプリを起動する

## データ・API

この プロジェクトは、厚生労働省の[食品衛生公開](https://ifas.mhlw.go.jp/faspub/_link.do)で公開されているオープンデータを利用しています。

## ライセンス

MIT License