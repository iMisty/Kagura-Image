/*
 * @Author: Miya
 * @Date: 2021-03-24 10:19:52
 * @LastEditTime: 2021-03-24 18:21:11
 * @LastEditors: Miya
 * @Description: 格式化时间
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\backend\src\util\formatDate.ts
 * @Version: 1.0
 */

const formatDate = (date: String) => {
  const format = date.split('T');
  const days = format[0].split('-');
  const times = format[1].split(':');
  
  let year = days[0];
  let mouth = days[1];
  let day = days[2];
  let hour = times
};
