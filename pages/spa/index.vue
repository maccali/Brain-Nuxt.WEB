<template>
  <div>
    <NavBar />
    <Spacer :height="71" />
    <Apresentation />
    <PageType :type="`SPA`" />
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
  }
}
</script>
