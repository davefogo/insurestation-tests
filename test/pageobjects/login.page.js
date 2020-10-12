
import Page from './page';

class loginPage extends Page  {
  /**
  * define elements
  */

  get loginButton()  { return $('[name="loginBtn"]'); }
  get welcomeScreen() { return $('#app-container'); }
  get rateQuoteButton() { return $('[name="ctl00$CPH$RateQuoteButton"]'); }
  get secondPageRateQuoteButton() { return $('#CPH_RateButton'); }
  get bridgeButton() { return $('#CPH_ComparisonGrid_BridgeQuoteLink_0'); }
  get okButton() { return $('#CPH_MessagesOKButton'); }
  get product() { return $('#integrationPopup_integrationLinkGridCarriers_IntegrationHyperLink_0'); }
  
  inputFields(field) {
    let fields, selectedField
    
    fields = {
      'userInput': () => { return $('#loginUsername-input'); },
      'passwordInput': () => { return $('#loginPassword-input'); },
      'firstNameInput': () => { return $('#CPH_InsuredFirstNameEntry'); },
      'lastNameInput': () => { return $('#CPH_InsuredLastNameEntry'); },
      'addressInput': () => { return $('#CPH_InsuredAddressEntry'); },
      'secondaryAddressInput': () => { return $('[name="ctl00$CPH$InsuredAddress2Entry"]'); },
      'zipCodeInput': () => { return $('#CPH_ZipCodeEntry'); },
      'countyDropdown': () => { return $('[name="ctl00$CPH$CountyEntry"]'); },
      'timeAtResidenceInput': () => { return $('#CPH_TimeAtResidenceEntry_YearsEntry'); },
      'effectiveDateInput': () => { return $('#CPH_effDateEntry_DateEntry'); },
      'liabilityDropdown': () => { return $('#CPH_ctl61_LiabBILimitsEntry'); },
      'dobInput': () => { return $('[name="ctl00$CPH$driverRepeater$ctl00$DriverDOBEntry$DateEntry"]'); },    
      'genderDropdown': () => { return $('#CPH_driverRepeater_DriverSexEntry_0'); },    
      'maritalDropdown': () => { return $('[name="ctl00$CPH$driverRepeater$ctl00$DriverMaritalEntry"]'); },    
      'priorTimeInput': () => { return $('[name="ctl00$CPH$driverRepeater$ctl00$PriorCoverageEntry$YearsEntry"]'); },
      'priorExpirationDateInput': () => { return $('[name="ctl00$CPH$driverRepeater$ctl00$PriorExpDateEntry$DateEntry"]'); },
      'vinInput': () => { return $('[name="ctl00$CPH$CarRepeater$ctl00$CarVINEntry"]'); },
      'milesInput': () => { return $('[name="ctl00$CPH$CarRepeater$ctl00$AnnualMilesEntry"]'); },      
    }    
    selectedField = fields[field];

    return selectedField();
  }

  /**
   * page methods
   */
  bridge() {
    this.bridgeButton.waitForDisplayed();
    this.bridgeButton.scrollIntoView();
    this.bridgeButton.waitForEnabled();
    this.bridgeButton.click();
    browser.pause(1000);
  }

  checkInput(inputField) {
    return this.inputFields(inputField).getValue();
  }

  clickOkButton() {
    this.okButton.waitForDisplayed();
    this.okButton.waitForEnabled();
    this.okButton.click();
  }

  enterText(inputField, value) {
    this.inputFields(inputField).waitForEnabled();
    this.inputFields(inputField).setValue(value);
    browser.pause(2000);
  }
  
  enterTextPassword(inputField, value) {
    browser.keys(['Tab']);
    browser.pause(1000);
    this.inputFields(inputField).setValue(value);
    browser.pause(2000);
  }

  logIn() {
    this.loginButton.click();
  }

  loggedIn() {
    this.welcomeScreen.waitForDisplayed(1000);
    return this.welcomeScreen.isDisplayed();
  }

  open() {
    super.open('https://insurestation.com');
    browser.pause(1000);
  }

  rateQuote() {
    browser.pause(1000);
    this.rateQuoteButton.waitForDisplayed();
    this.rateQuoteButton.scrollIntoView();
    this.rateQuoteButton.waitForEnabled();
    this.rateQuoteButton.click();
    browser.pause(2000);
  }

  secondPageRateQuote() {
    this.secondPageRateQuoteButton.waitForDisplayed();
    this.secondPageRateQuoteButton.scrollIntoView();
    this.secondPageRateQuoteButton.waitForEnabled();
    this.secondPageRateQuoteButton.click();
    browser.pause(1000);
  }

  selectFromDropdown(inputField, value) {
    browser.keys(['Tab'])
    this.inputFields(inputField).selectByVisibleText(value);
    browser.keys(['Tab'])
    browser.pause(1000);
  }

  selectProduct() {
    this.product.waitForDisplayed();
    this.product.waitForEnabled();
    this.product.click();
    browser.pause(1000);
  }

  swloginhTab() {
    browser.pause(1000);
    browser.swloginhWindow('https://sprinters.live.ptsapp.com/default.cfm');
    browser.pause(1000);
  }

  today() {
    let date = new Date().getMonth() + 1 > 9 ? '' : '0';
    date += new Date().getMonth() + 1;
    date += new Date().getDate() > 9 ? '' : '0';
    date += new Date().getDate();
    date += new Date().getFullYear();

    return date
  }

}

export default new loginPage();