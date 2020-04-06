<template>
  <div>
    <NavBar />
    <Spacer :height="71" :bgVar="`bg-color-tres`" />
    <Apresentation />
    <PageType :type="`SSR`" />
    <Footer />
    {{ ip }}
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
  async asyncData({ $axios }) {
    const ip = await $axios.$get('http://icanhazip.com')
    // this.ip = ip
    return { ip }
  },
  data() {
    return {
      // ip
    }
  },

  mounted() {
    this.ip = this.ip + 'oi'
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
