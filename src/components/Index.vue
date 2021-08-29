<template>
  <div>
    <div class="list">
      <h1>Testament</h1>
      <div class="select">
        <button>Old</button>
        <button>New</button>
      </div>
      <div class="old">
        <ol>
          <li>d</li>
        </ol>
      </div>
      <div class="new">
        <ol>
          <li>d</li>
        </ol>
      </div>
    </div>
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
      border-radius: 40%;
      border-color: $border-line;
      &:first-child{
        margin-right: 5vh;
      }
    }
  }
}
</style>
