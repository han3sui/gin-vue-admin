<template>
  <fragment v-if="!route.hidden">
    <el-submenu v-if="hasChild" :index="route.path" popper-append-to-body>
      <template slot="title">
        <i v-if="route.meta && route.meta.icon" :class="[route.meta.icon]"/>
        <span slot="title">{{route.meta.title}}</span>
      </template>
      <app-aside-menu-item v-for="child in route.children" :key="child.path" :route="child"/>
    </el-submenu>
    <template v-else>
      <el-menu-item :index="route.path">
        <i v-if="route.meta && route.meta.icon" :class="[route.meta.icon]"/>
        <span slot="title">{{route.meta.title}}</span>
      </el-menu-item>
    </template>
  </fragment>
</template>

<script>
export default {
  name: 'AppAsideMenuItem',
  props: {
    // 路由对象
    route: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasChild () {
      return Object.hasOwnProperty.call(this.route, 'children')
    },
    collapse () {
      return this.$store.state.isCollapse
    }
  }
}
</script>

<style scoped>

</style>
