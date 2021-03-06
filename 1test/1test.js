var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing');

test.describe('Yandex weather', function() {
    var driver;

    test.before(function() {
        var options = new chrome.Options();
        options.addArguments(["start-fullscreen"]);

        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build()
        driver.getCapabilities().then(function(caps) {
            console.log(caps);
        });
    });

    test.it('should append query to title', function() {
        driver.get('http://www.yandex.ru');
        var button = driver.wait(until.elementLocated(By.xpath("//div[@class='weather']")), 10000);
        button.click();
    });

    test.after(function() {
        driver.quit();
    });
});