import { fileURLToPath } from 'node:url'
import { defineNuxtModule, installModule, createResolver, addComponentsDir, addPlugin } from '@nuxt/kit'
import { resolve } from 'pathe'

// Define options for the module
export interface ModuleOptions {
  css?: boolean // Option to include custom Tailwind CSS file
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  defaults: {
    css: true, // Default to include Tailwind CSS file
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('../src/runtime', import.meta.url))

    // Install @nuxtjs/tailwindcss dynamically
    await installModule('@nuxtjs/tailwindcss')

    // Add components directory
    addComponentsDir({
      path: resolve(runtimeDir, 'components'), // Path to components folder
      pathPrefix: false,
      prefix: '', // No prefix for component names
      global: true, // Make components globally available
    })

    // Transpile runtime directory
    nuxt.options.build.transpile.push(runtimeDir)

    // Add custom plugin
    addPlugin(resolver.resolve('./runtime/plugin'))

    // Extend TailwindCSS configuration to include runtime directory
    nuxt.hook('tailwindcss:config', (tailwindConfig) => {
      if (Array.isArray(tailwindConfig.content)) {
        tailwindConfig.content.push(resolve(runtimeDir, '**/*.{js,ts,vue}'))
      }
      else if (tailwindConfig.content && typeof tailwindConfig.content === 'object') {
        tailwindConfig.content.files = tailwindConfig.content.files || []
        tailwindConfig.content.files.push(resolve(runtimeDir, '**/*.{js,ts,vue}'))
      }

      // Access extended colors from the Tailwind config
      const extendedColors = tailwindConfig.theme?.extend?.colors || {}

      // Pass the extended colors to your button theme
      nuxt.options.runtimeConfig.public.buttonThemeColors = extendedColors as { [key: string]: string }
    })
  },
})
