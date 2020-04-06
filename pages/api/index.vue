<template>
  <div>
    <NavBar />
    <Spacer :height="71" />
    <Apresentation />
    <PageType :type="`SSR`" />
    <YourIP :ip="ip" />
    <GeoPoints />
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/navbar/NavBar'
import Apresentation from '~/components/sections/Apresentation'
import Footer from '~/components/footer/Footer'
import Spacer from '~/components/utils/Spacer'
import PageType from '~/components/sections/PageType'
import YourIP from '~/components/sections/YourIP'
import GeoPoints from '~/components/sections/GeoPoints'

export default {
  components: {
    NavBar,
    Apresentation,
    Footer,
    Spacer,
    PageType,
    YourIP,
    GeoPoints
  },
  async asyncData({ $axios }) {
    const ip = await $axios.$get('http://icanhazip.com')
    // this.ip = ip
    return { ip }
  },
  head() {
    return {
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.ip
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.ip
        }
      ]
    }
  }
}
</script>
