/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs')

const root = process.cwd()
const entryTsPath = path.resolve(root, 'es/index.d.ts')

const entryTsContent = fs.readFileSync(entryTsPath).toString()

fs.writeFileSync(
  entryTsPath,
  `/// <reference path="../types/index.d.ts" />
${entryTsContent}
`
)
