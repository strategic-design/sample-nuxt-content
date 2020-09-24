---
title: タグを検索する
tags: [なんやて]
---

## nuxt-content 公式 見てもわからんのだが?

なんでや

## LokiJS

nuxt-content の query は [LokiJS](https://github.com/techfort/LokiJS/wiki) を使っているらしいのでそちらを見るとわかるらしい

## 具体的にこう書く

```js
await this.$content("articles")
  .where({ tags: { $contains: "タグ名" } })
  .fetch();
```
