<template>
  <section class="slug">
    <h1 class="slug_title">{{ post.fields.title }}</h1>
    <p class="slug_date">{{ (new Date(post.fields.publishedAt)).toLocaleDateString() }}</p>
    <img class="slug_image" v-bind:src="post.fields.headerImage.fields.file.url" />
    <div v-html="$md.render(post.fields.body)"></div>
    <p class="slug_body">{{ post.fields.body }}</p>
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
  data() {
    return {
      content: "# Hello World!"
    };
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
.slug {
  max-width: 800px;
  margin: 0 auto;
}

.slug_title {
  margin-top: 80px;
  font-size: 2rem;
  font-weight: bolder;
}

.slug_image {
  max-width: 100%;
}

.slug_date {
  font-size: 1rem;
  color: rgb(57, 72, 85);
  text-align: right;
}

.v-html {
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1rem;
  }
}
</style>