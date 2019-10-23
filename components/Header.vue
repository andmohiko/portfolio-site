<template>
  <header class="header-container">
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
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0px 20px;

  ul {
    display: flex;
  }
  li {
    margin-left: 20px;
    list-style-type: none;
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
  img {
    height: 25px;
  }
}
</style>