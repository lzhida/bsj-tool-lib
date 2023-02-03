/*
 * @Author: zhidal
 * @Date: 2023-01-31 19:24:59
 * @Description: 将 arrayBuffer 转为其他数据
 * @LastEditors: zhidal
 * @LastEditTime: 2023-02-03 14:28:54
 */

import { getDataView } from './utils';

/**
 * @description: 字节数组转 32 位浮点数
 * @param {number} bytes
 * @param {number} byteOffset
 * @return {number}
 */
function toFloat32(bytes: number[] | Uint8Array, byteOffset = 0): number {
  return getDataView(bytes).getFloat32(byteOffset);
}

/**
 * @description: 字节数组转 64 位浮点数
 * @param {number} bytes
 * @param {*} byteOffset
 * @return {*}
 */
function toFloat64(bytes: number[] | Uint8Array, byteOffset = 0): number {
  return getDataView(bytes).getFloat64(byteOffset);
}

/**
 * @description: 将 8 位有符号整型的字节数组转换为数字
 * @param { number[] | Uint8Array } bytes 字节数组
 * @param byteOffset 偏移量，默认为 0
 * @return { number } 数字
 */
function toInt8(bytes: number[] | Uint8Array, byteOffset = 0): number {
  return getDataView(bytes).getInt8(byteOffset);
}

/**
 * @description: 将 16 位有符号整型的字节数组转换为数字
 * @param { number[] | Uint8Array } bytes 字节数组
 * @param byteOffset 偏移量，默认为 0
 * @param littleEndian 是否为小端字节序，默认或 false 为大端字节序
 * @return { number } 数字
 */
function toInt16(
  bytes: number[] | Uint8Array,
  byteOffset = 0,
  littleEndian = false,
): number {
  return getDataView(bytes).getInt16(byteOffset, littleEndian);
}

/**
 * @description: 将 32 位有符号整型的字节数组转换为数字
 * @param { number[] | Uint8Array } bytes 字节数组
 * @param byteOffset 偏移量，默认为 0
 * @param littleEndian 是否为小端字节序，默认或 false 为大端字节序
 * @return { number } 数字
 */
function toInt32(
  bytes: number[] | Uint8Array,
  byteOffset = 0,
  littleEndian = false,
): number {
  return getDataView(bytes).getInt32(byteOffset, littleEndian);
}

/**
 * @description: 将 64 位有符号整型的字节数组转换为数字
 * @param { number[] | Uint8Array } bytes 字节数组
 * @param byteOffset 偏移量，默认为 0
 * @param littleEndian 是否为小端字节序，默认或 false 为大端字节序
 * @return { bigint } 数字
 */
function toInt64(
  bytes: number[] | Uint8Array,
  byteOffset = 0,
  littleEndian = false,
): bigint {
  return getDataView(bytes).getBigInt64(byteOffset, littleEndian);
}

/**
 * @description: 将 8 位无符号整型的字节数组转换为数字
 * @param { number[] | Uint8Array } bytes 字节数组
 * @param byteOffset 偏移量，默认为 0
 * @return { number } 数字
 */
function toUint8(bytes: number[] | Uint8Array, byteOffset = 0): number {
  return getDataView(bytes).getUint8(byteOffset);
}

/**
 * @description: 将 16 位无符号整型的字节数组转换为数字
 * @param { number[] | Uint8Array } bytes 字节数组
 * @param byteOffset 偏移量，默认为 0
 * @param littleEndian 是否为小端字节序，默认或 false 为大端字节序
 * @return { number } 数字
 */
function toUint16(
  bytes: number[] | Uint8Array,
  byteOffset = 0,
  littleEndian = false,
): number {
  return getDataView(bytes).getUint16(byteOffset, littleEndian);
}

/**
 * @description: 将 32 位无符号整型的字节数组转换为数字
 * @param { number[] | Uint8Array } bytes 字节数组
 * @param byteOffset 偏移量，默认为 0
 * @param littleEndian 是否为小端字节序，默认或 false 为大端字节序
 * @return { number } 数字
 */
function toUint32(
  bytes: number[] | Uint8Array,
  byteOffset = 0,
  littleEndian = false,
): number {
  return getDataView(bytes).getUint32(byteOffset, littleEndian);
}

/**
 * @description: 将 64 位无符号整型的字节数组转换为数字
 * @param { number[] | Uint8Array } bytes 字节数组
 * @param byteOffset 偏移量，默认为 0
 * @param littleEndian 是否为小端字节序，默认或 false 为大端字节序
 * @return { bigint } 数字
 */
function toUint64(
  bytes: number[] | Uint8Array,
  byteOffset = 0,
  littleEndian = false,
): bigint {
  return getDataView(bytes).getBigUint64(byteOffset, littleEndian);
}

export {
  getDataView,
  toFloat32,
  toFloat64,
  toInt16,
  toInt32,
  toInt64,
  toInt8,
  toUint16,
  toUint32,
  toUint64,
  toUint8,
};
