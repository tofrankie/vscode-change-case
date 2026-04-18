import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/extension.ts'],
  format: ['cjs'],
  target: 'es2021',
  clean: true,
  deps: {
    neverBundle: ['vscode'],
    alwaysBundle: ['change-case', 'swap-case', 'title-case'],
  },
})
