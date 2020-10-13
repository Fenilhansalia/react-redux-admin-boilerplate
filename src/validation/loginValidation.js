import validator from 'validator/es';

function validateLogin(data) {
  let errors = {};
  if (validator.isEmpty(data.email.trim())) {
    errors.email = 'Please provide an email.';
  } else if (!validator.isEmail(data.email.trim()))
    errors.email = 'Please provide an email.';
  if (validator.isEmpty(data.password.trim()))
    errors.password = 'Please provide a password.';

  return { errors, isValid: Object.keys(errors).length <= 0 };
}

export default validateLogin;
