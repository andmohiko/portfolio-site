<template>
  <article class="card">
    <nuxt-link :to="{ name: 'blog-slug', params: { slug: slug }}" class="wrapper">
      <div class="card_image_container">
        <img class="card_image" v-bind:src="headerImage.fields.file.url" />
      </div>
      <div class="card_title_container">
        <h1 class="card_title">{{ title }}</h1>
      </div>
      <div class="card_date_container">
        <p class="card_date">{{ (new Date(publishedAt)).toLocaleDateString() }}</p>
      </div>
      <!-- <p class="card_text">{{ body.slice(0,350) }}</p> -->
      <!-- <p class="card_text">{{ v-html="$md.render(body.slice(0,100))" }}</p> -->
      <!-- <div class="card_text" v-html="$md.render(body.slice(0,300))"></div> -->
    </nuxt-link>
  </article>
</template>

<script>
import markdownIt from "markdown-it";
export default {
  components: {
    markdownIt
  },
  props: ["title", "slug", "headerImage", "publishedAt", "body"]
};
</script>

<style scoped lang="scss">
.card {
  width: 400px;
  height: 400px;
  margin: 10px;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.2);
  border: 0.5px solid rgb(57, 72, 85);
  border-radius: 5px;

  // display: flex;
  // flex-direction: row;
  // justify-content: center;
  // align-items: center;
}
// @media screen and (max-width: 800px) {
//   .card {
//     width: 100%;
//   }
// }
.wrapper {
  text-decoration: none;
}
.card_image_container {
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.card_title_container {
  height: 75px;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // text-align: center;
  h1 {
    margin: 0;
  }
}
.card_date_container {
  height: 25px;
  line-height: 25px;
}
.card_image {
  overflow: hidden;

  width: 350px;
  text-align: center;
}
.card_title {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
  text-align: center;
}
.card_text {
  color: rgb(189, 197, 203);
  margin: 10px 0;
}
.card_date {
  font-size: 1rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  text-align: right;
}
</style>