<template>
  <div>
    <div v-for="(article,key) in articles" :key="key">
      <nuxt-link :to="article.path">
        {{ article.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters({ articles: 'articles/list' })
  },
  async mounted () {
    const articles = await this.$content('articles')
      .sortBy('createdAt', 'asc')
      .fetch()
    this.setList(articles)
  },
  methods: {
    ...mapMutations({ setList: 'articles/setList' })
  }
}
</script>
