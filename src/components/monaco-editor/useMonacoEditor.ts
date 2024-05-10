import * as monaco from 'monaco-editor'
import { ref } from 'vue'
import type { ICreateProps } from './types'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import { createATA } from './ata'
console.log(tsWorker)

// @ts-ignore
self.MonacoEnvironment = {
  getWorker(_: any, label: string) {
    if (label === 'json') {
      return new jsonWorker()
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker()
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker()
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker()
    }
    return new editorWorker()
  },
}

export const useMonacoEditor = () => {
  let monacoEditor: monaco.editor.IStandaloneCodeEditor | undefined
  const monacoEditorRef = ref<HTMLDivElement>()

  const createEditor = (createProps: ICreateProps) => {
    if (!monacoEditorRef.value) return
    const editor = monaco.editor.create(monacoEditorRef.value, {
      tabSize: 4,
      fontSize: 16,
      lineNumbers: 'on',
      model: monaco.editor.createModel('console.log("hello")', 'typescript'),
      automaticLayout: true,
      minimap: { enabled: true },
      language: 'typescript',
    })
    monacoEditor = editor
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      lib: ['esnext'],
      target: monaco.languages.typescript.ScriptTarget.ESNext,
      esModuleInterop: true,
    })
    monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true)
    // const ata = createATA((code, path) => {
    //   monaco.languages.typescript.typescriptDefaults.addExtraLib(code, `file://${path}`)
    // })

    // editor.onDidChangeModelContent(() => {
    //   ata(editor.getValue())
    // })

    // ata(editor.getValue())
  }

  return {
    monacoEditorRef,
    createEditor,
  }
}
