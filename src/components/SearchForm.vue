<template>
  <div class="search-form">
    <div class="old-name">
      Old Testament
    </div>
    <div class="old-book">
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
    <div class="new-name">
      New Testament
    </div>
    <div class="new-book">
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
  </div>
</template>

<script>
export default {
  data(){
    return {
      olds : [ 'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalm', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'],
      news : ['Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation' ],
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.search-form {
  width: 100%;
  margin-top: 1vh;
  position: relative;
  .old-name{
    color: #A68A7B;
    font-weight: 700;
    font-size: 5vh;
    margin-bottom: 1vh;
  }
  .new-name{
    margin-top: 1vh;
    color: #D9C7B8;
    font-weight: 700;
    font-size: 5vh;
    margin-bottom: 1vh;
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
    height: 30vh;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    input:checked + label {
      color: #000;
      background-image: linear-gradient(to left bottom, #d58990, #d58aa3, #ce8eb7, #c094ca, #ab9cda, #96a5e6, #7daeed, #60b7ef, #3fc1ee, #1ecae8, #19d2dc, #3ad8cd);
      opacity: .9;
      border: none;
    }
  }
}
</style>
