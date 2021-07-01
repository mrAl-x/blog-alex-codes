
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/al_x/Workspace/alex-codes/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/al_x/Workspace/alex-codes/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/al_x/Workspace/alex-codes/src/pages/index.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/al_x/Workspace/alex-codes/src/pages/using-typescript.tsx")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/al_x/Workspace/alex-codes/src/templates/blog-post.js"))
}

