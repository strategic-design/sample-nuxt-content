<template>
  <div>
    <h1 class="title is-3">
      {{ article.title }}
    </h1>

    <div class="tags has-addons">
      <span v-for="(tag, key) in article.tags" :key="key" class="tag" :class="tagColor(key)">{{ tag }}</span>
    </div>

    <nuxt-content :document="article" class="markdown-body" />

    <pre v-if="$route.params.slug === 'dataCheck'">{{ article }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content(`articles/${params.slug}`).fetch()
    return { article }
  },
  methods: {
    tagColor (index) {
      if (index % 2 === 0) {
        return 'is-dark'
      }
      return 'is-black'
    }
  }
}
</script>
