<template>
  <div class="box">
    <label class="switch">
      <input
        type="checkbox"
        checked />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btns : 'none',
      olds : [ 'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalm', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'],
      news : ['Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation' ]
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
.box {
  position: relative;
  top: -10vh;
  display: flex;
  justify-content: center;
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 2vh;
    justify-content: flex-start;
    overflow: hidden;
    background-color: #D9C7B8;
    border-radius: 2em;
    -webkit-transition: .4s;
    transition: .4s;
    &::before{
      content: "Old";
      height: 8vh;
      display: flex;
      align-items: center;
      font-size: 8vh;
      -webkit-transition: .4s;
      transition: .4s;
    }
  }
  input:checked + .slider {
    background-color: #A68A7B;
    &::before{
      content: "NEW";
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  } 
  input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
  }
}

</style>
