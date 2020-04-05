<template>
  <div>
    <NavBar />
    SSR
    {{ ip }}
  </div>
</template>

<script>
import NavBar from '~/components/navbar/NavBar'

export default {
  components: {
    NavBar
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
  },

  mounted() {
    this.ip = this.ip + 'oi'
  }
}
</script>
