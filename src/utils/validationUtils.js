function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const result = regex.test(email);
  if (!result) {
    return {
      status: 400,
      body: { message: '"email" must be a valid email' },
    };
  }
}

const validateName = (name) => {
  if (name.length < 8) {
    return {
      status: 400,
      body: {
        message: '"displayName" length must be at least 8 characters long',
      },
    };
  }
};

const validatePassword = (password) => {
  if (password.length < 6) {
    return {
      status: 400,
      body: { message: '"password" length must be at least 6 characters long' },
    };
  }
};

module.exports = {
  validateEmail,
  validateName,
  validatePassword,
};