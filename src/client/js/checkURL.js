const checkValidURL = (url) => {
  let ValidateURL = require("valid-url");
  return ValidateURL.isUri(url);
};

module.exports = { checkValidURL };
