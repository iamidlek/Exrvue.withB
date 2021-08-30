<template>
  <div class="search">
    <form class="search-form">
      <input
        type="text"
        placeholder="gen 1:1"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'gen 1:1'" />
      <ul class="suggestions">
        <li>F</li>
        <li>o</li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  
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

.search {
  position: relative;
  .search-form{
    width: 80vw;
    margin: 5rem auto 0;
    // overflow: hidden;
    input {
      width: 15rem;
      display: block;
      margin: 0 auto;
      font-size: 1.4rem;
      text-align: center;
      height: 2.8rem;
      border: 7px solid #F7F7F7;
      border-radius: 5px;
      outline: 0;
      box-shadow: 
      0 0 5px rgba(0, 0, 0, 0.12), 
      inset 0 0 2px rgba(0, 0, 0, 0.19);
      // z-index: 2;
    }
  }
}
</style>
