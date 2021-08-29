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
          <li
            v-for="old in olds"
            :key="old"
            :name="old">
            {{ old }}
          </li>
        </ol>
      </div>
      <div
        v-if="btns === 'New'"
        class="newlist">
        <ol>
          <li
            v-for="newb in news"
            :key="newb"
            :name="newb">
            {{ newb }}
          </li>
        </ol>
      </div>
    </div>
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
  ol {
    width: 100%;
    margin-top: 7vh;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 29.8vw;
      line-height: 7vh;
      flex: 1 0 auto;
      text-align: center;
      color: $white-font;
    }
    li:hover {
      color: $cross;
    }
  }
}
</style>
