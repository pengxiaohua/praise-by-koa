/**
 * 真实页面点赞自动化测试
 */
var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('firefox')
.build();

var i = 0; //初始化点击次数为0

driver.get('http://localhost:8081/index/index');
do {
    driver.findElement(By.id('thumb')).click();
    i++;
} while (i < 11)

// driver.findElement(By.id('thumb')).click();
// driver.wait(until.titleIs('PraiseButton'), 1000);

driver.quit();