// src/shim-vue.d.ts
/// <reference types="vite/client" />

// Allow TypeScript to recognize .vue files
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
