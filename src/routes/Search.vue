<template>
  <div
    class="container-fluid"
    ref="mount">
    <div
      ref="back"
      class="stand">
      <SearchForm />
    </div>
    <a
      class="btn btn-primary index">
      INDEX
    </a>
    <a
      class="btn btn-primary search">
      SEARCH
    </a>
    <a
      @click="back"
      class="btn btn-primary stpage">
      BACK
    </a>
  </div>
</template>

<script>
import SearchForm from '~/components/SearchForm'
export default {
  components: {
    SearchForm
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
    back() {
      setTimeout(() => {
        this.$router.push('/')
      }, 1000);
      this.$refs.back.classList.add('back')
      this.$refs.mount.classList.remove('mounted')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/style";

.container-fluid {
  height: 98vh;
  padding: 3vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(298deg, rgba(55,116,182,1) 0%, rgba(87,9,121,1) 100%);
  .stand{
    opacity: 0;
  }
  a {
    display: flex;
    margin-top: 1vh;
    height: 42vh;
    width: 105%;
    border: none;
    font-size: 8vh;
    color: #FFF;
    transition: all .8s;
    justify-content: center;
    align-items: center;
    &.index {
      border-bottom-left-radius: 0.8em;
      border-top-left-radius: 0.8em;
      position: absolute;
      background: linear-gradient(169deg, rgba(55,116,182,1) 0%, rgba(9,15,121,1) 100%);
      opacity: .6;
      left: 7vh;
      top: 9vh;
      &:hover {
        z-index: 1;
      }
    }
    &.search {
      border-bottom-right-radius: 0.8em;
      border-top-right-radius: 0.8em;
      position: absolute;
      top: 42vh;
      background: linear-gradient(169deg, rgba(157,213,111,1) 0%, rgba(121,120,9,1) 100%);
      left: -10vh;
      bottom: 4vh;
      opacity: 0.8;
    }
    &.stpage {
      position: relative;
      width: 100%;
      top: 75vh;
      opacity: 0;
      transition: all .3s;
      font-size: 3vh;
      color: $gray-300;
      border-radius: 0;
    }
  }
}
.container-fluid.mounted{
  .stand{
    width: 100%;
    opacity: 1;
  }
  a {
    height: 8vh;
    font-size: 4vh;
    &.index {
      width: 0;
      opacity: 0;
      left: 250vh;
    }
    &.search {
      width: 0;
      left: -70vh;
    }
    &.stpage {
      position: relative;
      width: 100%;
      top: 86vh;
      left: 0;
      opacity: .7;
      font-size: 3vh;
      color: $gray-300;
      border-radius: 0;
      background: rgba(55,116,182,0);
      border-top:2px solid $success;
      &:hover {
        background: rgba(55,116,182,0.3);
        color: $gray-400;
      }
    }
  }
}
.back {
  opacity: 0;
  width: 0;
  height: 0;
  overflow: hidden;
}
</style>
