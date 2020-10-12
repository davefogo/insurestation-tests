
import loginPage    from '../pageobjects/login.page';
import assert       from 'assert';

/*
	This is a BDD test using Mocha JavaScript framework
*/

describe('insurestation Log in', () => {
  it('Opens the login page', () => {
    loginPage.open();
    assert.strictEqual(browser.getTitle(), 'insurestation');
  });
  // it('Enters User Info', () => {
  //   let user = 'nicholas.fidanza@sprintersinsurance.com';  
  //   loginPage.enterText('userInput', user);
  //   assert.strictEqual(loginPage.checkInput('userInput'), user);
  // });
  // it('Enters Password Info', () => {
  //   let password = 'Spr1nt1ng!';
  //   loginPage.enterTextPassword('passwordInput', password);
  //   assert.strictEqual(loginPage.checkInput('passwordInput'), password);
  // });
  // it('Logs in', () => {
  //   loginPage.logIn()
  //   assert.strictEqual(loginPage.loggedIn(), true);
  // });
});

// describe('Obtains a new quote', () =>{
//   describe('Enters first and last names', () => {
//     it('first name', () => {
//       let firstName = 'Jared';
//       loginPage.enterText('firstNameInput', firstName);
//       assert.strictEqual(loginPage.checkInput('firstNameInput'), firstName);
//     })
//     it('last name', () => {
//       let lastName = 'Dunn';
//       loginPage.enterText('lastNameInput', lastName);
//       assert.strictEqual(loginPage.checkInput('lastNameInput'), lastName);
//     })
//   })
  
//   describe('Enters address information', () => {
//     it('street and house number', () => {
//       let address = '9050 N Capital Of Texas Hwy';
//       let secondaryAddress = '101'
//       loginPage.enterText('addressInput', address);
//       assert.strictEqual(loginPage.checkInput('addressInput'), address);
//       loginPage.enterText('secondaryAddressInput', secondaryAddress);
//       assert.strictEqual(loginPage.checkInput('secondaryAddressInput'), secondaryAddress);
//     })
//     it('zip code', () => {
//       let zipCode = '78759';
//       // browser.keys(['Tab']);
//       loginPage.enterText('zipCodeInput', '\b\b\b\b\b\b\b\b\b' + zipCode);
//       // assert.strictEqual(loginPage.checkInput('zipCodeInput'), zipCode);
//     })

//     it('county', () => {
//       let county = 'TRAVIS';
//       loginPage.selectFromDropdown('countyDropdown', county);
//       assert.strictEqual(loginPage.checkInput('countyDropdown'), county);
//     })
//     it('time at residence', () => {
//       let timeAtResidence = '1';
//       loginPage.enterText('timeAtResidenceInput', timeAtResidence );
//       assert.strictEqual(loginPage.checkInput('timeAtResidenceInput'), timeAtResidence);
//     })
//   })
  
//   describe('Enters general information and coverages', () => {
//     it('effective date', () => {
//       let effectiveDate = '\b\b\b\b\b\b\b\b' + loginPage.today();
//       loginPage.enterText('effectiveDateInput', effectiveDate);
//       // assert.strictEqual(loginPage.checkInput('effectiveDateInput'), loginPage.today());
//     })
//     it('liability option', () => {
//       let liability = '30/60';
//       loginPage.selectFromDropdown('liabilityDropdown', liability);
//       assert.strictEqual(loginPage.checkInput('liabilityDropdown'), liability);
//     })
//   })

//   describe('Enters driver information', () => {
//     it(' DOB', () => {
//       let dob = '09141975';
//       loginPage.enterText('dobInput', '\b\b\b\b\b\b\b\b' + dob);
//       // assert.strictEqual(loginPage.checkInput('dobInput'), dob);
//     })
//     it('gender', () => {
//       let gender = 'Male';
//       loginPage.selectFromDropdown('genderDropdown', gender);
//       // assert.strictEqual(loginPage.checkInput('genderDropdown'), gender);
//     })
//     it('marital', () => {
//       let marital = 'Single';
//       loginPage.selectFromDropdown('maritalDropdown', marital);
//       // assert.strictEqual(loginPage.checkInput('maritalDropdown', marital));
//     })
//   })

//   describe('Enters driver attributes', () => {
//     it('time with prior insurance', () => {
//       let priorTime = '1';
//       loginPage.enterText('priorTimeInput', priorTime);
//       assert.strictEqual(loginPage.checkInput('priorTimeInput'), priorTime) 
//     })
//     it('prior expiration date', () => {
//       let priorExpirationDate = '\b\b\b\b\b\b\b\b' + loginPage.today();
//       loginPage.enterText('priorExpirationDateInput', priorExpirationDate);
//       // assert.strictEqual(loginPage.checkInput('priorExpirationDateInput'), priorExpirationDate)
//     })
//   })

//   describe('Enters vehicle information', () => {
//     it('vin', () => {
//       let vin = 'JTHBF30GX36001050';
//       loginPage.enterText('vinInput', vin);
//       browser.keys(['Tab']);
//       assert.strictEqual(loginPage.checkInput('vinInput'), vin);
//     })
//   })
  
//   describe('Enters vehicle attributes', () => {
//     it('vehicle milage', () => {
//       let miles = '12000';
//       loginPage.enterText('milesInput', miles);
//       assert.strictEqual(loginPage.checkInput('milesInput'), miles);
//     })
//   })

//   describe('Submits the information', () => {
//     it('click on quote', () => {
//       loginPage.rateQuote();
//       assert.strictEqual(browser.getTitle(), 'login TurboRater - Carrier Selection[Jared Dunn]');
//     })
//     it('click on rate in second page', () => {
//       loginPage.secondPageRateQuote();
//       assert.strictEqual(browser.getTitle(), 'login TurboRater - Comparison[Jared Dunn]');
//     })
//   })
  
//   describe('Bridges the quote to silvervine', () => {
//     it('click on bridge', () => {
//       loginPage.bridge();
//       assert.strictEqual(browser.getTitle(), 'login TurboRater - Comparison[Jared Dunn]');
//     })
//     it('click on messgae', () => {
//       loginPage.clickOkButton();
//     })
//     it('select product on pop-up', () => {
//       loginPage.selectProduct();
//     })
//     it('swloginh to sv tab', () => {
//       loginPage.swloginhTab();
//       assert.strictEqual(browser.getTitle(), 'Sprinters | Policy Tracking System');
//     })
//   })
// })
