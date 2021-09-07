<template>
  <div class="container-fluid">
    <RouterLink
      :to="'/index'"
      active-class="active"
      class="btn btn-primary index">
      INDEX
    </RouterLink>
    <RouterLink
      :to="'/search'"
      active-class="active"
      class="btn btn-success search">
      SEARCH
    </RouterLink>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~/scss/style";

.container-fluid {
  height: 98vh;
  padding: 3vh;
  background: linear-gradient(298deg, rgba(55,116,182,1) 0%, rgba(87,9,121,1) 100%);
  overflow: hidden;
  a {
    display: flex;
    margin-top: 1vh;
    height: 42vh;
    width: 105%;
    border: none;
    font-size: 8vh;
    color: #FFF;
    transition: all .6s;
    justify-content: center;
    align-items: center;
    &.index {
      border-bottom-left-radius: 0.8em;
      border-top-left-radius: 0.8em;
      position: relative;
      background: linear-gradient(169deg, rgba(55,116,182,1) 0%, rgba(9,15,121,1) 100%);
      opacity: .7;
      left: 5vh;
      top: 6vh;
      &:hover {
        background: $black;
        z-index: 1;
        left: 2vh;
      }
    }
    &.search {
      border-bottom-right-radius: 0.8em;
      border-top-right-radius: 0.8em;
      position: relative;
      background: linear-gradient(169deg, rgba(157,213,111,1) 0%, rgba(121,120,9,1) 100%);
      left: -10vh;
      bottom: 4vh;
      opacity: 0.8;
      &:hover {
        background: $black;
        border: none;
        left: -7vh;
      }
    }
  }
}
</style>
