let ValidateURL = require("valid-url");
const checkValidURL = (url) => {
  return ValidateURL.isUri(url);
};

module.exports = { checkValidURL };
