const fs = require('fs')

let data = ''

function appendContent(path) {
   const files = fs.readdirSync(path, { encoding: 'utf-8' })

   files.forEach((f) => {
      if (fs.statSync(path + '/' + f).isFile()) {
         if (f.endsWith('.d.ts') && path + '/' + f != './dist/index.d.ts') {
            data += `/// <reference path="${path.replace('./dist', '.') + '/' + f}" />\n`
         }
      } else {
         appendContent(path + '/' + f)
      }
   })
}
appendContent('./dist')

// copy the data above the file
const copied_data = fs.readFileSync('./dist/index.d.ts', { encoding: 'utf-8' })

fs.writeFileSync('./dist/index.d.ts', data)
fs.appendFileSync('./dist/index.d.ts', copied_data)
