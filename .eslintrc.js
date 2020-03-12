module.exports = {
  env: {
    mocha: true,
    node: true,
    es6: true,
    browser: true,
    jquery: true
  },
  globals: {
    chrome: true,
    $: true,
    jQuery: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: ['lodash', '@typescript-eslint'],
  extends: ['eslint:recommended', 'walmart/configurations/es6-node.js'],
  rules: {
    'no-control-regex': 0,
    'array-element-newline': ["error", "consistent"],
    'object-curly-spacing': ["error", "never"],
    //"object-curly-newline": ["error", {"ImportDeclaration": "never", "ExportDeclaration": "never", "ObjectExpression": "always", "ObjectPattern": "always"}],
    "function-call-argument-newline": ['error', 'consistent'],
    "function-paren-newline": ["error", "never"],
    'object-property-newline': ['error', {"allowAllPropertiesOnSameLine": true}],
    'no-process-exit': 0,
    'no-useless-escape': 0,
    'no-param-reassign': 0,
    'max-len': ['error', {code: 350}],
    '@typescript-eslint/explicit-member-accessibility': 0,
    'filenames/match-regex': 0,
    'newline-per-chained-call': 0,
    'array-bracket-newline': 0,
    'array-bracket-spacing': 2,
    'max-nested-callbacks': 0,
    'max-depth': 0,
    'generator-star-spacing': 0,
    complexity: 0,
    'no-console': 0,
    'no-unused-vars': 0,
    'filenames/filenames': 0,
    'no-use-before-define': 0,
    'no-magic-numbers': 0,
    camelcase: 0,
    'consistent-return': 0,
    'max-statements': 0,
    'max-params': 0,
    'no-unused-expressions': 0,
    'no-bitwise': 0,
    'no-script-url': 0,
    'new-cap': 0,
    'no-multi-str': 0,
    'space-before-function-paren': 0,
    'jquery/no-ajax': 0,
    'no-extra-parens': 0,
    'func-style': 0,
    'no-invalid-this': 0,
    'no-return-assign': 0,
    'arrow-parens': 0,
    'no-confusing-arrow': 0,
    'no-case-declarations': 0,
    'no-nested-ternary': 0,
    'no-labels': 0,
    'global-require': 0,
    'no-lonely-if': 0,
    'no-loop-func': 0,
    'no-shadow': 0,
    'one-var': 0,
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        FunctionDeclaration: {body: 1, parameters: 1},
        "ignoredNodes": ["TemplateLiteral"]
      }
    ],
    quotes: ['error', 'single', {avoidEscape: true}]
  }
};
