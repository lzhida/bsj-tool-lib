/*
 * @Author: zhidal
 * @Date: 2023-02-02 19:26:46
 * @Description: 字节数组 与 字符串之间的转换
 * @LastEditors: zhidal
 * @LastEditTime: 2023-02-03 16:22:03
 */

import { BytesToStringOptions } from '../interfaces';
import { getDataView } from './utils';
import iconv from 'iconv-lite';

/**
 * @description: 字节数组显示
 * @param {number} data
 * @return {*}
 */
function showBytesString(
  data: number[] | Uint8Array,
  options?: { sep?: string; prefix?: boolean; base?: 2 | 16 },
): string {
  const { sep = ' ', prefix = false, base = 16 } = options || {};
  let res: any[] = [];
  if (base === 16) {
    res = Array.from(data).map((value) => {
      return Number(value).toString(base).padStart(2, '0').toUpperCase();
    });
  } else {
    res = Array.from(data).map((value) => {
      return Number(value).toString(base).padStart(8, '0');
    });
  }
  if (prefix) {
    let pre = '';
    switch (base) {
      case 2: {
        pre = '0b';
        break;
      }
      case 16: {
        pre = '0x';
        break;
      }
    }
    return pre + res.join('');
  } else {
    return res.join(sep);
  }
}

/**
 * @description: 字符串转 buffer
 * @param {string} str
 * @param {*} encoding
 * @return {*}
 */
function stringToBytes(str: string, encoding = 'utf-8') {
  const buffer = iconv.encode(str, encoding);
  return buffer;
}

/**
 * @description: buffer 转字符串
 * @param {number} data
 * @param {BytesToStringOptions} options
 * @return {*}
 */
function bytesToString(data: number[], options?: BytesToStringOptions) {
  const encoding = options?.encoding || 'utf-8';
  const textDecoder = new TextDecoder(encoding, { fatal: options?.fatal });
  const buffer = getDataView(data);
  return textDecoder.decode(buffer);
}

export { showBytesString, stringToBytes, bytesToString };
