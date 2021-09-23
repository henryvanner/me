const process = require('process')

const isDevMode = process.env.NODE_ENV === 'development'

module.exports = {
  plugins: [
    isDevMode && 'react-refresh/babel',
  ].filter(Boolean),
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3.12',
        targets: {
          ie: '11',
          node: 'current',
        },
        useBuiltIns: 'usage',
      },
    ],
    [
      '@babel/preset-react',
      { runtime: 'automatic' },
    ],
    [
      '@babel/preset-typescript',
      {
        allExtensions: true,
        isTSX: true,
      },
    ],
  ],
}
