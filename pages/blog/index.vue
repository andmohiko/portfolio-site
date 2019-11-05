<template>
  <section class="blog-page">
    <div class="title">
      <h1>BLOG</h1>
    </div>
    <div class="blog-content">
      <card
        v-for="post in posts"
        v-bind:key="post.fields.slug"
        :headerImage="post.fields.headerImage"
        :title="post.fields.title"
        :body="post.fields.body"
        :slug="post.fields.slug"
        :publishedAt="post.fields.publishedAt"
      />
    </div>
  </section>
</template>

<script>
import Card from "~/components/card.vue";
import { createClient } from "~/plugins/contentful.js";

const client = createClient();
export default {
  transition: "slide-left",
  components: {
    Card
  },
  async asyncData({ env, params }) {
    return await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-fields.publishedAt"
      })
      .then(entries => {
        return {
          posts: entries.items
        };
      })
      .catch(console.error);
  }
};
</script>

<style scoped lang="scss">
.blog-page {
  min-height: calc(100vh - 80px);
  width: 100%;
  padding: 100px 30px 30px 30px;

  background-image: url(../../assets/bg-blog-min.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  color: #fff;
}

.title {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 2.2rem;
    margin: 1.5rem 0 4rem 0;
    text-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
  }
}

.blog-content {
  display: flex;
  flex-wrap: wrap;
  // flex-direction: row;
  justify-content: center;
}

.card {
  flex-direction: row;
  margin: 10px;
}
</style>