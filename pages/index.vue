<template>
  <div>
    <NavBar />
    <Spacer :height="71" :bgVar="`bg-color-tres`" />
    <Apresentation />
    <PageType :type="`SSR`" />
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/navbar/NavBar'
import Apresentation from '~/components/sections/Apresentation'
import Footer from '~/components/footer/Footer'
import Spacer from '~/components/utils/Spacer'
import PageType from '~/components/sections/PageType'

export default {
  components: {
    NavBar,
    Apresentation,
    Footer,
    Spacer,
    PageType
  },
  methods: {
    displayLocationInfo(position) {
      const lng = position.coords.longitude
      const lat = position.coords.latitude

      console.log(`longitude: ${lng} | latitude: ${lat}`)
    }
  },
  mounted() {
    if (navigator.geolocation) {
      console.log(
        navigator.geolocation.getCurrentPosition(this.displayLocationInfo)
      )
    } else {
      // no can do
    }
  }
}
</script>
