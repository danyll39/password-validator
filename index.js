const isLowerCase = (valid) => {
  for (var i = 0; i < valid.length; i++) {
    if (valid[i].toLowerCase() && valid[i] !== valid[i].toUpperCase()) {
      return true
    }
  }

  return false
}
const isUpperCase = (valid) => {
  for (var i = 0; i < valid.length; i++) {
    if (valid[i] === valid[i].toUpperCase() && valid[i] !== valid[i].toLowerCase()) {
      return true
    }
  }

  return false
}
const isNumeric = (valid) => {
  for (var i = 0; i < valid.length; i++) {
    if (!isNaN(valid[i])) {
      return true
    }
  }

  return false
}
const isSpecialCharacter = (valid) => {
  const specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '+', '~', '/', '>', '<']

  for (var i = 0; i < specialCharacter.length; i++) {
    if (valid.includes(specialCharacter[i])) {
      return true
    }
  }

  return false
}
const validLength = (valid) => {
  if (valid.length >= 8) {
    return true
  }

  return false
}
const validatePassword = (valid) => {
  return isLowerCase(valid) && isUpperCase(valid) && isNumeric(valid) && isSpecialCharacter(valid) && validLength(valid)
}

module.exports = validatePassword








console.log(isNumeric('00p0'))
