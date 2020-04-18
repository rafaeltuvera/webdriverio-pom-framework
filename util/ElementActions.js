class ElementActions{

    waitForElementPresent(webElement){
        browser.waitUntil(function(){
            return webElement.waitForExist()
        },10000)

    }

    setValue(webElement, value){
        waitForElementPresent(webElement);
        webElement.setValue(value);
    }

    click(webElement){
        waitForElementPresent(webElement);
        webElement.click();
    }

    getPageTitle(){
        return browser.getTitle();
    }

    getText(webElement){
        waitForElementPresent(webElement);
        return webElement.getText();
    }


}

module.exports = new ElementActions();