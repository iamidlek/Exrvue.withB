<template>
  <StPage />
</template>

<script>
import StPage from '~/components/StPage'
// import Index from '~/components/Index'
// import Search from '~/components/Search'
// import Cross from '~/components/Cross'

export default {
  components:{
    StPage
  },
  // data(){
  //   return {
  //     now: 'index',
  //     vindex: true,
  //     vsearch: false,
  //     vcross: false
  //   }
  // },
  // methods:{
  //   tab(e) {
  //     this.now = e.target.className
  //     if (this.now === 'index'){
  //       this.vindex = true
  //       this.vsearch = false
  //       this.vcross = false
  //     } else if (this.now === 'search') {
  //       this.vsearch = true
  //       this.vindex = false
  //       this.vcross = false
  //     } else {
  //       this.vcross = true
  //       this.vindex = false
  //       this.vsearch = false
  //     }
  //   }
  // }
}
</script>

<style lang="scss">
@import "~/scss/style";
</style>
