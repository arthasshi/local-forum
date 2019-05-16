/* eslint-disable no-underscore-dangle */
/*
 * @Company: Joinu
 * @Author: aLeng
 * @Date: 2018-10-31 10:11:16
 * @Description: 常用工具函数
 */

/**
 * @msg: 判断输入的字符数
 * @params: {String} string
 */
export function judgeCharLength(string) {
  if (typeof string !== 'string') {
    throw new Error('请传入String类型参数');
  }
  const isChinese = /[\u4e00-\u9fa5]/g;
  let len = 0;
  if (isChinese.test(string)) {
    len = string.match(isChinese).length;
  }
  const strLen = string.length;
  return strLen + len;
}

/**
 * @msg: 去除字符串空格
 * @params: {String}
 */
export function _trim(string) {
  if (typeof string !== 'string') {
    throw new Error('params type must be String');
  }
  return string.replace(/^[\s\uFEFF]+| [\s\uFEFF]+$/g, '');
}

/*
   把字符串中间几位设置位星号
 */
export function formatStr2Star(str) {
  // eslint-disable-next-line radix
  return `${str.substr(0, parseInt(str.split('').length / 2 - 2))}****${str.substr(parseInt(str.split('').length / 2 + 2), str.split('').length)}`;
}
