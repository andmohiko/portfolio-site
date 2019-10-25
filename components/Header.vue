<template>
  <header class="header-container">
    <div class="header-logo">
      <a href="https://twitter.com/andmohiko">
        <img src="~/assets/logo.png" alt="logo" />
      </a>
    </div>
    <nav>
      <ul>
        <li>
          <a href="/">TOP</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
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
  padding: 0px 1rem;

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

.header-logo {
  margin: 6px 12px;

  img {
    height: 25px;
  }
}
</style>