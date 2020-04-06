<template>
  <div>
    <Spacer :height="71" />
    <Apresentation />
    <PageType :type="`SSR`" />
    <YourIP :ip="ip" />
    <GeoPoints />
    <Spacer :height="71" />
  </div>
</template>

<script>
import Apresentation from '~/components/sections/Apresentation'
import Spacer from '~/components/utils/Spacer'
import PageType from '~/components/sections/PageType'
import YourIP from '~/components/sections/YourIP'
import GeoPoints from '~/components/sections/GeoPoints'

export default {
  components: {
    Apresentation,
    Spacer,
    PageType,
    YourIP,
    GeoPoints
  },
  async asyncData({ $axios }) {
    const ip = await $axios.$get('http://icanhazip.com')
    return { ip }
  },
  head() {
    return {
      meta: [
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
