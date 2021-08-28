<template>
  <div
    class="main"
    :class="now">
    <nav>
      <ul>
        <li
          :class="'index'" 
          @click="tab">
          Index
        </li>
        <li
          :class="'search'" 
          @click="tab">
          Search
        </li>
        <li
          :class="'cross'"
          @click="tab">
          Cross
        </li>
      </ul>
    </nav>
    <Index
      class="ready index" />
    <Search
      class="ready search" />
    <Cross
      class="ready cross" />
  </div>
</template>

<script>
import Index from '~/components/Index'
import Search from '~/components/Search'
import Cross from '~/components/Cross'

export default {
  components:{
    Index,
    Search,
    Cross
  },
  data(){
    return {
      now: 'index',
      ind: document.querySelector('.ready.index'),
      sea: document.querySelector('.ready.search'),
      cro: document.querySelector('.ready.cross')
    }
  },
  methods:{
    tab(e) {
      this.now = e.target.className
      if (this.now === 'index'){
        console.log(this.ind)
      }
    }
  }
}
</script>

<style lang="scss">
$index: #1B3C59;
$search: #A18E7C;
$cross: #F28177;
$outcross: #5B7F77;
$other: #B1B1AC;
$white-font: #F2E5D5;

@mixin outbord($bgcolor) {
  border-top: 1rem solid $bgcolor;
  border-bottom: 1rem solid $bgcolor;
  border-left: 0.875rem solid $bgcolor;
  border-right: 0.875rem solid $bgcolor;
  border-radius: 7px;
}

.main{
  box-sizing: border-box;
  height: 100vh;
  position: relative;
  background-color: $search;
  transition: background-color 1s, border 1s;
  @include outbord($search);
  &.index{
    background-color: $search;
    border-color: $search;
  }
  &.search{
    background-color: $index;
    border-color: $index;
  }
  &.cross{
    background-color: $outcross;
    border-color: $outcross;
  }
  ul {
      list-style: none;
      display: flex;
      text-align: center;
      margin: 0;
      padding: 0;
      li {
        flex: 1;
        line-height: 2.4rem;
        font-size: 1.5rem;
        font-weight: 700;
        cursor: pointer;
        color: $white-font;
        &:first-child {
          background-color: $index;
        }
        &:nth-child(2) {
          background-color: $search;
          color: $index;
        }
        &:last-child {
          background-color: $cross;
        }
    }
  }
  .ready {
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    opacity: 0;
    transform: scale(0.1);
    transform-origin: 0 0;
    transition: transform .45s ease-in-out, opacity .45s;
  }
  .ready.index{
    background-color: $index;
  }
  .ready.search{
    left: 33%;
    background-color: $search;
  }
  .ready.cross{
    left: 67%;
    background-color: $cross;
  }
  .ready.view{
    transform: scale(1);
    opacity: 1;
  }
}
</style>
