module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended'
  ],
  root: true,
  env: {
    node: true
  },
  // parser: 파싱 옵션으로 eslint가 js 뿐만 아니라 타입 스크립트 문법을 읽을 수 있게 도와준다.
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  overrides: [
    {
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true
      },
      files: '**/*.ts'
    }
  ]
}
