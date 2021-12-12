const {Builder, By, Key, util, Actions, List, WebElement, Arrays} = require("selenium-webdriver");
async function test(){
    let driver = await new Builder().forBrowser("chrome").build();
    
        await driver.get('https://opensource-demo.orangehrmlive.com/');
        await driver.findElement(By.id("txtUsername")).sendKeys("Admin", Key.ENTER);
        await driver.findElement(By.id("txtPassword")).sendKeys("admin123", Key.ENTER);
        await driver.findElement(By.id("menu_admin_viewAdminModule")).click();
        await driver.findElement(By.id("menu_admin_Job")).click();
        await driver.findElement(By.id("menu_admin_workShift")).click();
        await driver.findElement(By.id("btnAdd")).click();
        await driver.findElement(By.id("workShift_name")).sendKeys("LateShift");
        await driver.findElement(By.id("workShift_workHours_from")).sendKeys("06:00");
        await driver.findElement(By.id("workShift_workHours_to")).sendKeys("18:00");
        await driver.findElement(By.id("workShift_availableEmp")).sendKeys("Admin A");
        await driver.findElement(By.id("btnAssignEmployee")).click();
        await driver.findElement(By.id("workShift_availableEmp")).sendKeys("Odis Adalwin");
        await driver.findElement(By.id("btnAssignEmployee")).click();
        await driver.findElement(By.id("workShift_availableEmp")).sendKeys("Lisa Andrews");
        await driver.findElement(By.id("btnAssignEmployee")).click();
        await driver.findElement(By.id("btnSave")).click();
        await driver.sleep(3*1000);
        const element = await driver.findElement(By.xpath("//td[@class='left']/a[text()='LateShift']"));
        const row = await element.findElement(By.xpath("./../.."));
        await row.findElement(By.xpath('td[text()="06:00"]'));
        await row.findElement(By.xpath('td[text()="18:00"]'));
        await row.findElement(By.xpath('td[text()="12.00"]'));
        if (
            
              await row.findElement(By.xpath("//td[@class='left']/a[text()='LateShift']")).isDisplayed()
             &&
            
              await row.findElement(By.xpath('td[text()="06:00"]')).isDisplayed()
            
             &&
            
              await row.findElement(By.xpath('td[text()="18:00"]')).isDisplayed()
             &&
            await row.findElement(By.xpath('td[text()="12.00"]')).isDisplayed()
         ) {
              console.log("Shift is displayed");
            await row.findElement(By.xpath('td[1]/input')).click();
          }
        await driver.findElement(By.id("btnDelete")).click();
        await driver.findElement(By.id('dialogDeleteBtn')).click();

        try {
            await row.findElement(By.xpath("//td[@class='left']/a[text()='LateShift']")).isDisplayed()
          } catch (e) {
            console.log('Shift is deleted');
                      }
};
test();