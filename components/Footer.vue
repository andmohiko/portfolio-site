<template>
  <div class="footer-container">
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
        <small>© 2019 @andmohiko</small>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-container {
  height: 80px;
  background-color: #111;
  display: flex;
  // flex-direction: row;
  padding: 2rem;
  justify-content: space-between;
  // position: relative;

  //   top: 50%;
  //   left: 50%;
  //   transform: translateY(-50%) translateX(-50%);
  //   -webkit-transform: translateY(-50%) translateX(-50%);
}

.links {
  display: flex;
  justify-content: left;
  align-items: center;

  img {
    height: 22px;
    width: 22px;
    margin-right: 20px;
    //   position: relative;
    //   top: 50%;
    //   left: 50%;
    //   transform: translateY(-50%) translateX(-50%);
    //   -webkit-transform: translateY(-50%) translateX(-50%);
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