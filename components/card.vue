<template>
  <article class="card">
    <nuxt-link :to="{ name: 'blog-slug', params: { slug: slug }}" class="wrapper">
      <img class="card_image" v-bind:src="headerImage.fields.file.url" />
      <h1 class="card_title">{{ title }}</h1>
      <p class="card_text">{{ body }}</p>
      <p class="card_date">{{ (new Date(publishedAt)).toLocaleDateString() }}</p>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: ["title", "slug", "headerImage", "publishedAt", "body"]
};
</script>

<style scoped>
.card {
  width: 300px;
  height: 200px;
  background-color: rgba(255, 255, 255);
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.2);
  border: 0.5px solid rgb(57, 72, 85);
  padding: 10px 20px;
  margin: 10px 10px;
}
.wrapper {
  text-decoration: none;
}
.card_title {
  font-size: 1.2rem;
}
.card_text {
  color: rgb(57, 72, 85);
  margin: 10px 0;
}
.card_date {
  font-size: 0.7rem;
  color: rgb(57, 72, 85);
  text-align: right;
}
.card_image {
  max-height: 100px;
}
</style>