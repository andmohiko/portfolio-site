<template>
  <div class="footer-container">
    <section class="footer">
      <div class="links">
        <a href="https://twitter.com/andmohiko">
          <img src="~/assets/twitter.png" alt="twitter" />
        </a>
        <a href="https://github.com/andmohiko">
          <img src="~/assets/github.png" alt="github" />
        </a>
      </div>
      <div class="copyright">
        <p>
          <small>© 2020 @andmohiko</small>
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.footer-container {
  background-color: #111;
}
.footer {
  height: 80px;
  background-color: #111;
  display: flex;
  padding: 33px;
  justify-content: space-between;

  max-width: 1000px;
  @media screen and (min-width: 1000px) {
    margin-left: calc(100vw/2 - 500px);
  }
}

.links {
  display: flex;
  justify-content: left;
  align-items: center;

  img {
    height: 22px;
    width: 22px;
    margin-right: 25px;
  }
}

.copyright {
  display: flex;
  justify-content: right;
  align-items: center;

  p {
    line-height: 80px;
    color: #ccc;
    font-size: 12px;
  }
}
</style>