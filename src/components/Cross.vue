<template>
  <div :class="'cross'">
    this is cross page
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.cross {
  position: absolute;
  top: 2.4rem;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 7px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
