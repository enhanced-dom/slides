const eslintConfigFactory = require('@enhanced-dom/lint').eslintConfigFactory

module.exports = eslintConfigFactory({
  ignore: ['**/*.d.ts'],
  rules: {
    "react/no-unknown-property": ['error', { ignore: ['sx'] }]
  }
})
