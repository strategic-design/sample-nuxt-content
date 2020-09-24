---
title: 3番目につくった
tags: [なんやて]
---

# 3 番目

createdAt って何でみてんの?w

## code sample

```php
if (true === true) {
    echo "phpサンプルてすつ";
}
```

## js

```js
export const state = () => ({
  keyword: null,
  list: []
});

export const actions = {
  search({ commit, state, $content }, keyword) {
    // todo
    console.warn($content);
  }
};

export const mutations = {
  setList(state, list) {
    state.list = list;
  }
};

export const getters = {
  list: state => {
    return state.list;
  }
};
```
