const configs = require('@enhanced-dom/webpack').configs
const path = require('path')

module.exports = (_, argv) => {
  const willExport = argv.mode !== 'none'
  return configs.typedStylesConfigFactory({
    raw: false,
    filePaths: ['./src/components/scroll-top/scroll-top.style.pcss', './src/components/toc/heading2.style.pcss'],
    outputPath: willExport ? path.resolve('./dist') : undefined,
  })
}
