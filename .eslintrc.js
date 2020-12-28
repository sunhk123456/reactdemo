module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {},
  rules: {
    'no-sparse-arrays': 2, //禁止稀疏数组， [1,,2]
  },
};
