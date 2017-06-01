export function isNumber(value) {
  var pattern = /[0-9]+/;
  if (pattern.test(value)) {
    return '纯数子';
  } else {
    return '不是纯数字，含有别的字符';
  }
}

export function isPresent(value) {
    if (!value || value==undefined || value == "") {
      return false;
    }
    return true;
}