import { assert } from "console";

const webdriver = require('selenium-webdriver');
const {until} = require('selenium-webdriver');
const {by} = require('selenium-webdriver');
const {browser} = require('selenium-webdriver');

 
 const script = require('jest');
  
 const url = 'localhost:3000'
  
 const getElementXpath = async (driver, xpath, timeout = 3000) => {
   const el = await driver.wait(until.elementLocated(by.xpath(xpath)), timeout);
   return await driver.wait(until.elementIsVisible(el), timeout);
 };
  
  
 const getElementName = async (driver, name, timeout = 3000) => {
   const el = await driver.wait(until.elementLocated(by.name(name)), timeout);
   return await driver.wait(until.elementIsVisible(el), timeout);
 };
  
 const getElementId = async (driver, id, timeout = 3000) => {
   const el = await driver.wait(until.elementLocated(by.id(id)), timeout);
   return await driver.wait(until.elementIsVisible(el), timeout);
 };
  
 // declaring the test group  This is our test case scenario that we will execute from our first test script. 

 describe("tests",()=>{
    test('it performs a validation of title on the home page', async () => {
        await browser.get(url)
        const title = await browser.findElement(by.tagName('h1')).getText()
        expect(title).toContain('SeleniumHQ Browser Automation')
      })
 })
  
 
  