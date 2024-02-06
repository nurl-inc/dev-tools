import { defineConfig } from 'tsup'
import { modernConfig, legacyConfig } from '@nurl/configs'

export default defineConfig([
  modernConfig({ entry: ['src/**/*.ts', 'src/**/*.tsx'] }),
  legacyConfig({ entry: ['src/**/*.ts', 'src/**/*.tsx'] }),
])
