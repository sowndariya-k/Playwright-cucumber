import{Before, After} from '@cucumber/cucumber';
import {chromium, Browser, Page} from '@playwright/test';
//import { PageFixture } from './pageFixture';
import { CustomWorld } from './world';
//let browser:Browser;

Before(async function(this:CustomWorld){
    //browser=await chromium.launch({headless:false});
    //const context =await browser.newContext();
    //const page= await context.newPage();
    //PageFixture.page=page;
    this.browser=await chromium.launch({headless:false});
    this.context =await this.browser.newContext();
    this.page= await this.context.newPage();
});

After (async function(){
    //await PageFixture.page.close();
    //await browser.close();
    await this.page.close();
    await this.browser.close();
    await this.context.close();
})