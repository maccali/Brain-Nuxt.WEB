<template>
  <div>
    <section class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <blockquote cite="https://github.com/maccali/BrainNUXT">
                <i>Hello!, I`m a BrainNuxt is a Boilerplate based in NuxtJS</i>
              </blockquote>
            </div>
            <div class="col-12">
              <div class="card">
                <i>See more about me, in my repository</i>
              </div>
            </div>
            <div class="col-12">
              <div class="card">
                <a
                  rel="noopener nofollow noreferrer"
                  href="https://github.com/maccali/BrainNUXT"
                  target="_black"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.container-fluid {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #f5f5f5;
}
.card {
  display: flex;
  justify-content: center;
  margin-top: 12px;
  margin-bottom: 12px;
}
i {
  font-size: 15px;
}
blockquote i {
  font-size: 20px;
}
.fab {
  font-size: 25px;
  color: black;
  transition: all 0.2s;
}
.fab:hover {
  transform: scale(1.2);
}
</style>
