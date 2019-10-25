<template>
  <section class="blog-content-container">
    <div class="slug">
      <p class="slug_date">{{ (new Date(post.fields.publishedAt)).toLocaleDateString() }}</p>
      <h1 class="slug_title">{{ post.fields.title }}</h1>
      <img class="slug_image" v-bind:src="post.fields.headerImage.fields.file.url" />
      <div class="slug_body" v-html="$md.render(post.fields.body)"></div>
    </div>
  </section>
</template>

<script>
import markdownIt from "markdown-it";
import { createClient } from "~/plugins/contentful.js";

const client = createClient();
export default {
  transition: "slide-left",
  components: {
    markdownIt
  },
  async asyncData({ env, params }) {
    return await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        "fields.slug": params.slug,
        order: "-sys.createdAt"
      })
      .then(entries => {
        return {
          post: entries.items[0]
        };
      })
      .catch(console.error);
  }
};
</script>

<style scoped lang="scss">
.blog-content-container {
  padding: 4rem;
  background-color: #f6f6f6;
}

.slug {
  max-width: 800px;
  margin: 0 auto;
  padding: 5%;
  background-color: #ffffff;
  box-shadow: 0 0 10px #e9e9e9;
}

.slug_date {
  margin-top: 20px;
  font-size: 1rem;
  color: #777777;
  text-align: left;
}

.slug_title {
  margin: 20px 0;
  font-size: 2.5rem;
  font-weight: bolder;
  line-height: 3rem;
  color: #333333;
}

.slug_image {
  max-width: 100%;
  margin-bottom: 60px;
}
</style>