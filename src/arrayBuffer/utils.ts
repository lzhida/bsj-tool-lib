/*
 * @Author: zhidal
 * @Date: 2023-01-31 19:25:39
 * @Description: 通用函数
 * @LastEditors: zhidal
 * @LastEditTime: 2023-02-07 09:33:26
 */

/**
 * @description: 获取数据视图
 * @param { number[] | Uint8Array } bytes 字节数组
 * @return { DataView }
 */
function getDataView(bytes: number[] | Uint8Array): DataView {
  const view = new DataView(new ArrayBuffer(bytes.length));
  for (let i = 0; i < bytes.length; i++) {
    view.setUint8(i, bytes[i]);
  }
  return view;
}

export { getDataView };
