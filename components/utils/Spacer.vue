<template>
  <div>
    <div class="container-fluid kako" :style="spaseeSty"></div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 10
    },
    bgVar: {
      type: String,
      default: 'bg-color-um'
    }
  },
  computed: {
    spaseeSty() {
      return {
        height: `${this.height}px`,
        'background-color': `var(--${this.bgVar})`
      }
    }
  }
}
</script>
