/*
 * @Author: Miya
 * @Date: 2021-03-24 10:19:52
 * @LastEditTime: 2021-03-25 15:28:22
 * @LastEditors: Miya
 * @Description: 格式化时间
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\backend\src\util\formatDate.ts
 * @Version: 1.0
 */

const formatDate = (date: string) => {
  console.log('mtime: ' + date)
  const format = new Date(date);
  const day = format.toLocaleDateString();
  const time = format.toLocaleTimeString()
  console.log('time: ' + time)
  return `${day} ${time}`;
};

export { formatDate };
