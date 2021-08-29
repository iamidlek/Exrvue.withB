<template>
  <div>
    <div class="list">
      <div class="select">
        <h1>Testament</h1>
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
.list {
  position: absolute;
  top: 2.8rem;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px;
  .select{
    h1 {
      line-height: 1;
      transition: background-position 1s, background-color 1s;
      text-align: center;
      font-size: calc(10vw + 1rem);
      font-weight: 400;
      color: #F28177;
      margin: 1rem 0;
      -webkit-mask-image: 
      -webkit-gradient(linear,left top,left bottom,
      color-stop(0,#FFF),
      color-stop(.5,#FFF),
      color-stop(1,transparent));
    }

  }
}
</style>
