<template>
  <div id="app">
    <m-header></m-header>
    <m-tab></m-tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import MTab from 'components/m-tab/m-tab'

export default{
  components: {
    'm-header': MHeader,
    'm-tab': MTab
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
