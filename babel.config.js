module.exports = {
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
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
}
