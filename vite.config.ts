import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'


const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root,
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  base: '/Campus.Connect/',
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(root,  'index.html'),
        login: resolve(root, 'Auth/login/index.html'),
        activities: resolve(root, 'Activities/index.html'),
        activity: resolve(root, 'Activity/index.html'),
        shows: resolve(root, 'Activity/Shows/index.html'),
        addShow: resolve(root, 'Activity/Shows/Add/index.html'),
        createTemplate: resolve(root, 'Activity/Shows/CreateTemplate/index.html'),
        show: resolve(root, 'Activity/Shows/Show/index.html'),
        assignRoles: resolve(root, 'Activity/Shows/Show/Assign/index.html'),
        createSchedule: resolve(root, 'Activity/Shows/Show/CreateSchedule/index.html'),
        conflictForm: resolve(root, 'Activity/Shows/Show/ConflictForm/index.html'),
        calendar: resolve(root, 'Calendar/index.html'),
        settings: resolve(root, 'Activity/Settings/index.html'),
        messages: resolve(root, 'Activity/Messages/index.html'),
        resources: resolve(root, 'Activity/Shows/Show/Resources/index.html'),
      }
    }
  }
})
