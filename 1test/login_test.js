var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing');

test.describe('Login', function() {
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

    test.it('Загружаем http://localhost/litecart/admin/', function() {
    driver.get('http://localhost/litecart/admin/');
        driver.findElement({ name: 'username' }).sendKeys('admin');
        driver.findElement({ name: 'password' }).sendKeys('admin');
        driver.findElement({ name: 'login' }).click();
    });

    test.after(function() {
        driver.quit();
    });
});