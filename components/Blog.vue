<template>
  <section class="blog-container">
    <div class="title">
      <h1>BLOG</h1>
    </div>

    <div class="blog-contents">
      <card
        v-for="post in posts"
        v-bind:key="post.fields.slug"
        :title="post.fields.title"
        :slug="post.fields.slug"
        :headerImage="post.fields.headerImage"
        :publishedAt="post.fields.publishedAt"
        :body="post.fields.body"
      />
    </div>
  </section>
</template>

<script>
import Card from "~/components/Card.vue";
import { createClient } from "~/plugins/contentful.js";

const client = createClient();
export default {
  props: ["title", "slug", "headerImage", "publishedAt", "body"],
  transition: "slide-left",
  components: {
    Card
  },
  data: function() {
    return {
      posts: ""
    };
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
.blog-container {
  height: auto;
  width: 100%;
  // background-image: url(../assets/bg_blog.jpg);
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center;
  background-color: rgba(0, 0, 0, 0.9);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  h2 {
    font-weight: bold;
    font-size: 30px;
    margin: 40px;
    // text-shadow: 0 2px 5px rgba(255, 255, 255, 0.5);
  }
  a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    font-size: 14px;
  }
  a:hover {
    opacity: 0.7;
  }
}

.blog-contents {
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>