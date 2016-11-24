var webdriver = require('selenium-webdriver');

chrome_driver = new webdriver.Builder().forBrowser('chrome').build();
ie_driver = new webdriver.Builder().forBrowser('ie').build();
firefox_driver = new webdriver.Builder().forBrowser('firefox').build();