/*
 * @Author: zhidal
 * @Date: 2023-02-02 10:34:19
 * @Description: arrayBuffer 工具函数测试
 * @LastEditors: zhidal
 * @LastEditTime: 2023-02-03 16:21:27
 */

import { describe, expect, it } from 'vitest';
import { arrayBuffer } from '../src/index';

describe('arrayBuffer to number', () => {
  it('toFloat32', () => {
    expect(arrayBuffer.toFloat32([0x41, 0x45, 0x70, 0xa4])).toBeCloseTo(12.34);
    expect(arrayBuffer.toFloat32([0xc1, 0x45, 0x70, 0xa4])).toBeCloseTo(-12.34);
  });

  it('toFloat64', () => {
    expect(
      arrayBuffer.toFloat64([0x40, 0x28, 0xae, 0x14, 0x7a, 0xe1, 0x47, 0xae]),
    ).toBeCloseTo(12.34);
    expect(
      arrayBuffer.toFloat64([0xc0, 0x28, 0xae, 0x14, 0x7a, 0xe1, 0x47, 0xae]),
    ).toBeCloseTo(-12.34);
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
});

describe('number to arrayBuffer', () => {
  it('getFloat32Bytes', () => {
    expect(arrayBuffer.getFloat32Bytes(12.34)).toEqual(
      new Uint8Array([0x41, 0x45, 0x70, 0xa4]),
    );
    expect(arrayBuffer.getFloat32Bytes(-12.34)).toEqual(
      new Uint8Array([0xc1, 0x45, 0x70, 0xa4]),
    );
  });

  it('getFloat64Bytes', () => {
    expect(arrayBuffer.getFloat64Bytes(12.34)).toEqual(
      new Uint8Array([0x40, 0x28, 0xae, 0x14, 0x7a, 0xe1, 0x47, 0xae]),
    );
    expect(arrayBuffer.getFloat64Bytes(-12.34)).toEqual(
      new Uint8Array([0xc0, 0x28, 0xae, 0x14, 0x7a, 0xe1, 0x47, 0xae]),
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
});

describe('bytesToString', () => {
  it('showBytesString', () => {
    expect(arrayBuffer.showBytesString([0x12, 0xab])).toEqual('12 AB');
    expect(arrayBuffer.showBytesString([0x12, 0xab], { sep: ',' })).toEqual(
      '12,AB',
    );
    expect(arrayBuffer.showBytesString([0x12, 0xab], { prefix: true })).toEqual(
      '0x12AB',
    );
    expect(
      arrayBuffer.showBytesString([0x12, 0xab], { prefix: true, base: 2 }),
    ).toEqual('0b0001001010101011');
    expect(arrayBuffer.showBytesString([0x12, 0xab], { base: 2 })).toEqual(
      '00010010 10101011',
    );
  });

  it('bytesToString', () => {
    expect(
      arrayBuffer.bytesToString([
        0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21,
      ]),
    ).toEqual('hello world!');
    expect(
      arrayBuffer.bytesToString(
        [
          0xc4, 0xe3, 0xba, 0xc3, 0xa3, 0xac, 0xca, 0xc0, 0xbd, 0xe7, 0xa3,
          0xa1,
        ],
        {
          encoding: 'gbk',
        },
      ),
    ).toEqual('你好，世界！');
  });

  it('stringToBytes', () => {
    expect(Array.from(arrayBuffer.stringToBytes('hello world!'))).toEqual([
      0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21,
    ]);
    expect(
      Array.from(arrayBuffer.stringToBytes('你好，世界！', 'gbk')),
    ).toEqual([
      0xc4, 0xe3, 0xba, 0xc3, 0xa3, 0xac, 0xca, 0xc0, 0xbd, 0xe7, 0xa3, 0xa1,
    ]);
  });
});
