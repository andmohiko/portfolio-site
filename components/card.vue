<template>
  <article class="card">
    <nuxt-link :to="{ name: 'blog-slug', params: { slug: slug }}" class="wrapper">
      <h2 class="card_title">{{ title }}</h2>
      <p class="card_date">{{ (new Date(publishedAt)).toLocaleDateString() }}</p>
      <p class="card_text" v-html="$md.render(body.slice(0,150))"></p>
      <h4 class="card_more">＞もっと見る</h4>
    </nuxt-link>
  </article>
</template>

<script>
import markdownIt from "markdown-it";

export default {
  components: {
    markdownIt
  },
  transition: "slide-left",
  props: ["title", "slug", "headerImage", "publishedAt", "body"]
};
</script>

<style scoped lang="scss">
.card {
  width: 95%;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.2);
  border: 0.5px solid rgb(57, 72, 85);
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    color: #fff;
    a {
      color: #fff;
      font-weight: bold;
      text-decoration: none;
      font-size: 14px;
      text-align: right;
    }

    a:hover {
      opacity: 0.7;
    }
  }
}

.wrapper {
  text-decoration: none;
  text-align: center;
  width: 500px;
}
.card_title {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: white;
}
.card_text {
  color: #e1e1e1;
  margin: 10px 0;

  h2 {
    font-size: 3.5rem;
  }
  h3 {
    font-size: 3rem;
  }
  a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    font-size: 14px;
    text-align: right;
  }

  a:hover {
    opacity: 0.7;
  }
}
.card_date {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: right;
}
.card_image {
  max-height: 120px;
  max-width: 250px;
  text-align: center;
}

.card_more {
  h4 {
    color: #fff;
  }
}
</style>