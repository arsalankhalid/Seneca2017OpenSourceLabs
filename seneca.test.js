const seneca = require('./seneca');

/**
 * Tests for seneca.isValidEmail()
 */
describe('seneca.isValidEmail()', function() {

  test('returns true for simple myseneca address', function() {
    var simpleEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns false for a non-myseneca address', function() {
    var gmailAddress = 'someone@gmail.com';
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });

  test('returns false for a non string address', function() {
  	var num = 12345;
  	expect(seneca.isValidEmail(num)).toBe(false);	
  });

  test('returns false for a null address', function() {
  	expect(seneca.isValidEmail(null)).toBe(false);
  });

  test('returns false for a leading whitespace', function() {
  	var leadingWhitespaceEmail = ' myshaw@myseneca.ca';
  	expect(seneca.isValidEmail(leadingWhitespaceEmail)).toBe(false);
  });

  test('returns true for a faculty mail address', function() {
  	var facultyEmail = 'david.humphrey@senecacollege.ca';
  	expect(seneca.isValidEmail(facultyEmail)).toBe(true);
  });

  test('returns true for an old seneca mail address', function() {
  	var oldEmail = "akhalid19@mysenecac.on.ca";
  	expect(seneca.isValidEmail(oldEmail)).toBe(true);
  });

});

/**
 * Tests for seneca.formatSenecaEmail()
 */
describe('seneca.formatSenecaEmail()', function() {

  test('adds @myseneca.ca to the end of name', function() {
    var name = "mshaw";
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });
  test('name contains spaces, tabs, or other control characters', function() {
  	var email = " arsa1";
  	expect(seneca.formatSenecaEmail(email)).toBe('arsa1@myseneca.ca');
  });

  test('name is not nulls', function() {
  	var name = null;
  	expect(seneca.formatSenecaEmail(name)).toBe('null');
  });

});