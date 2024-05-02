<template>
  <div class="cron-form">
    <div class="cron-field">
      <label for="expression">表达式:</label>
      <input type="text" v-model="expression" class="cron-input" />
    </div>

    <div class="cron-field">
      <label for="minute">分钟:</label>
      <input type="text" v-model="cron.minute" placeholder="0-59" class="cron-input" />
    </div>

    <div class="cron-field">
      <label for="hour">小时:</label>
      <input type="text" v-model="cron.hour" placeholder="0-23" class="cron-input" />
    </div>

    <div class="cron-field">
      <label for="dayOfMonth">日期:</label>
      <input type="text" v-model="cron.dayOfMonth" placeholder="1-31" class="cron-input" />
    </div>

    <div class="cron-field">
      <label for="month">月份:</label>
      <input type="text" v-model="cron.month" placeholder="1-12 或 JAN-DEC" class="cron-input" />
    </div>

    <div class="cron-field">
      <label for="dayOfWeek">星期:</label>
      <input type="text" v-model="cron.dayOfWeek" placeholder="0-7 或 SUN-SAT" class="cron-input" />
    </div>

    <div class="cron-field">
      <label for="second">秒:</label>
      <input type="text" v-model="cron.second" placeholder="0-59" class="cron-input" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { CronExpression } from './parser'

export default defineComponent({
  setup(props, ctx) {
    const cron = ref({
      minute: '',
      hour: '',
      dayOfMonth: '',
      month: '',
      dayOfWeek: '',
      second: ''
    })
    const expression = ref('')

    watchEffect(() => {
      if (!expression.value) return
      const cronExpression = CronExpression.parse(expression.value)
    })
    return {
      cron,
      expression
    }
  }
  // data() {
  //   return {
  //     cron: {
  //       minute: '',
  //       hour: '',
  //       dayOfMonth: '',
  //       month: '',
  //       dayOfWeek: '',
  //       second: ''
  //     },
  //     expression: ''
  //   }
  // },
  // methods: {
  //   validateCron() {
  //     // 调用你的解析代码来验证Cron表达式
  //     console.log(this.cron) // 输出当前的Cron表达式值，供调试
  //   }
  // }
})
</script>

<style scoped>
.cron-form {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
}

.cron-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.cron-field label {
  font-weight: bold;
  margin-bottom: 5px;
}

.cron-input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
}

.cron-button {
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cron-button:hover {
  background-color: #45a049;
}
</style>
