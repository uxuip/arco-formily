import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  target: 'es6',
  format: ['esm'],
  sourcemap: true,
  dts: true,
  clean: true,
})
