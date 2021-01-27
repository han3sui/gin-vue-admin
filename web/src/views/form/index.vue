<template>
  <div>
    <base-table/>
  </div>
</template>

<script>
import BaseTable from '@/components/BaseTable'

export default {
  name: 'index',
  components: { BaseTable },
  data () {
    return {
      filterData: [
        {
          type: 'input',
          label: '卡号',
          placeholder: '请输入卡号'
        },
        {
          type: 'input',
          label: '姓名',
          placeholder: '请输入姓名'
        },
        {
          type: 'button',
          label: '查询',
          color: 'primary'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
