const elementActions = require('../util/ElementActions');

class LoginPage {

    //locators
    get PAGEHEADER() {return $('.barone')};
    get USERNAME() { return $('[name="uid"]')};
    get PASSWORD() { return $('[name="password"]')};
    get BTN_LOGIN() {return $('[name="btnLogin"]')};

    verifyHomepageHeader(){
        return this.PAGEHEADER.isDisplayed();
    }

    login(username, password){
        elementActions.setValue(this.USERNAME, username);
        elementActions.setValue(this.PASSWORD, password);
        elementActions.click(this.BTN_LOGIN);
    }

}
module.exports = new LoginPage();