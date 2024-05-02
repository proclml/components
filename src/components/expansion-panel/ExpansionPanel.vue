<template>
  <div>
    <div @click="isExpanded = !isExpanded" class="expansion-panel-header">
      <slot name="header">Header</slot>
    </div>
    <transition name="expand">
      <div v-if="isExpanded" class="expansion-panel-content">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ExpansionPanel',
  setup() {
    const isExpanded = ref(false)
    return { isExpanded }
  }
}
</script>

<style scoped>
.expansion-panel-header {
  cursor: pointer;
  padding: 16px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.expansion-panel-content {
  padding: 16px;
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.3s;
}
.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
