<template>
  <section class="header">
  <header class="header-container">
    <h1 class="header-logo">
      <a href="https://twitter.com/andmohiko">
        <img src="~/assets/logo.png" alt="andmohiko" />
      </a>
    </h1>
    <nav>
      <ul>
        <li>
          <a href="/">TOP</a>
        </li>
        <li>
          <a href="/blog">BLOG</a>
        </li>
        <li>
          <a href="/portfolio">PORTFOLIO</a>
        </li>
      </ul>
    </nav>
  </header>
  </section>
</template>

<style scoped lang="scss">
.header-container {
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 90px;
  line-height: 90px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0px 30px;
  @media screen and (min-width: 1000px) {
    width: 1000px;
    margin-left: calc(100vw/2 - 500px);
  }

  ul {
    display: flex;
  }
  li {
    margin-left: 4rem;
    list-style-type: none;
  }
  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.2rem;
  }
  a:hover {
    opacity: 0.7;
  }
}

// .header {
  // width: 1000px;
  // @media screen and (min-width: 1000px) {
    // width: 1000px;
    // margin-left: calc(100vw/2 - 500px);
    // margin-right: calc(100vw/2 - 500px);
//   }
// }

.header-logo {
  margin: 6px 0;

  img {
    height: 25px;
  }
}

@media screen and (max-width: 750px) {
  .header-container {
    padding: 0;
    justify-content: center;
    li {
      margin-left: 1.5rem;
    }
  }
  .header-logo {
    img {
      display: none;
    }
  }
}
</style>