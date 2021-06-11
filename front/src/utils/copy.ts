/*
 * @Author: Miya
 * @Date: 2021-06-10 04:48:31
 * @LastEditTime: 2021-06-10 05:25:47
 * @LastEditors: Miya
 * @Description: Copy to clipboard
 * @FilePath: \front\src\utils\copy.ts
 */
/**
 * @description: 复制链接地址
 * @param {String} text
 * @return {String} link
 */
export const setCopyText = (text: string) => {
  let transfer = document.createElement('input');
  document.body.appendChild(transfer);
  transfer.value = text;
  transfer.focus();
  transfer.select();
  if (document.execCommand('copy')) {
    document.execCommand('copy');
  }
  transfer.blur();
  console.log('Copy Successed');
  document.body.removeChild(transfer);
};
