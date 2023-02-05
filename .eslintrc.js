module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  root: true,
  // parser: 파싱 옵션으로 eslint가 js 뿐만 아니라 타입 스크립트 문법을 읽을 수 있게 도와준다.
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier']
}
