<template>
  <div>
    <Spacer :height="71" />
    <Apresentation />
    <PageType :type="`SSR`" />
  </div>
</template>

<script>
import Apresentation from '~/components/sections/Apresentation'
import Spacer from '~/components/utils/Spacer'
import PageType from '~/components/sections/PageType'

export default {
  components: {
    Apresentation,
    Spacer,
    PageType
  }
}
</script>
