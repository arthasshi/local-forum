// 常用正则表达式
export default {
  password: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,
  phone: /^\d{11}$/,
  email: /^(?!_)\w+@[a-zA-Z0-9]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/,
};
