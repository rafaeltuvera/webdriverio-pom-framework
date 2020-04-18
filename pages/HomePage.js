const elementActions = require('../util/ElementActions');

class HomePage {

    get HOMEPAGEUSERNAME() {return $('tr.heading3')};

    verifyHomepageUsername(){
       return elementActions.getText(this.HOMEPAGEUSERNAME);
    }

}
module.exports = new HomePage();