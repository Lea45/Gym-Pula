<template>
  <div id="app">
    <div>
      <img class="title-image" src="images/title.svg" alt="title" />
    </div>
    <div id="nav">
      <router-link to="/">Početna</router-link> |
      <router-link to="/programs">Programi</router-link> |
      <router-link to="/about">O nama</router-link> |
      <router-link to="/advicess">Savjeti</router-link> |
      <router-link to="/contact">Kontakt</router-link> |
      <router-link to="/login">Prijava</router-link>
    </div>
    <div id="content-wrap">
      <router-view />
    </div>
    <footer>
      <div class="divfooter">
        <ul class="ulfooter">
          <li class="lifooter"><a href="https://twitter.com">Twitter</a></li>
          <li class="lifooter">
            <a href="mailto:varzic.lea@gmail.com">Email</a>
          </li>
          <li class="lifooter">
            <a href="https://www.instagram.com/varziclea">Instagram</a>
          </li>
          <li class="lifooter">
            <a
              href="https://github.com/varziclea/lea-kristijan-vue-app-template"
              >Github</a
            >
          </li>
          <li class="lifooter">
            <p>👋</p>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "@/css/index";
@import "@/css/login";

$footer-width: 150px;

#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#content-wrap {
  padding-bottom: $footer-width; /* Footer height */
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: $footer-width; /* Footer height */
}
</style>
