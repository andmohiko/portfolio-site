<template>
  <section class="top-page">
    <div class="top-container" id="top">
      <h1>andmohiko</h1>
      <h2>
        <a href="https://twitter.com/andmohiko">@andmohiko</a>
      </h2>
    </div>

    <div class="about-container" id="about">
      <h2>ABOUT</h2>
    </div>

    <div class="blog-container" id="blog">
      <h2>BLOG</h2>
    </div>

    <div class="portfolio-container" id="portfolio">
      <h2>PORTFOLIO</h2>
    </div>

    <div class="contact-container" id="contact">
      <h2>CONTACT</h2>
    </div>
  </section>
</template>

<script>
import About from "~/components/About.vue";
import Blog from "~/components/Blog.vue";
import Portfolio from "~/components/Portfolio.vue";
import Contact from "~/components/Contact.vue";

import Card from "~/components/card.vue";
import { createClient } from "~/plugins/contentful.js";

const client = createClient();
export default {
  transition: "slide-left",
  components: {
    About,
    Blog,
    Portfolio,
    Contact,
    Card
  },
  data() {
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
.top-container {
  height: 700px;
  width: 100%;
  background-image: url(../assets/bg_top.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-shadow: 0 2px 5px rgba(255, 255, 255, 0.5);

  h1 {
    font-weight: bold;
    font-size: 80px;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 26px;
    position: relative;
    top: 40px;
  }

  a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
  }

  a:hover {
    opacity: 0.7;
  }
}

.about-container {
  height: auto;
}

.blog-container {
  height: auto;
  display: flex;
  flex-wrap: wrap;
}

.card {
  display: flex;
  flex-wrap: wrap;
}

.portfolio-container {
  height: auto;
}

.contact-container {
  height: auto;
}

.index {
  display: flex;
  flex-wrap: wrap;
}
</style>