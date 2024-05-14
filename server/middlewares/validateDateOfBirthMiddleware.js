const validator = require('validator');

const validateDateOfBirth = (value) => {
  if (!validator.isISO8601(value)) {
    throw new Error('Date of birth is not in valid ISO 8601 format');
  }
  if (!validator.isBefore(value, new Date().toISOString())) {
    throw new Error('Date of birth must be in the past');
  }
  const birthDate = new Date(value);
  const now = new Date();
  const age = now.getFullYear() - birthDate.getFullYear();
  const monthDiff = now.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
    age--;
  }
  if (age < 1 || age > 100) {
    throw new Error('Age must be between 1 and 100 years');
  }
  return true;
};


module.exports = { validateDateOfBirth };
