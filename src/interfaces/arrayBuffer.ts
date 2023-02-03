/*
 * @Author: zhidal
 * @Date: 2023-02-02 19:57:47
 * @Description: 字节数组接口
 * @LastEditors: zhidal
 * @LastEditTime: 2023-02-03 09:40:09
 */

// 字节数组转字符串选项接口
interface BytesToStringOptions {
  fatal?: boolean;
  encoding?: string;
}

export type { BytesToStringOptions };
