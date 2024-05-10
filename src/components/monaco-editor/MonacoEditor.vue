<template>
  <div ref="monacoEditorRef" class="host"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import type { IMonacoEditorProps } from './types'
import { useMonacoEditor } from './useMonacoEditor'

export default defineComponent<IMonacoEditorProps>({
  setup: (props: IMonacoEditorProps) => {
    const { monacoEditorRef, createEditor } = useMonacoEditor()
    onMounted(() => {
      createEditor(props)
    })
    return {
      monacoEditorRef,
    }
  },
})
</script>
<style scoped>
.host {
  height: 100%;
  width: 100%;
}
</style>
