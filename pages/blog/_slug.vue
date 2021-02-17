<template>
  <section class="blog-content-container">
    <div class="blog-bg">
      <div class="blog">
        <p class="blog-date">{{ (new Date(post.fields.publishedAt)).toLocaleDateString() }}</p>
        <h1 class="blog-title">{{ post.fields.title }}</h1>
        <img
          v-if="post.fields.headerImage"
          class="blog-headerImage"
          :src="post.fields.headerImage.fields.file.url"
        />
        <div class="slug_body" v-html="$md.render(post.fields.body)"></div>
      </div>
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
  head() {
    return {
      title: this.post.fields.title
    }
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
  },
	mounted() {
		Prism.highlightAll()
	}
};
</script>

<style scoped lang="scss">
.blog-content-container {
  padding: 90px 2rem 2rem 2rem;

  @media screen and (max-width: 850px) {
    padding: 90px 0 0 0;
  }
}

.blog-bg {
  display: flex;
  justify-content: center;

  max-width: 780px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #f2f2f2;
  box-shadow: 0 0 3px #dedddd;
}

.blog {
  max-width: 720px;
  width: 100%;
  padding: 6%;

  &-date {
    margin-top: 20px;
    font-size: 1rem;
    color: #777777;
    text-align: left;
  }

  &-title {
    margin: 40px 0;
    font-size: 2.5rem;
    font-weight: bolder;
    line-height: 3.5rem;
    color: #333333;
  }

  &-headerImage {
    max-width: 100%;
    margin-bottom: 60px;
  }
}

.slug_body {
  color: #333333;

  pre {
	/* white-space: pre-wrap; */
    overflow-x:scroll;
  }
}
</style>
