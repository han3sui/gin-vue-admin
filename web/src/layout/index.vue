<template>
  <el-container class="app-body">
    <div class="app-aside">
      <app-aside/>
    </div>
    <el-container class="app-container">
      <app-nav/>
      <app-main/>
      <app-footer/>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from '@/layout/components/AppAside'
import AppNav from '@/layout/components/AppNav'
import AppMain from '@/layout/components/AppMain'
import AppFooter from '@/layout/components/AppFooter'
import { isMobile, debounce } from '@/utils/util'

export default {
  name: 'Layout',
  components: {
    AppFooter,
    AppMain,
    AppNav,
    AppAside
  },
  computed: {
    collapse () {
      return this.$store.state.isCollapse
    }
  },
  created () {
    isMobile()
    window.onresize = debounce(() => {
      isMobile()
    }, 300)
  }
}
</script>

<style scoped lang="scss">
.app-body {
  .app-container {
    flex-direction: column;
    background-color: #f0f2f5;
  }
}
</style>
