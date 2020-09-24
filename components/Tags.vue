<template>
  <div class="tags">
    <a v-for="(tag,key) in tags" :key="key" class="tag is-dark" @click="$router.push('/search/tag/' + tag)">
      {{ tag }}
    </a>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      tags: []
    }
  },
  computed: {
    ...mapGetters({ articles: 'articles/list' })
  },
  async mounted () {
    const articles = await this.$content('articles')
      .only(['tags'])
      .sortBy('createdAt', 'asc')
      .fetch()
    for (let i = 0; i < articles.length; i++) {
      const article = articles[i]
      if (!article.tags) {
        continue
      }

      article.tags.forEach((tag) => {
        if (!this.tags.includes(tag)) {
          this.tags.push(tag)
        }
      })
    }
  },
  methods: {
    ...mapMutations({
      setSearchList: 'articles/setSearchList'
    })
  }
}
</script>
