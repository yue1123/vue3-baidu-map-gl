import path from 'path'
import fs from 'fs'
import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import { highlight } from '../utils/higtlight'
import type Token from 'markdown-it/lib/token'
import type Renderer from 'markdown-it/lib/renderer'

const localMd = MarkdownIt()
const docRoot = process.cwd()
const classReg = /class\=\".*\"/
const akReg = /\sak\=\".*\"/
const vBindRef = /v\-bind\=\"\$attrs\"\n*\s+/

interface ContainerOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?(tokens: Token[], index: number, options: any, env: any, self: Renderer): string
}

export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx) {
      const token = tokens[idx]
      const m = token.info.trim().match(/^demo\s*(.*)$/)
      if (token.nesting === 1 /* means the tag is opening */) {
        const description = (m && m.length > 1 ? m[1] : '').replace(classReg, '')
        // parse attrs
        const attrs = token.info.trim().match(classReg)?.[0]
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''
        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(path.resolve(docRoot, 'examples', `${sourceFile}.vue`), 'utf-8')
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
        return `<Demo ${attrs || ''} source="${encodeURIComponent(
          highlight(source.replace(akReg, '').replace(vBindRef, ''), 'vue')
        )}" path="${sourceFile}" raw-source="${encodeURIComponent(source)}" description="${encodeURIComponent(
          localMd.render(description)
        )}">
        
        `
      } else {
        return `</Demo>`
      }
    }
  } as ContainerOpts)
}
