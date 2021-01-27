<template>
  <div>
    <base-form v-if="search" ref="filterForm" :config="filterConfig" :inline="true">
      <template slot="operate">
        <!--      查找功能-->
        <el-form-item v-if="search">
          <el-button type="primary" icon="el-icon-search" @click="handleSearch">查找</el-button>
        </el-form-item>

        <!--      添加功能-->
        <el-form-item v-if="create">
          <el-button type="success" icon="el-icon-edit" @click="$emit('create')">添加</el-button>
        </el-form-item>

        <!--      重置功能-->
        <el-form-item v-if="refresh">
          <el-button type="info" icon="el-icon-refresh" @click="handleRefresh">重置</el-button>
        </el-form-item>

        <!--      批量删除功能-->
        <el-form-item v-if="batchDelete">
          <el-button type="danger" icon="el-icon-delete" @click="$emit('batch-delete')">批量删除</el-button>
        </el-form-item>
      </template>
    </base-form>
    <el-table v-loading="loading" :data="data" element-loading-text="加载中" border fit highlight-current-row :header-cell-style="{background:'#eef1f6',color:'#606266'}" @selection-change="handleSelectionChange">
      <el-table-column v-if="selection" align="center" type="selection" width="55" />
      <template v-for="(item,index) in tableConfig">
        <slot v-if="$slots[item.prop]" :name="item.prop" />
        <el-table-column v-else :key="index" :label="item.label" :width="item.width" :prop="item.prop" align="center" />
      </template>
      <slot name="operate" />
    </el-table>
    <el-pagination
      v-if="pageination"
      style="margin-top: 30px"
      background
      :page-size="limit"
      :page-sizes="[10, 20, 30, 40, 50, 100]"
      :current-page="page"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>

</template>

<script>
import BaseForm from '@/components/BaseForm'
export default {
  name: 'BaseTable',
  components: { BaseForm },
  props: {
    // 数据源
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    /**
     * 表格配置
     * label：名称，
     * width：宽度
     * prop：key
     */
    tableConfig: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 表单配置项，详情参考BaseForm组件的config
    filterConfig: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 是否开启多选
    selection: {
      type: Boolean,
      default: false
    },
    // 是否开启分页栏
    pageination: {
      type: Boolean,
      default: true
    },
    // 是否开启顶部搜索
    filter: {
      type: Boolean,
      default: false
    },
    // 查询
    search: {
      type: Boolean,
      default: false
    },
    // 添加
    create: {
      type: Boolean,
      default: false
    },
    // 重置
    refresh: {
      type: Boolean,
      default: false
    },
    // 批量删除
    batchDelete: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 当前页
      page: 1,
      // 分页条数
      limit: 20,
      // 总条目数
      total: 0,
      // 加载状态
      loading: false,
      // 多选内容
      selections: []
    }
  },
  computed: {
    filterForm () {
      return { ...this.$refs.filterForm.form, ...{ page: this.page, limit: this.limit } }
    }
  },
  mounted () {
    this.$emit('search')
  },
  methods: {
    // 每页显示条目变更
    handleSizeChange (val) {
      this.limit = val
      this.$emit('pagination')
    },
    // 当前页变更
    handleCurrentChange (val) {
      this.page = val
      this.$emit('pagination')
    },
    // 多选操作
    handleSelectionChange (e) {
      this.selections = e
    },
    // 重置表单
    handleRefresh () {
      this.page = 1
      this.$refs.filterForm.reset()
      this.$emit('refresh')
    },
    // 查询动作
    handleSearch () {
      this.page = 1
      this.$emit('search')
    }
  }
}
</script>

<style scoped>

</style>
