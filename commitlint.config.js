/*
 * @Description:
 * @Author: zhidal
 * @Date: 2022-12-06 15:00:27
 * @LastEditors: zhidal
 * @LastEditTime: 2022-12-06 15:02:03
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'perf',
        'feat',
        'fix',
        'refactor',
        'docs',
        'chore',
        'style',
        'revert',
        'test',
        'init',
      ],
    ],
  },
};
