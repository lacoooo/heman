module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'arrow-parens': 0,
    'space-before-function-paren': 0,
    'semi': 0,
    'one-var': 0,
    'eqeqeq': 0,
    "no-mixed-spaces-and-tabs": [0],
    "no-unused-vars": [2, { 
      "vars": "local"
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}