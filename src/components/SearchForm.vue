<template>
  <div
    class="search-form"
    ref="form">
    <div
      class="old-name"
      @click="oopen">
      Old Testament
    </div>
    <div
      class="old-book"
      ref="oldb">
      <div
        key="All Old Testament"
        class="book">
        <input
          @click="all"
          type="checkbox"
          value="All Old Testament"
          v-model="selected"
          id="All Old Testament" />
        <label for="All Old Testament">All Old Testament</label>
      </div>
      <div
        v-for="old in olds"
        :key="old"
        class="book">
        <input
          class="oldbtn"
          type="checkbox"
          :value="old"
          v-model="selected"
          :id="old" />
        <label
          :for="old">{{ old }}</label>
      </div>
    </div>
    <div
      class="new-name"
      @click="nopen">
      New Testament
    </div>
    <div
      class="new-book"
      ref="newb">
      <div
        key="All New Testament"
        class="book">
        <input
          @click="all"
          type="checkbox"
          value="All New Testament"
          v-model="selected"
          id="All New Testament" />
        <label
          for="All New Testament">All New Testament</label>
      </div>
      <div
        v-for="newb in news"
        :key="newb"
        class="book">
        <input
          class="newbtn"
          type="checkbox"
          :value="newb"
          v-model="selected"
          :id="newb" />
        <label :for="newb">{{ newb }}</label>
      </div>
    </div>
    <a
      class="next"
      @click="pick">
      Go to Pick Search
    </a>
  </div>
  <RouterView />
</template>

<script>
export default {
  data(){
    return {
      olds : ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalm', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'],
      news : ['Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation' ],
      clo1 : true,
      clo2 : true,
      selected: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.form.classList.add('mounted')
      this.$store.commit('select/loadBible')
      }, 700);
  },
  methods: {
    pick(){
      setTimeout(() => {
        this.$router.push('/search/picksearch')
      }, 1000);
      this.$refs.form.classList.add('pick')
      this.$store.commit('select/select', {
        selected: [...this.selected]
      })
    },
    oopen(){
      if (this.clo1){
        this.clo1 = !this.clo1
        this.$refs.oldb.classList.add('open')
      } else {
        this.clo1 = !this.clo1
        this.$refs.oldb.classList.remove('open')
      }
    },
    nopen(){
      if (this.clo2){
        this.clo2 = !this.clo2
        this.$refs.newb.classList.add('open')
      } else {
        this.clo2 = !this.clo2
        this.$refs.newb.classList.remove('open')
      }
    },
    all(e){
      if (e.target.value === 'All Old Testament') {
        e.target.checked ? this.selected = ['All Old Testament',...this.olds] : this.selected = []
      } else {
        e.target.checked ? this.selected = ['All New Testament',...this.news] : this.selected = []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search-form{
  opacity: 0;
  transition: all .5s;
}
.search-form.mounted {
  width: 100%;
  height: 84vh;
  margin-top: 1vh;
  opacity: 1;
  overflow: hidden;
  position: relative;
  transition: all .4s;
  .old-name{
    color: #A68A7B;
    font-weight: 700;
    font-size: 5vh;
    margin-bottom: 1vh;
    padding-left: 1vh;
  }
  .new-name{
    margin-top: 1vh;
    color: #D9C7B8;
    font-weight: 700;
    font-size: 5vh;
    margin-bottom: 1vh;
    padding-left: 1vh;
  }
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    opacity: 0;
    width: 0;
    height: 0;
  }
  label {
    box-sizing: border-box;
    margin-left: 2vh;
    margin-bottom: 1.5vh;
    padding: 1vh 2vh;
    border: 1px solid white;
    color: #DDD;
    border-radius: 2vh;
    transition: all .4s;
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
  .old-book,
  .new-book {
    width: 100%;
    margin: 0 auto;
    height: 0;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    transition: height .35s;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
    opacity: 1;
    }
    &.open {
      height: 30vh;
    }
    .book:first-child {
      display: block;
      width: 100%;
    }
    input:checked + label {
      color: #000;
      background-image: linear-gradient(to left bottom, #d58990, #d58aa3, #ce8eb7, #c094ca, #ab9cda, #96a5e6, #7daeed, #60b7ef, #3fc1ee, #1ecae8, #19d2dc, #3ad8cd);
      opacity: .9;
      border-color: transparent;
    }
  }
  .next{
    position: absolute;
    font-size: 2.5vh;
    color: #eee;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    transition: all .4s;
    &:hover{
      color: #000;
    }
  }
}
.search-form.pick {
  height: 0;
}
</style>
