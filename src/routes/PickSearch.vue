<template>
  <div
    class="pickpage"
    ref="pick">
    <div class="detail">
      <input
        type="text"
        @keydown.enter="searchMatch"
        placeholder="God created heaven"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'God created heaven'" />
      <div
        class="probe btn"
        @click="searchMatch">
        Probe
      </div>
    </div>
    <div class="result-form">
      <div class="resultlist">
        <ul
          class="suggestions"
          ref="suggestions">
          <li>sdjllksjfsd</li>
          <li>{{ list }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import kjvBible from "../../public/en_en.json"
export default {
  data(){
    return{
      kjvBible,
    }
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$refs.pick.classList.add('pick')
      }, 300);
    });
  },
  methods: {
    searchMatch(){
      // const e = document.querySelector('.detail input')
      // this.kjvBible.forEach( book => {
      //   console.log(book.name)
        
      // })
      console.log(this.selected)
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~/scss/style";
.pickpage {
  opacity: 0;
  transition: all .5s;
}

.pickpage.pick{
  opacity: 1;
  .detail{
  position: relative;
  display: flex;
  input {
    text-align: center;
    font-size: 2vh;
    color: #eee;
    flex: 1;
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 2px dashed $green;
    margin-right: 1em;
    }
  .probe {
    width: 5em;
    border: 3px dashed $primary;
    opacity: 0.8;
    font-size: 2vh;
    color: #eee;
    font-weight: 700;
    }
  }
  .result-form{
    width: 100%;
    .resultlist{
      width: 80%;
      margin: 5vh auto 0;
      overflow: hidden;
      .suggestions{
        height: 70vh;
        overflow: auto;
        padding: 0;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera*/
        }
        li {
          text-align: start;
          width: 100%;
          max-height: 12vh;
          overflow: auto;
          padding: 8px 10px;
          font-size: 3.5vh;
          line-height: 5.5vh;
          color: #eee;
          border-bottom: 2px dashed #A68A7B;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          &::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera*/
          }
          & + li {
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>
