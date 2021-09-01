<template>
  <div class="search">
    <form class="search-form">
      <input
        type="text"
        @keyup="searchMatch"
        placeholder="God created heaven"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'God created heaven'" />
      <div class="resultlist">
        <ul
          class="suggestions"
          ref="suggestions">
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      kjvBible: []
    }
  },
  mounted() {
    this.enBible()
  },
  methods: {
    enBible() {
      fetch('../../en_kjv_bible.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
      .then(chunk => chunk.json())
      .then(data => this.kjvBible.push(...data));
    },
    // conlog(){
    //   this.koLangBible.forEach(jang => {
    //     console.log(jang.abbrev)
    //   })
    // },
    matching(val,dict){
      return dict.filter(obje =>{
        const regex = new RegExp(val, 'gi');
        // return obje.name.match(regex) || obje.abb.match(regex) || String(obje.chapter).match(regex) || String(obje.verse).match(regex) || obje.content.match(regex)
        return obje.content.match(regex)
      });
    },
    searchMatch(e){
      if (e.target.value === '') {
        return false
      }
      const matched = this.matching(e.target.value,this.kjvBible)
      const html = matched.map(item => {
        const regex = new RegExp(e.target.value, 'gi');
        const name = item.name.replace(regex, `<span class="guan">${e.target.value}</span>`);
      //   const abb = item.abb.replace(regex, `<span class="guanab">${e.target.value}</span>`);
        const chapter = String(item.chapter).replace(regex, `<span class="zang">${e.target.value}</span>`);
        const verse = String(item.verse).replace(regex, `<span class="zul">${e.target.value}</span>`);
        const content = item.content.replace(regex, `<span class="neyong">${e.target.value}</span>`);
        return `
        <li>
          <span class="name">${name}</span>
          <span class="chapt">${chapter}</span>
          <span> : </span>
          <span class="verse">${verse}</span>
          <span class="cont">${content}</span>
        </li>
        `
      }).join('');
      this.$refs.suggestions.innerHTML = html
    }
  },
}
</script>

<style lang="scss">
$index: #1B3C59;
$search: #A18E7C;
$cross: #F28177;
$outcross: #5B7F77;
$other: #B1B1AC;
$white-font: #F2E5D5;
$border-input: #F7F7F7;

.search {
  position: relative;
  .search-form{
    width: 80vw;
    margin: 5rem auto 0;
    input {
      width: 70vw;
      display: block;
      margin: 0 auto;
      font-size: 1.4rem;
      color: $outcross;
      text-align: center;
      height: 2.8rem;
      border: 0.4375rem solid $border-input;
      border-radius: 0.4375rem;
      outline: 0;
      box-shadow: 
      0 0 0.4375rem rgba(0, 0, 0, 0.12), 
      inset 0 0 0.125rem rgba(0, 0, 0, 0.19);
    }
    .resultlist {
      position: relative;
      overflow: auto;
      top: 0;
      bottom: 0;
      max-height: 65vh;
      margin: 5vh 0 5vh;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
      }
      .suggestions {
        display: flex;
        justify-items: center;
        flex-direction: column;
        li {
          text-align: start;
          width: 100%;
          height: 14vh;
          overflow: auto;
          padding: 8px 10px;
          font-size: 3.5vh;
          line-height: 3.8vh;
          color: $white-font;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          &::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera*/
          }
          & + li {
            margin-top: 10px;
          }
        }
        li:nth-child(even){
          background: $index;
          & .name{
            color: gray;
          }
          & .chapt, .verse{
            color: $search;
          }
        }
        li:nth-child(odd){
          background: $outcross;
          & .name{
            color: $index;
          }
          & .chapt, .verse{
            color: $search;
          }
        }
      }
    }
  }
}
</style>
