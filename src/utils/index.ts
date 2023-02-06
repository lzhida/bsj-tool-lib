/*
 * @Author: zhidal
 * @Date: 2023-02-04 10:28:22
 * @Description:
 * @LastEditors: zhidal
 * @LastEditTime: 2023-02-06 10:00:26
 */

import { ExportModel } from '../interfaces';

/**
 * @description: 将 table 的对象数组数据转换为支持excel 导出的二维数组数据。
 * @param {Record<string, any>[]} data
 * @param {ExportModel[]} filed
 * @param {Record<string, any>} options
 * @return {string[][]}
 */
function getExportData(
  data: Record<string, any>[],
  filed: ExportModel[],
  options?: {
    position: 'row' | 'column';
  },
): string[][] {
  const { position = 'column' } = options || {};
  if (position === 'row') {
    const res: string[][] = [];
    const header = filed.map((item) => {
      return item.displayName;
    });
    res.push(header);
    data.forEach((item) => {
      const row: string[] = new Array(filed.length).fill('');
      Object.keys(item).forEach((key) => {
        const index = filed.findIndex((value) => value.access === key);
        if (index >= 0) {
          row[index] = String(item[key]);
        }
      });
      res.push(row);
    });
    return res;
  } else {
    // 生成显示名称行
    const res = filed.map((item) => {
      return [item.displayName];
    });
    data.forEach((item, rowIndex) => {
      for (const key in res) {
        // res[Number(key + 1)][rowIndex] = '';
        res[key]?.push('');
      }
      Object.keys(item).forEach((key) => {
        // 根据数据的 key 寻找索引
        const colIndex = filed.findIndex((value) => value.access === key);
        if (colIndex >= 0) {
          res[colIndex][rowIndex + 1] = String(item[key]);
        }
      });
    });
    return res;
  }
}

export { getExportData };
