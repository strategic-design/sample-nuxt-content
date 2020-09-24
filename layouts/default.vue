<template>
  <div class="all">
    <Navbar />
    <section class="section base">
      <div class="container">
        <div class="columns">
          <div class="column is-one-quarter menu">
            <h4 class="title is-4">
              記事一覧
            </h4>
            <Articles />

            <h4 class="title is-4 mt-md">
              タグ一覧
            </h4>
            <Tags />
          </div>
          <div class="column">
            <Nuxt />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Articles from '~/components/Articles'
import Tags from '~/components/Tags'
export default {
  components: {
    Navbar,
    Articles,
    Tags
  }
}
</script>

<style>
html,
body,
#__nuxt,
#__layout,
.all,
.section.base,
.section.base > .container,
.section.base > .container > .columns
{
  height: 100%;
}
.nuxt-content [aria-hidden] {
  display:none;
}

.column.menu {
  background-color: #f3f3f3;
}

.mt-sm {
  margin-top: 1rem;
}
.mt-md {
  margin-top: 2rem;
}

</style>
