<template>
  <div>
    <section class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div v-if="!err">
                <div v-if="use" class="coords">
                  <b>Your Coordinates are:</b>
                  <div>Longitude: {{ lng }}</div>
                  <div>Latitude: {{ lat }}</div>
                </div>
                <div v-else>
                  <button @click="openGeo()">
                    <i class="fas fa-map-marker"></i>
                    <span>See my geolocation</span>
                  </button>
                </div>
              </div>
              <div v-else class="error">{{ errMessage }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
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
.coords {
  font-size: 18px;
}
.error {
  font-weight: bold;
  color: rgb(128, 0, 0);
}
button {
  display: flex;
  align-items: center;
  color: white;
  padding: 20px 30px;
  background-color: black;
  border-radius: 45px;
  border: none;
  transition: all 0.2s;
}
button i {
  margin-right: 15px;
  font-size: 23px;
}
button:hover {
  transform: scale(1.1);
}
</style>
<script>
export default {
  data() {
    return {
      lat: '',
      lng: '',
      err: false,
      use: false,
      errMessage: ''
    }
  },
  methods: {
    openGeo() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError)
      } else {
        this.err = true
        this.errMessage = 'Your browser does not support this function'
      }
    },
    geoSuccess(position) {
      this.use = true
      this.lng = position.coords.longitude
      this.lat = position.coords.latitude
    },
    geoError() {
      this.err = true
      this.errMessage = "I couldn't get your location"
    }
  }
}
</script>
