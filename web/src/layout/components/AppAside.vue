<template>
  <fragment>
    <!--    移动模式-->
    <el-drawer
      class="mobile-aside"
      v-if="isMobile"
      :visible.sync="drawMenuShow"
      :with-header="false"
      :show-close="false"
      direction="ltr"
      size="50%">
      <div class="logo">
        <img alt="" src="../../../src/assets/img/logo.png">
        <h2>Vue-Admin-Temp</h2>
      </div>
      <app-aside-menu/>
    </el-drawer>
    <el-aside v-else width="auto" class="pc-aside" :class="[collapse?'app-aside-hide':'app-aside-open']">
      <!--      pc模式-->
      <div class="logo">
        <img alt="" src="../../../src/assets/img/logo.png">
        <h2 v-if="!collapse">Vue-Admin-Temp</h2>
      </div>
      <app-aside-menu/>
    </el-aside>
  </fragment>
</template>

<script>
import AppAsideMenu from '@/layout/components/AppAsideMenu'

export default {
  name: 'AppAside',
  components: { AppAsideMenu },
  computed: {
    collapse () {
      return this.$store.state.isCollapse
    },
    isMobile () {
      return this.$store.state.isMobile
    },
    drawMenuShow: {
      get: function () {
        return this.collapse
      },
      set: function (val) {
        this.$store.commit('SET_COLLAPSE', val)
      }
    }
  }
}
</script>

<style scoped lang="scss">

.pc-aside {
  width: 64px !important;
  transition: width .2s;

  &.app-aside-open {
    width: 250px !important;
  }
}

.mobile-aside{
  ::v-deep .el-drawer{
    background-color: $aside-bg;
  }
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  padding: 0 15px;
  background-color: $aside-bg;
  color: #fff;

  & h2 {
    margin: 0;
    padding-left: 10px;
    white-space: nowrap;
    overflow: hidden;
  }

  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}
</style>
