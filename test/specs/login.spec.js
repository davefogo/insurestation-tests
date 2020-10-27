import loginPage      from '../pageobjects/login.page';
import assert         from 'assert';

/*
	This is a BDD test using Mocha JavaScript framework
*/

describe('insurestation Log in', () => {
  it('Opens the login page', () => {
    loginPage.open();
    assert.strictEqual(browser.getTitle(), 'insurestation');
  });
  it('Enters User Info', () => {
    let user = 'wagent';  
    loginPage.enterText('userInput', user);
    assert.strictEqual(loginPage.checkInput('userInput'), user);
  });
  it('Enters Password Info', () => {
    let password = 'Test1234';
    loginPage.enterTextPassword('passwordInput', password);
    assert.strictEqual(loginPage.checkInput('passwordInput'), password);
  });
  it('Logs in', () => {
    loginPage.logIn();
    assert.strictEqual(loginPage.loggedIn(), true);
  });
});
