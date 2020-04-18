class ElementActions{

    waitForElementPresent(webElement){
        browser.waitUntil(function(){
            return webElement.waitForExist()
        },10000)

    }

    setValue(webElement, value){
        this.waitForElementPresent(webElement);
        webElement.setValue(value);
    }

    click(webElement){
        this.waitForElementPresent(webElement);
        webElement.click();
    }

    getPageTitle(){
        return browser.getTitle();
    }

    getText(webElement){
        this.waitForElementPresent(webElement);
        return webElement.getText();
    }

    moveToElement(webElement){
        this.waitForElementPresent(webElement);
        webElement.moveTo();
    }

    scrollIntoElement(webElement){
        webElement.isDisplayedInViewport();
        webElement.scrollIntoView();
    }


}

module.exports = new ElementActions();