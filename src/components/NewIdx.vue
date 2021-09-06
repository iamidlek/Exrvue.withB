<template>
  <div
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
</template>

<script>
export default {
  data() {
    return {
      news : ['Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation' ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$refs.box.classList.add('mounted')
      }, 800);
    });
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.newlist{
  overflow: auto;
  height: 50vh;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
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
      color: #D9C7B8;
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
