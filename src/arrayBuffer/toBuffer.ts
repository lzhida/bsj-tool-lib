/*
 * @Author: zhidal
 * @Date: 2023-01-31 19:25:09
 * @Description: 将其他数据转为 arrayBuffer
 * @LastEditors: zhidal
 * @LastEditTime: 2023-02-02 10:11:04
 */

/**
 * @description: 将数值写入到视图中，获得其字节数组，大端字节序
 * @param { number } len 长度
 * @param setNum 设置函数
 * @return { void }
 */
function getUint8Array(
  len: number,
  setNum: (view: DataView) => void,
): Uint8Array {
  const buffer = new ArrayBuffer(len); //指定字节长度
  setNum(new DataView(buffer)); //根据不同的类型调用不同的函数来写入数值
  return new Uint8Array(buffer); //创建一个字节数组，从缓存中拿取数据
}

/**
 * @description: 将数字转换为 32 位浮点型的字节数组
 * @param { number } num 数字
 * @param littleEndian 是否为小端字节序，默认或 false 为大端字节序
 * @return { Uint8Array } 字节数组
 */
function getFloat32Bytes(num: number, littleEndian = false): Uint8Array {
  return getUint8Array(4, function (view) {
    view.setFloat32(0, num, littleEndian);
  });
}

/**
 * @description: 将数字转换为 64 位浮点型的字节数组
 * @param { number } num 数字
 * @param littleEndian 是否为小端字节序，默认或 false 为大端字节序
 * @return { Uint8Array } 字节数组
 */
function getFloat64Bytes(num: number, littleEndian = false): Uint8Array {
  return getUint8Array(8, function (view) {
    view.setFloat64(0, num, littleEndian);
  });
}

/**
 * @description: 将数字转换为 64 位浮点型的字节数组
 * @param { number } num 数字
 * @return { Uint8Array } 字节数组
 */
function getInt8Bytes(num: number): Uint8Array {
  return getUint8Array(1, function (view: DataView) {
    view.setInt8(0, num);
  });
}

/**
 * @description: 将数字转换为 16 位有符号整型的字节数组
 * @param { number } num 数字
 * @param littleEndian 是否为小端字节序，默认或 false 为大端字节序
 * @return { Uint8Array } 字节数组
 */
function getInt16Bytes(num: number, littleEndian = false): Uint8Array {
  return getUint8Array(2, function (view) {
    view.setInt16(0, num, littleEndian);
  });
}

/**
 * @description: 将数字转换为 32 位有符号整型的字节数组
 * @param { number } num 数字
 * @param littleEndian 是否为小端字节序，默认或 false 为大端字节序
 * @return { Uint8Array } 字节数组
 */
function getInt32Bytes(num: number, littleEndian = false): Uint8Array {
  return getUint8Array(4, function (view) {
    view.setInt32(0, num, littleEndian);
  });
}

/**
 * @description: 将数字转换为 64 位有符号整型的字节数组
 * @param { number } num 数字
 * @param littleEndian 是否为小端字节序，默认或 false 为大端字节序
 * @return { Uint8Array } 字节数组
 */
function getInt64Bytes(num: bigint, littleEndian = false): Uint8Array {
  return getUint8Array(8, function (view) {
    view.setBigInt64(0, num, littleEndian);
  });
}

/**
 * @description: 将数字转换为 8 位无符号整型的字节数组
 * @param { number } num 数字
 * @return { Uint8Array } 字节数组
 */
function getUint8Bytes(num: number): Uint8Array {
  return getUint8Array(1, function (view) {
    view.setUint8(0, num);
  });
}

/**
 * @description: 将数字转换为 16 位无符号整型的字节数组
 * @param { number } num 数字
 * @param littleEndian 是否为小端字节序，默认或 false 为大端字节序
 * @return { Uint8Array } 字节数组
 */
function getUint16Bytes(num: number, littleEndian = false): Uint8Array {
  return getUint8Array(2, function (view) {
    view.setUint16(0, num, littleEndian);
  });
}

/**
 * @description: 将数字转换为 32 位无符号整型的字节数组
 * @param { number } num 数字
 * @param littleEndian 是否为小端字节序，默认或 false 为大端字节序
 * @return { Uint8Array } 字节数组
 */
function getUint32Bytes(num: number, littleEndian = false): Uint8Array {
  return getUint8Array(4, function (view) {
    view.setUint32(0, num, littleEndian);
  });
}

/**
 * @description: 将数字转换为 64 位无符号整型的字节数组
 * @param { bigint } num 数字
 * @param littleEndian 是否为小端字节序，默认或 false 为大端字节序
 * @return { Uint8Array } 字节数组
 */
function getUint64Bytes(num: bigint, littleEndian = false): Uint8Array {
  return getUint8Array(8, function (view) {
    view.setBigUint64(0, num, littleEndian);
  });
}

export {
  getFloat32Bytes,
  getFloat64Bytes,
  getInt16Bytes,
  getInt32Bytes,
  getInt64Bytes,
  getInt8Bytes,
  getUint16Bytes,
  getUint32Bytes,
  getUint64Bytes,
  getUint8Bytes,
  getUint8Array,
};
