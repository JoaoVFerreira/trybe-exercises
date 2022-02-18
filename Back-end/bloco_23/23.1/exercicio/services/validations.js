const isPasswordValid = (password) => password.length > 6 || !password === '';

const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isNameValid = (first, last) => {
  if (typeof first && typeof last === 'string' 
    && first.length > 0 && last.length > 0) {
    return true
  }
  return false;
}


module.exports = {
  isPasswordValid,
  isEmailValid,
  isNameValid
};
