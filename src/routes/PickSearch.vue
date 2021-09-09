<template>
  <div
    class="pickpage"
    ref="pick">
    <div class="detail">
      <input
        type="text"
        ref="input"
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
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      results: []
    }
  },
  computed: {
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
      if (this.$refs.input.value) {
        // 셀렉티드 된 책만 가져오기
        const books = this.$store.state.select.bible.filter(book => {
          const regex = new RegExp(this.$store.state.select.selected.join('|'))
          return regex.test(book.name)
          })
        
        const inputVal = new RegExp(this.$refs.input.value,'gi')
        
        // 해당 절만 가져오기
        const verses = books.filter(verse => {
          return inputVal.test(verse.content)
          })
        
        // 변환 및 붙이기
        const html = verses.map(verse => {
          const highLight = verse.content.replace(inputVal,`<span class="hl">${this.$refs.input.value}</span>`)
          return `<li><p class="infos">${verse.name} ${verse.chapter} : ${verse.verse}</p>${highLight}</li>`
        }).join('')
        this.$refs.suggestions.innerHTML = html;
      }
    },
  }
}
</script>

<style lang="scss">
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
    text-align: center;
    border: 3px dashed $primary;
    opacity: 0.8;
    font-size: 0.8em;
    color: #eee;
    font-weight: 700;
    flex: 0;
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
          position: relative;
          text-align: start;
          width: 100%;
          max-height: 12vh;
          overflow: auto;
          padding: 8px 10px;
          font-size: 3.5vh;
          line-height: 5vh;
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
          .infos {
            -ms-user-select: none; 
            -moz-user-select: -moz-none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            user-select: none;
            font-size: 2vh;
            line-height: 2vh;
            color: $gray-500;
            margin-bottom: 0.2em;
          }
          .hl {
            color: $orange-400;
          }
        }
      }
    }
  }
}
</style>
