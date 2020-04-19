const loginPage = require('../pages/LoginPage');
const data = require('../util/Data');

const homePage = require('../pages/HomePage');

let credentials;

describe("Login in page test", function(){

    it ("Verify login is successful", function(){
        credentials = data.credentials;

        expect(browser.getUrl()).equals('http://demo.guru99.com/V4/');
        expect(loginPage.verifyHomepageHeader()).equals(true);
        loginPage.login(credentials.username, credentials.password);

        expect(homePage.verifyHomepageUsername()).to.contain(credentials.username);
        
    })


})