<template>
  <div
    class="box"
    ref="box">
    <label class="switch">
      <input
        type="checkbox"
        @click="tran" />
      <span class="slider"></span>
    </label>
  </div>
  <div
    ref="indexs"
    class="indexs">
    <OldIdx v-if="!status" />
    <NewIdx v-if="status" />
  </div>
</template>

<script>
import OldIdx from '~/components/OldIdx'
import NewIdx from '~/components/NewIdx'

export default {
  components:{
    OldIdx,
    NewIdx
  },
  data(){
    return {
      status: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$refs.box.classList.add('mounted')
      }, 800);
      setTimeout(() => {
        this.$refs.indexs.classList.add('mounted')
      }, 1200);
    });
  },
  methods:{
    tran(){
        this.status = !this.status
    }
  }
}
</script>

<style lang="scss" scoped>
.box, .indexs{
  opacity: 0;
  transition: all 2s;
}
.box.mounted {
  position: relative;
  top: -8vh;
  display: flex;
  justify-content: center;
  opacity: 1;
  z-index: 5;
  .switch {
    position: relative;
    display: inline-block;
    width: 30vh;
    height: 10vh;
    input {
      opacity: 0;
      width: 0;
      height: 0;
      
    }
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 1vh;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 0 2vh;
    justify-content: flex-start;
    overflow: hidden;
    border-top: 2px solid #A68A7B;
    border-bottom: 2px solid #A68A7B;
    -webkit-transition: .4s;
    transition: .4s;
    &::before{
      content: "Old";
      color: #A68A7B;
      position: absolute;
      left: 3vh;
      font-size: 8vh;
      -webkit-transition: .4s;
      transition: .4s;
    }
    &::after{
      content: "NEW";
      color: #D9C7B8;
      opacity: 0.5;
      letter-spacing: -0.4vh;
      font-size: 4vh;
      right: 3vh;
      position: absolute;
      -webkit-transition: .4s;
      transition: .4s;
    }
  }
  input:checked + .slider {
    border-top: 2px solid #D9C7B8;
    border-bottom: 2px solid #D9C7B8;
    &::before{
      content: "Old";
      opacity: 0.5;
      font-size: 4.7vh;
      color: #A68A7B;
    }
    &::after{
      content: "NEW";
      color: #D9C7B8;
      opacity: 1;
      letter-spacing: -0.4vh;
      font-size: 7vh;
      right: 3vh;
      position: absolute;
    }
  } 
}
.indexs.mounted{
  opacity: 1;
}
</style>
