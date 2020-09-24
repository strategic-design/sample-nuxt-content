<template>
  <div>
    <h1 class="title is-3">
      Search
    </h1>

    <div class="tags has-addons">
      <span class="tag is-dark">タイプ</span>
      <span class="tag is-light">{{ type }}</span>
      <span class="tag is-dark">キーワード</span>
      <span class="tag is-light">{{ value }}</span>
    </div>

    <div v-for="(article, key) in list" :key="key" class="notification" @click="$router.push(article.path)">
      <h5 class="title is-5">
        {{ article.title }}
      </h5>
      {{ article.createdAt }}
    </div>

    <div v-if="!list.length" class="notification is-warning">
      該当する記事がありません
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ route, $content }) {
    const type = route.params.type
    const value = route.params.value
    if (!type || !value) {
      return { list: [] }
    }

    const result = { type, value }

    // tag
    if (type === 'tag') {
      const articles = await $content('articles')
        .sortBy('createdAt', 'desc')
        .where({
          tags: { $contains: value }
        })
        .fetch()

      result.list = articles
      return result
    }

    // keyword
    const articles = await $content('articles')
      .sortBy('createdAt', 'desc')
      .search(value)
      .fetch()

    result.list = articles
    return result
  },
  methods: {
    async searchTag (tag) {
      const articles = await this.$content('articles')
        .sortBy('createdAt', 'desc')
        .where({
          tags: { $contains: tag }
        })
        .fetch()
      this.setSearchList(articles)
    }
  }
}
</script>

<style scoped>
.notification {
  cursor: pointer;
}
.notification:hover {
  color: #3273dc;
}
</style>
