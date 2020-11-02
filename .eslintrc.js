module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',

  plugins: [
    'extra-rules',
    'react-hooks'
  ],
  extends: [
    'standard',
    'standard-react',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ]
}
