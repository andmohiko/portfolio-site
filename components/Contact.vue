<template>
  <section class="contact">
    <h2>CONTACT</h2>
    <a href="https://twitter.com/andmohiko">
      <img src="../assets/twitter.png" alt="twitter" />
    </a>
  </section>
</template>

<style scoped lang="scss">
.contact {
  height: 250px;
  background-image: url(../assets/bg_contact.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-shadow: 0 2px 5px rgba(255, 255, 255, 0.5);

  h2 {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 60px;
  }
}
</style>