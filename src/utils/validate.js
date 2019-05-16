/** 此文件定义了一些表单的验证规则** */

export function validatePwd(password) {
  const pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6}$/; // 6位数字字母组合
  return pwdReg.test(password); // 匹配返回true
}
export function validateMail(mail) {
  const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  return mailReg.test(mail);
}

export function validateTel(tel) {
  const telReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
  // ^1[0-9]{10}$ 验证手机号码为11位
  return telReg.test(tel);
}
export function mbTel(tel) {
  const telReg = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
  // ^1[0-9]{10}$ 验证手机号码为11位
  return telReg.test(tel);
}
