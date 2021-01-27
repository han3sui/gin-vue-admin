<template>
  <el-form ref="form" :model="form" :inline="inline" :rules="rules" :class="inline?'form-wrapper':''" :label-position="labelPosition" :label-width="labelWidth">
    <template v-for="(item,index) in config">
      <slot v-if="$slots[item.prop]" :name="item.prop" />
      <!--      <el-form-item v-else-if="['input','number','textarea'].includes(item.type)" :key="index" :style="{width:item.width?item.width:'auto'}" :label="item.label" :prop="item.prop">-->
      <!--        &lt;!&ndash;        如果是number类型，修改v-model绑定类型&ndash;&gt;-->
      <!--        <el-input v-if="item.type==='number'" v-model.number="form[item.prop]" :type="item.type" :placeholder="item.placeholder" clearable />-->
      <!--        &lt;!&ndash;        普通类型&ndash;&gt;-->
      <!--        <el-input v-else v-model="form[item.prop]" :type="item.type" :placeholder="item.placeholder" clearable />-->
      <!--      </el-form-item>-->
      <el-form-item v-if="item.type" :key="index" :style="{width:item.width?item.width:'auto'}" :label="item.label" :prop="item.prop">
        <template v-if="['input','number','textarea'].includes(item.type)">
          <el-input v-model="form[item.prop]" :type="item.type" :placeholder="item.placeholder" clearable>
            <template v-if="item.slot" :slot="item.slot.name">{{ item.slot.value }}</template>
          </el-input>
        </template>
        <template v-else-if="item.type==='select'">
          <el-select v-model="form[item.prop]" clearable :placeholder="item.placeholder">
            <el-option
              v-for="(option,i) in item.options"
              :key="i"
              :label="option.label"
              :value="option.value"
            />
          </el-select>
        </template>
        <template v-else-if="item.type==='daterange'">
          <el-date-picker v-model="form[item.prop]" clearable :value-format="item.format||'yyyy-MM-dd'" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
        </template>
      </el-form-item>

    </template>
    <slot name="operate" />
  </el-form>
</template>

<script>

export default {
  name: 'BaseForm',
  props: {
    /**
     * 表单配置项
     * type：支持input,number,textarea,select,date,daterange
     * prop：表单字段
     * value：字段值
     * label：为空不显示
     * placeholder：为空不显示
     * color：button主题
     * width：form-item宽度，一般传递百分比
     */
    config: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 是否行内表单
    inline: {
      type: Boolean,
      default: false
    },
    // 表单域标签的位置，right/left/top
    labelPosition: {
      type: String,
      default: 'top'
    },
    // 表单域标签的宽度
    labelWidth: {
      type: String,
      default: 'auto'
    }
  },
  data () {
    return {
      // 表单数据
      form: {},
      // 原始数据
      defaultForm: {},
      // 校验规格
      rules: {}
    }
  },
  created () {
    this.init()
  },
  methods: {
    // 表单初始化
    init () {
      this.rules = {}
      this.form = {}

      const obj = {}
      this.config.forEach(item => {
        // 绑定表单值
        obj[item.prop] = item.value
        // 绑定校验规则
        if (item.rule) {
          this.rules[item.prop] = item.rule
        }
      })
      this.form = { ...obj }
      this.defaultForm = { ...obj }
    },
    // 重置表单
    reset: function reset () {
      this.form = this.cloneDeep(this.defaultForm)
      this.$refs.form.resetFields()
      this.$refs.form.clearValidate()
    },
    // 表单校验
    validate: function validate () {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate((valid) => {
          if (valid) {
            resolve(valid)
          }
        })
      })
    },
    // 清空校验
    clearValidate: function clearValidate () {
      this.$refs.form.clearValidate()
    },
    cloneDeep (target) {
      let cloneObj
      if (target instanceof RegExp) {
        // 如果是正则
        cloneObj = RegExp(target)
      } else if (target instanceof Date) {
        // 如果是时间类型
        cloneObj = new Date(target)
      } else if (target === null || typeof target !== 'object') {
        // 如果是null或者普通类型数据
        cloneObj = target
      } else {
        // 如果是object类型数据
        if (Array.isArray(target)) {
          // 如果是数组
          cloneObj = []
          cloneObj = [...target]
        } else {
          // 如果是对象
          cloneObj = {}
          for (const key in target) {
            if (target.hasOwnProperty(key)) {
              cloneObj[key] = this.cloneDeep(target[key])
            }
          }
        }
      }
      return cloneObj
    }
  }
}
</script>

<style scoped lang="scss">
.form-wrapper {
  margin-bottom: 5px;

  ::v-deep .el-form-item {
    margin-bottom: 10px;
  }
}
</style>
