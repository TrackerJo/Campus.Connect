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
  base: '/',
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(root,  'index.html'),
        login: resolve(root, 'Auth/index.html'),
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
        event: resolve(root, 'Calendar/Event/index.html'),
        printEvent: resolve(root, 'Calendar/Event/Print/index.html'),
        schedule: resolve(root, 'Activity/Shows/Show/Schedule/index.html'),
        printSchedule: resolve(root, 'Activity/Shows/Show/Schedule/Print/index.html'),
        members: resolve(root, 'Activity/Members/index.html'),
        allResources: resolve(root, 'Resources/index.html'),
        actor: resolve(root, 'Activity/Shows/Show/Actor/index.html'),
        profiles: resolve(root, 'Profiles/index.html'),
      }
    }
  }
})
