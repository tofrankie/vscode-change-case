import { defineConfig } from '@tofrankie/eslint'

export default defineConfig({
  ignores: ['dist/**', 'node_modules/**'],
  typescript: { tsconfigPath: 'tsconfig.json' },
})
