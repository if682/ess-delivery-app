module.exports = {
    setupFilesAfterEnv: ["@testing-library/react/cleanup-after-each"],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
  };

