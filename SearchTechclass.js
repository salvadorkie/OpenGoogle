const{Builder, By, Key, util} = require("selenium-webdriver");
async function fun(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://google.com");
    //driver.get("http://techclass.io");
    await driver.findElement(By.name("q")).sendKeys("techclass.io",Key.RETURN);
}
fun();