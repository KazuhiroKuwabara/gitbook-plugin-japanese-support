Supplementary Japanese support plugin for GitBook
=================================================

日本語文章の中に改行がある時，HTMLで出力した際に不自然な空白が混入するのを防ぐGitbook用のプラグイン．

Sphinxドキュメンテーションビルダーにおける`japanesesupport.py`を参考に作成．


`npm`を使ってインストールする．

```bash
$ npm install gitbook-plugin-japanese-support
```

`books.json`にプラグインを追加する．

```json
{
  "plugins": ["japanese-support"]
}
```