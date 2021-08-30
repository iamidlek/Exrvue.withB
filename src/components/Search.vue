<template>
  <div class="search">
    <form class="search-form">
      <input
        type="text"
        placeholder="God created heaven"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'God created heaven'" />
      <div class="scroll">
        <ul class="suggestions">
          <li>1.In the beginning God created the heaven and the earth.</li>
          <li>2.And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.</li>
          <li>3.And God said, Let there be light: and there was light.</li>
          <li>4.And God saw the light, that it was good: and God divided the light from the darkness.</li>
        </ul>
      </div>
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
$border-input: #F7F7F7;

.search {
  position: relative;
  .search-form{
    width: 80vw;
    margin: 5rem auto 0;
    // overflow: hidden;
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
    .scroll {
      position: relative;
      overflow: auto;
      margin: 4vh 0 2vh;
      padding: 3vh 0 3vh;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      .suggestions {
        margin: 3rem 0 0;
        padding: 0;
        position: relative;
        width: 80vw;
        li {
          width: 70vw;
          font-size: 1.3rem;
          line-height: 1.2;
          font-weight: 400;
          text-align: start;
          padding: 7px 5px;
          }
        }
      }
    }
  }
}
</style>
