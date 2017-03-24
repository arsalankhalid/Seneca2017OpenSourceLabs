// [INFO] See discussion of node.js exports here:
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` othewise.
 */

exports.isValidEmail = function (email) {
  const senecaEmailFormat = /^[a-z]{3,}[0-9]{0,3}@myseneca.ca$/;
  if (senecaEmailFormat.test(email)) {
    return 'valid';
  }
  return 'invalid';
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
exports.formatSenecaEmail = function (name) {
  const completeName = `${name}@myseneca.ca`;
  return completeName;
};