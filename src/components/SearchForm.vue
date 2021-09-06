<template>
  <div class="search-form">
    <div
      class="old-name"
      @click="oopen">
      Old Testament
    </div>
    <div
      class="old-book"
      ref="oldb">
      <div
        v-for="old in olds"
        :key="old"
        class="book">
        <input
          type="checkbox"
          v-model="$data[old]"
          :id="old" />
        <label :for="old">{{ old }}</label>
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
        v-for="newb in news"
        :key="newb"
        class="book">
        <input
          type="checkbox"
          v-model="$data[newb]"
          :id="newb" />
        <label :for="newb">{{ newb }}</label>
      </div>
    </div>
    <div class="next">
      <div class="arrow"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      olds : ['All Old Testament','Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalm', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'],
      news : ['All New Testament','Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation' ],
      clo1 : true,
      clo2 : true
    }
  },
  methods: {
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
    }
  }
}
</script>

<style lang="scss" scoped>
.search-form {
  width: 100%;
  height: 84vh;
  margin-top: 1vh;
  position: relative;
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
      border: none;
    }
  }
  .next {
    position: absolute;
    width: 1px;
    height: 1px;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .arrow{
      position: absolute;
      width: 2.5vh;
      height: 2.5vh;
      bottom: 3vh;
      right: 2vh; 
      border-top: 3px solid white;
      border-right: 3px solid white;
      transform: rotate(45deg);
      cursor: pointer;
    }
  }
}
</style>
