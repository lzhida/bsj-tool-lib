/*
 * @Author: zhidal
 * @Date: 2023-02-02 10:34:19
 * @Description: arrayBuffer 工具函数测试
 * @LastEditors: zhidal
 * @LastEditTime: 2023-02-02 14:03:19
 */

import { describe, expect, it } from 'vitest';
import { arrayBuffer } from '../src/index';

describe('arrayBuffer to number', () => {
  it('toUint8', () => {
    expect(arrayBuffer.toUint8([0x12])).toBe(18);
    expect(() => arrayBuffer.toUint8([])).toThrowError(
      'Offset is outside the bounds of the DataView',
    );
  });

  it('toUint16', () => {
    expect(arrayBuffer.toUint16([0x12, 0x34])).toBe(4660);
    expect(() => arrayBuffer.toUint16([])).toThrowError(
      'Offset is outside the bounds of the DataView',
    );
  });

  it('toUint32', () => {
    expect(arrayBuffer.toUint32([0x12, 0x34, 0x56, 0x78])).toBe(305419896);
    expect(() => arrayBuffer.toUint32([])).toThrowError(
      'Offset is outside the bounds of the DataView',
    );
  });

  it('toUint64', () => {
    expect(
      arrayBuffer.toUint64([0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc, 0xde, 0xf1]),
    ).equal(BigInt('0x123456789abcdef1'));
    expect(() => arrayBuffer.toUint64([])).toThrowError(
      'Offset is outside the bounds of the DataView',
    );
  });

  it('toInt8', () => {
    expect(arrayBuffer.toInt8([0x12])).toBe(0x12);
    expect(arrayBuffer.toInt8([0xee])).toBe(-0x12);
  });

  it('toInt16', () => {
    expect(arrayBuffer.toInt16([0x12, 0x34])).toBe(0x1234);
    expect(arrayBuffer.toInt16([0xed, 0xcc])).toBe(-0x1234);
  });

  it('toInt32', () => {
    expect(arrayBuffer.toInt32([0x12, 0x34, 0x56, 0x78])).toBe(0x12345678);
    expect(arrayBuffer.toInt32([0xed, 0xcb, 0xa9, 0x88])).toBe(-0x12345678);
  });

  it('toInt64', () => {
    expect(
      arrayBuffer.toInt64([0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc, 0xde, 0xf1]),
    ).toBe(BigInt('0x123456789abcdef1'));
    expect(
      arrayBuffer.toInt64([0xed, 0xcb, 0xa9, 0x87, 0x65, 0x43, 0x21, 0x0f]),
    ).toBe(-BigInt('0x123456789abcdef1'));
  });
});

describe('number to arrayBuffer', () => {
  it('getUint8Bytes', () => {
    expect(arrayBuffer.getUint8Bytes(0x12)).toEqual(new Uint8Array([0x12]));
  });

  it('getUint16Bytes', () => {
    expect(arrayBuffer.getUint16Bytes(0x1234)).toEqual(
      new Uint8Array([0x12, 0x34]),
    );
  });

  it('getUint32Bytes', () => {
    expect(arrayBuffer.getUint32Bytes(0x12345678)).toEqual(
      new Uint8Array([0x12, 0x34, 0x56, 0x78]),
    );
  });

  it('getUint64Bytes', () => {
    expect(arrayBuffer.getUint64Bytes(BigInt('0x123456789abcdef1'))).toEqual(
      new Uint8Array([0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc, 0xde, 0xf1]),
    );
  });

  it('getInt8Bytes', () => {
    expect(arrayBuffer.getInt8Bytes(0x12)).toEqual(new Uint8Array([0x12]));
    expect(arrayBuffer.getInt8Bytes(-0x12)).toEqual(new Uint8Array([0xee]));
  });

  it('getInt16Bytes', () => {
    expect(arrayBuffer.getInt16Bytes(0x1234)).toEqual(
      new Uint8Array([0x12, 0x34]),
    );
    expect(arrayBuffer.getInt16Bytes(-0x1234)).toEqual(
      new Uint8Array([0xed, 0xcc]),
    );
  });

  it('getInt32Bytes', () => {
    expect(arrayBuffer.getInt32Bytes(0x12345678)).toEqual(
      new Uint8Array([0x12, 0x34, 0x56, 0x78]),
    );
    expect(arrayBuffer.getInt32Bytes(-0x12345678)).toEqual(
      new Uint8Array([0xed, 0xcb, 0xa9, 0x88]),
    );
  });

  it('getInt64Bytes', () => {
    expect(arrayBuffer.getInt64Bytes(BigInt('0x123456789abcdef1'))).toEqual(
      new Uint8Array([0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc, 0xde, 0xf1]),
    );
    expect(arrayBuffer.getInt64Bytes(-BigInt('0x123456789abcdef1'))).toEqual(
      new Uint8Array([0xed, 0xcb, 0xa9, 0x87, 0x65, 0x43, 0x21, 0x0f]),
    );
  });
});
