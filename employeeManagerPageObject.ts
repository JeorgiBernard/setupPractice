import { By,until,WebDriver } from "selenium-webdriver";

export class methodsPage {
    driver: WebDriver;
    url: string ='https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html';

    header: By =By.css('.titleText');
    addEmployee: By =By.name('addEmployee');
    newEmployee: By =By.xpath('//li[text()="New Employee"]');
    nameInput: By =By.name('nameEntry');
    phoneInput: By =By.name('phoneEntry');
    titleInput: By =By.name('titleEntry');
    saveBtn: By =By.id('saveBtn');

    constructor(driver:WebDriver) {
        this.driver = driver;
    };

    async navigate(){
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.header));
    };
    async click(elementBy: By){
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    };

    async setInput(elementBy: By, keys: any) {
        await this.driver.wait(until.elementLocated(elementBy)).clear();
        return this.driver.findElement(elementBy).sendKeys(keys);
    };

    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).getText();
    };
};