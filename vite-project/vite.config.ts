import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  const repoName = 'Mini-Budget-Tracker'

  return {
    base: process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/',
    plugins: [react()],
  }
})
