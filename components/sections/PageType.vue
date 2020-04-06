<template>
  <div>
    <section class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <p>
                You are in a
                <b>{{ type }}</b> page.
              </p>
              <i>
                Disable JavaScript and test it
              </i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.container-fluid {
  background-color: #f9f9f9;
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
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
