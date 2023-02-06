/*
 * @Author: zhidal
 * @Date: 2023-02-04 10:30:06
 * @Description: 通用工具接口
 * @LastEditors: zhidal
 * @LastEditTime: 2023-02-04 10:30:30
 */

/**
 * @description: 导出数据模型
 * @return {*}
 */
interface ExportModel {
  displayName: string; // 导出列表
  access: string; // 导出字段 key
}

export type { ExportModel };
