const loginPage = require('../pages/LoginPage');
const credentials = require('../util/Credentials');

const homePage = require('../pages/HomePage');

describe("Login in page test", function(){

    it ("Verify login is successful", function(){
        
        expect(browser.getUrl()).equals('http://demo.guru99.com/V4/');
        expect(loginPage.verifyHomepageHeader()).equals(true);
        loginPage.login(credentials.username, credentials.password);

        expect(homePage.verifyHomepageUsername()).to.contain(credentials.username);
        

    })


})