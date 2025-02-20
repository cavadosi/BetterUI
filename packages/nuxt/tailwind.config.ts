import { fileURLToPath } from 'node:url'

const srcDir = fileURLToPath(new URL('../', import.meta.url))

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    srcDir + '/runtime/**/*.{js,ts,vue}', // Ensure it scans runtime directory
    srcDir + '/**/*.{js,ts,vue}', // Include all other files in your module
  ],
  theme: {},
  variants: {
    extend: {},
  },
}
