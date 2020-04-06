<template>
  <div>
    <section class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <p><b>Your Ip Is:</b> {{ ip }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.container-fluid {
  background-color: #fdfdfd;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
}
p {
  font-size: 18px;
}
</style>
<script>
export default {
  props: {
    ip: {
      type: String,
      default: ''
    }
  }
}
</script>
