<template>
  <div
    class="container-fluid"
    ref="mount">
    <a
      @click="refrash"
      class="btn btn-primary index">
      INDEX
    </a>
    <RouterLink
      :to="'/'"
      active-class="active"
      class="btn stpage">
      BACK
    </RouterLink>
    <Testament />
  </div>
</template>

<script>
import Testament from '~/components/Testament'
export default {
  components: {
    Testament
  },
  data(){
    return {

    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$refs.mount.classList.add('mounted')
      }, 100);
    });
  },
  methods:{
    refrash() {
      window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/style";

.container-fluid {
  height: 98vh;
  padding: 3vh;
  background: linear-gradient(298deg, rgba(55,116,182,1) 0%, rgba(87,9,121,1) 100%);
  a {
    display: flex;
    margin-top: 1vh;
    height: 42vh;
    width: 105%;
    border: none;
    font-size: 8vh;
    transition: all .8s;
    justify-content: center;
    align-items: center;
    &.index {
      border-bottom-left-radius: 0.8em;
      border-top-left-radius: 0.8em;
      position: relative;
      background: linear-gradient(169deg, rgba(55,116,182,1) 0%, rgba(9,15,121,1) 100%);
      opacity: .6;
      left: 5vh;
      top: 6vh;
      &:hover {
        z-index: 1;
      }
    }
    &.stpage {
      border-bottom-right-radius: 0.8em;
      border-top-right-radius: 0.8em;
      position: relative;
      background: linear-gradient(169deg, rgba(157,213,111,1) 0%, rgba(121,120,9,1) 100%);
      left: -10vh;
      bottom: 4vh;
      opacity: 0.8;
    }
  }
}
.container-fluid.mounted{
  a {
    height: 8vh;
    font-size: 4vh;
    &.index {
      background: rgba(55,116,182,0.1);
      border-bottom: 4px solid $success;
      border-bottom-right-radius: 0.8em;
      border-top-right-radius: 0.8em;
      width: 100%;
      left: 0;
      top: -4vh;
      &:hover {
        background: rgba(55,116,182,0.8);
      }
    }
    &.stpage {
      width: 100%;
      left: 0;
      border-radius: 0;
      background: rgba(55,116,182,0);
      border-top:2px solid $success;
      top: 77vh;
      &:hover {
        background: rgba(55,116,182,0.5);
        color: $gray-400;
      }
    }
  }
}
</style>
