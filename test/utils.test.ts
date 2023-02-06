/*
 * @Author: zhidal
 * @Date: 2023-02-04 10:47:23
 * @Description: 通用函数测试
 * @LastEditors: zhidal
 * @LastEditTime: 2023-02-06 09:59:35
 */

import { describe, expect, it } from 'vitest';
import { utils } from '../src/index';

describe('utils test', () => {
  it('getExportData', () => {
    const data = [
      {
        name: 'Julie',
        // city: 'New Elianborough',
      },
      {
        name: 'Jayson',
        email: 'Tamia_Will@hotmail.com',
      },
      {
        name: 'George',
        city: 'Hartford',
        email: 'Giovanny_Breitenberg6@hotmail.com',
      },
    ];
    const model = [
      {
        displayName: '城市',
        access: 'city',
      },
      {
        displayName: '邮箱',
        access: 'email',
      },
      {
        displayName: '地址',
        access: 'address',
      },
      {
        displayName: '姓名',
        access: 'name',
      },
    ];
    expect(utils.getExportData(data, model)).toEqual([
      ['城市', '', '', 'Hartford'],
      [
        '邮箱',
        '',
        'Tamia_Will@hotmail.com',
        'Giovanny_Breitenberg6@hotmail.com',
      ],
      ['地址', '', '', ''],
      ['姓名', 'Julie', 'Jayson', 'George'],
    ]);
    expect(utils.getExportData(data, model, { position: 'row' })).toEqual([
      ['城市', '邮箱', '地址', '姓名'],
      ['', '', '', 'Julie'],
      ['', 'Tamia_Will@hotmail.com', '', 'Jayson'],
      ['Hartford', 'Giovanny_Breitenberg6@hotmail.com', '', 'George'],
    ]);
  });
});
