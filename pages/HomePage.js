const elementActions = require('../util/ElementActions');

class HomePage {

    get HOMEPAGEUSERNAME() {return $('tr.heading3')};
    get BTN_LOGOUT() { return $('[href = "Logout.php"]')}

    verifyHomepageUsername(){
       return elementActions.getText(this.HOMEPAGEUSERNAME);
    }

    logOutFromApp(){
        elementActions.click(this.BTN_LOGOUT);
    }

}
module.exports = new HomePage();