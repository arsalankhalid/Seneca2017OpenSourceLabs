var seneca = require('./seneca');

exports.isValidEmail = function isValidEmail(email) {
  return email.test(/@myseneca.ca$/);
};

test('isValid returns true for simple myseneca address', function() {
  var simpleEmail = 'someone@myseneca.ca';
  expect(seneca.isValidEmail(simpleEmail)).toBe(true);
});