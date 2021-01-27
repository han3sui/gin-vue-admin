<template>
  <section class="app-main">
    <router-view/>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style scoped lang="scss">
.app-main{
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  margin: 15px;
  background-color: #fff;
}
</style>
