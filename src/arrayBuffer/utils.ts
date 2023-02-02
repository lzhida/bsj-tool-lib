/*
 * @Author: zhidal
 * @Date: 2023-01-31 19:25:39
 * @Description: 通用函数
 * @LastEditors: zhidal
 * @LastEditTime: 2023-02-02 10:16:14
 */

/**
 * @description: 获取 16 进制数据
 * @param {number} data
 * @return {*}
 */
async function getHexString(data: number[] | Uint8Array): Promise<string> {
  try {
    const res = Array.from(data)
      .map((value) => {
        return Number(value).toString(16).padStart(2, '0').toUpperCase();
      })
      .join(' ');
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
}

export { getHexString };
