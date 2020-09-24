<template>
  <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        ぬくすと こんてんと
      </nuxt-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start" />

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="control has-icons-left">
            <input v-model="keyword" class="input" type="text" placeholder="Search">
            <span class="icon is-small is-left">
              <i class="fas fa-search" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      keyword: null
    }
  },
  watch: {
    keyword (value) {
      console.warn(value)
      this.search(value)
    }
  },
  methods: {
    ...mapMutations({ setList: 'articles/setList' }),
    async search (value) {
      const articles = await this.$content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .search(value)
        .fetch()
      console.warn(articles)
      this.setList(articles)
    }
  }
}
</script>
