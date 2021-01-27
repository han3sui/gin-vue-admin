<template>
  <el-header class="app-nav">
    <div class="navbar-wrapper">
      <div class="navbar-left">
        <div class="left-icon-wrapper" @click="handleChangeCollapse">
          <i :class="[isMobile?'el-icon-s-operation':(collapse?'el-icon-s-unfold':'el-icon-s-fold')]"/>
        </div>
        <el-breadcrumb separator="/">
          <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path"
                                :to="{ path: item.name==='Index'?'/':item.path }">{{ item.meta.title }}
            </el-breadcrumb-item>
          </transition-group>
        </el-breadcrumb>
      </div>
      <div class="navbar-right" v-if="!isMobile">
        <el-dropdown>
          <div class="right-menu-item">
            <img alt="" class="user-avatar" src='../../assets/img/user.png'>
            <span>超级管理员<i class="el-icon-arrow-down el-icon--right"/></span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="changePassword">修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="logout">注销登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <el-scrollbar class="tags-scroller">
      <div class="tags-wrapper">
        <div class="tags-item" v-for="(item,index) in tags" :key="item.path"
             :class="[$route.path===item.path?'tag-active':'']">
          <span @click="handleToPath(item.path)">{{ item.meta.title }}</span>
          <i class="el-icon-close" @click="handleCloseTag(item.path,index)"/>
        </div>
      </div>
    </el-scrollbar>
  </el-header>
</template>

<script>
export default {
  name: 'AppNav',
  data () {
    return {
      breadcrumbList: []
    }
  },
  computed: {
    collapse () {
      return this.$store.state.isCollapse
    },
    isMobile () {
      return this.$store.state.isMobile
    },
    tags () {
      return this.$store.state.navTags
    }
  },
  watch: {
    $route: {
      handler: function () {
        this.breadcrumbList = this.$route.matched.filter(item => item.name)
      },
      immediate: true
    }
  },
  methods: {
    changePassword () {

    },
    logout () {

    },
    // 更改菜单栏折叠状态
    handleChangeCollapse () {
      this.$store.commit('SET_COLLAPSE', !this.collapse)
    },
    // tags路由跳转
    handleToPath (path) {
      if (this.$route.path !== path) {
        this.$router.push({
          path: path
        })
      }
    },
    // 删除tag
    handleCloseTag (path, index) {
      if (this.tags.length > 1) {
        this.$store.commit('DELETE_NAVTAG', index)
        if (path === this.$route.path) {
          this.$router.push({
            path: this.tags[this.tags.length - 1].path
          })
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-scrollbar__wrap {
  overflow-x: hidden;
}

.app-nav {
  .navbar-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #ebeef5;
    overflow: hidden;

    .navbar-left {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 15px;
      height: 100%;

      .left-icon-wrapper {
        cursor: pointer;

        & i {
          transition: all .3s;
          font-size: 20px;
        }
      }
    }

    .navbar-right {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
      width: auto;
      padding-right: 15px;

      .right-menu-item {
        display: flex;
        align-items: center;

        & img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        & span {
          padding-left: 8px;
        }
      }
    }
  }

  .tags-scroller {
    height: 34px;
    border-bottom: 1px solid #e6e6e6;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

    .tags-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 15px;
      height: 34px;

      .tag-active {
        background-color: #42b983 !important;
        color: #FFFFFF !important;

        &:before {
          content: "";
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 6px;
        }
      }

      .tags-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        cursor: pointer;
        height: 26px;
        line-height: 26px;
        border: 1px solid #d8dce5;
        color: #495060;
        background: #fff;
        padding: 0 8px;
        font-size: 12px;
        margin-left: 5px;

        & span {
          white-space: nowrap;
          padding-right: 5px;
        }

        & i {
          transition: all .3s;
          padding: 3px;

          &:hover {
            background-color: #c0c4cc;
            border-radius: 50%;
            color: #FFFFFF;
          }
        }
      }
    }
  }
}
</style>
