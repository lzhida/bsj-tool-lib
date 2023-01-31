/*
 * @Author: zhidal
 * @Date: 2022-12-09 15:22:41
 * @Description:
 * @LastEditors: zhidal
 * @LastEditTime: 2022-12-16 19:58:29
 */

import { describe, expect, it } from 'vitest';
import { foo } from '../src/index';

describe('global', () => {
  it('init', () => {
    expect(foo).toBe(1);
  });
});
