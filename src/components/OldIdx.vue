<template>
  <div
    class="oldlist"
    refs="old">
    <ol>
      <li
        v-for="old in olds"
        :key="old"
        :name="old">
        {{ old }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      olds : [ 'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalm', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'],
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.oldlist{
  overflow: auto;
  height: 50vh;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
  opacity: 1;
  }
  ol {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      width: 30vh;
      font-size: 3.7vh;
      line-height: 7vh;
      color: #A68A7B;
      text-align: center;
      border-bottom: 1px dashed #A68A7B;
    }
    li:hover,
    li:active {
      color: #F5AA38;
    }  
  }
}
</style>
