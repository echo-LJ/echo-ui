module.exports = {
  root: true,
  env: {
    "browser": true,
  },
  extends: 'plugin:vue/essential',
  rules: {
    'no-console': 'off', // 禁用console
    'no-debugger': 'off', // 禁用debugger
    'space-before-function-paren': 'off', // 强制在function的左括号之前使用一致的空格
    'func-names': 'off', // 要求或禁止使用命名的function表达式
    'no-bitwise': 'off', // 禁用按位运算符
    'no-trailing-spaces': 'off', // 禁用行尾空格
    'comma-dangle': 'off', // 要求或禁止末尾逗号
    'quote-props': 'off', // 要求对象字面量属性名称用引号括起来
    'consistent-return': 'off', //要求return语句要么总是指定返回的值,要么不指定
    'no-plusplus': 'off', // 禁用一元操作符++和--
    'prefer-spread': 'warn', //要求使用扩展运算符而非.apply()
    'semi': 'warn', //要求使用分号代替ASI
    'indent': 'off', //强制使用一致的缩进
    'no-tabs': 'off', //禁用tab
    'no-unused-vars': 'warn', //禁止出现未使用过的变量
    'quotes': 'off', //强制使用一致的反勾号、双引号或单引号
    'no-nested-ternary': 'off',
    'no-return-assign': 'warn', // 禁止在return语句中使用赋值语句
    'prefer-destructuring': 'off', // 优先使用数组和对象解构
    'arrow-parens': 'off', // 要求箭头函数的参数使用圆括号
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
