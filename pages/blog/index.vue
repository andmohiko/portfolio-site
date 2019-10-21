<template>
  <section class="blog-page">
    <div class="blog-container" id="blog">
      <Blog />
      <section class="index">
        <card
          v-for="post in posts"
          v-bind:key="post.fields.slug"
          :title="post.fields.title"
          :slug="post.fields.slug"
          :headerImage="post.fields.headerImage"
          :publishedAt="post.fields.publishedAt"
        />
      </section>
    </div>
  </section>
</template>

<script>
import Blog from "~/components/Blog.vue";
import Card from "~/components/card.vue";
import { createClient } from "~/plugins/contentful.js";

const client = createClient();
export default {
  transition: "slide-left",
  components: {
    Blog,
    Card
  },
  data: function() {
    return {
      posts: ""
    };
  },
  // data: function() {
  //   return {
  //     posts: {
  //       async asyncData({ env, params }) {
  //         return await client
  //           .getEntries({
  //             content_type: env.CTF_BLOG_POST_TYPE_ID,
  //             order: "-fields.publishedAt"
  //           })
  //           .then(entries => {
  //             return {
  //               posts: entries.items
  //             };
  //           })
  //           .catch(console.error);
  //       }
  //     }
  //   };
  // },
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
  display: flex;
  flex-wrap: wrap;
  height: 700px;
}

.card {
  display: flex;
  flex-wrap: wrap;
}

.index {
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>