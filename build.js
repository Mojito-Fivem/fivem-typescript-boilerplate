const esbuild = require('esbuild')
const path = require('path')

const buildPath = path.resolve(__dirname, 'dist');
const DEV = process.env.NODE_ENV == "dev"

// Server
esbuild.build({
  entryPoints: ['./server/server.ts'],
  outdir: path.resolve(buildPath, 'server'),
  bundle: true,
  minify: true,
  platform: 'node',
  target: 'node14',
  watch: DEV,
  logLevel: "info"
}).catch(() => process.exit(1))

// Client
esbuild.build({
  entryPoints: ['./client/client.ts'],
  outdir: path.resolve(buildPath, 'client'),
  bundle: true,
  minify: true,
  platform: 'browser',
  target: 'es2020',
  watch: DEV,
  logLevel: "info"
}).catch(() => process.exit(1))