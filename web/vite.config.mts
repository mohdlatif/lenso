import dns from 'dns'

// import { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

//tsconfigPaths()
import redwood from '@redwoodjs/vite'

// So that Vite will load on localhost instead of `127.0.0.1`.
// See: https://vitejs.dev/config/server-options.html#server-host.
dns.setDefaultResultOrder('verbatim')

const viteConfig = {
  plugins: [redwood(), tsconfigPaths()],
}

export default defineConfig(viteConfig)
