<template>
  <div class="footer-container">
    <p>
      <small>© 2019 @andmohiko</small>
    </p>
    <!-- <a href="https://twitter.com/andmohiko">
      <img src="~/assets/twitter.png" alt="twitter" />
    </a>-->
  </div>
</template>

<style scoped lang="scss">
.footer-container {
  height: 80px;
  background-color: #111;
  display: flex;
  justify-content: center;
  // position: relative;
  p {
    line-height: 80px;
    color: #ccc;
    font-size: 12px;
  }

  // img {
  //   position: relative;
  //   top: 50%;
  //   left: 50%;
  //   transform: translateY(-50%) translateX(-50%);
  //   -webkit-transform: translateY(-50%) translateX(-50%);
  // }
}
</style>