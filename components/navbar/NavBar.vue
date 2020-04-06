<template>
  <div>
    <div class="container-fluid">
      <div class="container">
        <nav>
          <div class="dImg">
            <nuxt-link to="/">
              <img src="/icon.png" alt />
            </nuxt-link>
          </div>
          <div>
            <ul>
              <nuxt-link to="/ssr">
                <li>SSR</li>
              </nuxt-link>
              <nuxt-link to="/spa">
                <li>SPA</li>
              </nuxt-link>
            </ul>
            <a
              class="icon-link"
              rel="noopener nofollow noreferrer"
              href="https://github.com/maccali/BrainNUXT"
              target="_black"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<style scoped>
.dImg {
  height: 70px;
  width: 70px;
  padding: 8px;
  border-radius: 50%;
}
.dImg img {
  height: 100%;
  width: 100%;
}
.container-fluid {
  display: flex;
  align-items: center;
  height: 70px;
  background-color: #e4e4e4;
}
nav {
  display: flex;
  justify-content: space-between;
}
nav div {
  display: flex;
}
ul {
  display: inline-flex;
  list-style: none;
  padding: 0;
  height: 100%;
}
ul a {
  display: inline-flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  height: 100%;
  font-weight: bold;
}
a {
  margin: 0;
  text-decoration: none;
  color: black;
  transition: all 0.25s;
}
a:hover {
  color: rgb(90, 90, 90);
}
i {
  font-size: 23px;
}
.icon-link {
  display: inline-flex;
  align-items: center;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
