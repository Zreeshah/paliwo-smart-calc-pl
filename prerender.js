
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Extract routes from the pages directory to match App.tsx routes
const routesToPrerender = fs
  .readdirSync(toAbsolute('src/pages'))
  .map((file) => {
    const name = file.replace(/\.tsx$/, '').toLowerCase()
    return name === 'index' ? '/' : `/${name}`
  })

// Ensure directory exists before writing files
const ensureDirectoryExists = (filePath) => {
  const dirname = path.dirname(filePath)
  if (fs.existsSync(dirname)) {
    return true
  }
  ensureDirectoryExists(dirname)
  fs.mkdirSync(dirname)
}

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace('<!--app-html-->', appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    const absolutePath = toAbsolute(filePath)
    
    // Ensure the directory exists before writing the file
    ensureDirectoryExists(absolutePath)
    
    fs.writeFileSync(absolutePath, html)
    console.log('pre-rendered:', filePath)
  }
})()
