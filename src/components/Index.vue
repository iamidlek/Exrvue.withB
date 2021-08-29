<template>
  <div>
    <div class="list">
      <h1>Testament</h1>
      <div class="select">
        <button
          ref="old"
          @click="select">
          Old
        </button>
        <button
          ref="new"
          @click="select">
          New
        </button>
      </div>
      <div
        v-if="btns === 'Old'"
        class="oldlist">
        <ol>
          <li>old</li>
        </ol>
      </div>
      <div
        v-if="btns === 'New'"
        class="newlist">
        <ol>
          <li>new</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btns : 'none'
    }
  },
  methods: {
    select(e) {
      if (e.target.innerText === this.btns) {
        this.btns = 'none';
        e.target.classList.remove('checked')
      } else {
        this.$refs.old.classList.remove('checked')
        this.$refs.new.classList.remove('checked')
        this.btns = e.target.innerText
        e.target.classList.add('checked') 
      }      
    }
  }
}
</script>

<style lang="scss" scoped>
$index: #1B3C59;
$search: #A18E7C;
$cross: #F28177;
$outcross: #5B7F77;
$other: #B1B1AC;
$white-font: #F2E5D5;
$border-line: #DEB887;

.list {
  position: absolute;
  top: 2.8rem;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4375rem;
  h1 {
    line-height: 1;
    text-align: center;
    font-size: calc(10vw + 1rem);
    font-weight: 700;
    color: $cross;
    margin: 2rem 0;
    -webkit-mask-image: 
    -webkit-gradient(linear,left top,left bottom,
    color-stop(0,$white-font),
    color-stop(.5,$white-font),
    color-stop(1,transparent));
  }
  .select{
    width: 85vw;
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    button {
      width: 6.25rem;
      height: 6.25rem;
      font-size: 2rem;
      color: $white-font;
      background: transparent;
      border-radius: 30%;
      border-color: $border-line;
      transition: border-radius .5s;
      position: relative;
      &:first-child{
        margin-right: 5vh;
      }
      &:first-child::before{
        content: '';
        display: block;
        position: absolute;
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        top: 0;
        left: 0;
        z-index: -1;
        background: radial-gradient($outcross 5%, transparent 70%);
        opacity: 0;
        transition: opacity .4s;
      }
      &:last-child::before{
        content: '';
        display: block;
        position: absolute;
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        top: 0;
        left: 0;
        z-index: -1;
        background: radial-gradient($outcross 5%, transparent 70%);
        opacity: 0;
        transition: opacity .4s;
      }
      &.checked{
        border-radius: 50%;
        &:first-child::before {
          transition: opacity .9s;
          opacity: 1;
        }
        &:last-child::before {
          transition: opacity .9s;
          opacity: 1;
        }
      }
    }
  }
}
</style>
