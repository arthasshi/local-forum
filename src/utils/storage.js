/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/*
 * @Company: Joinu
 * @Author: aLeng
 * @Date: 2018-10-31 09:59:03
 * @Description: 本地存储文件
 */

/**
 * @msg: localStorage.setItem()
 * @params: {String} name
 */
export const setGstore = (name, context) => {
  if (!name) return;
  if (typeof context !== 'string') {
    context = JSON.stringify(context);
  }
  window.localStorage.setItem(name, context);
};

/**
 * @msg: localStorage.getItem()
 * @params: {Stirng} name
 */
export const getGstore = (name) => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

/**
 * @msg: localStorage.removeItem()
 * @params: {String} name
 */

export const rmGstore = (name) => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

/**
 * @msg: localStorage.clear()
 * @params: null
 */

export const clearG = () => {
  window.localStorage.clear();
};

/**
 * @msg: sessionStorage.setItem()
 * @params: {String} name
 */
export const setSstore = (name, context) => {
  if (!name) return;
  if (typeof context !== 'string') {
    context = JSON.stringify(context);
  }
  window.sessionStorage.setItem(name, context);
};

/**
 * @msg: sessionStorage.getItem()
 * @params: {Stirng} name
 */
export const getSstore = (name) => {
  if (!name) return;
  // eslint-disable-next-line consistent-return
  return window.sessionStorage.getItem(name);
};

/**
 * @msg: sessionStorage.removeItem()
 * @params: {String} name
 */

export const rmSstore = (name) => {
  if (!name) return;
  window.sessionStorage.removeItem(name);
};

/**
 * @msg: sessionStorage.clear()
 * @params: null
 */

export const clearS = () => {
  window.sessionStorage.clear();
};
