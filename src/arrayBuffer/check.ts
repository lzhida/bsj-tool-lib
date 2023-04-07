/*
 * @Author: zhidal
 * @Date: 2023-02-07 09:31:03
 * @Description: 字节数据校验
 * @LastEditors: zhidal
 * @LastEditTime: 2023-02-07 10:03:18
 */

/**
 * @description: 校验和
 * @param {number[] | Uint8Array} bytes
 * @return {*}
 */
function checkSum(bytes: number[] | Uint8Array): number {
  // TODO: 算法不明确
  const res =
    Array.from(bytes).reduce((prev: number, curr: number) => {
      return prev + curr;
    }) % 0xff;
  return res;
}

/**
 * @description: 异或检验
 * @param {number[] | Uint8Array} bytes
 * @return {*}
 */
function xorCheck(
  bytes: number[] | Uint8Array,
  options?: {
    initValue?: number;
  },
): number {
  const { initValue = 0 } = options || {};
  return Array.from(bytes).reduce((prev: number, curr: number) => {
    return prev ^ curr;
  }, initValue);
}

export { checkSum, xorCheck };
