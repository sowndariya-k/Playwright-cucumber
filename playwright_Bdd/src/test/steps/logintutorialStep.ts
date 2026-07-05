import {Given, When, Then, setDefaultTimeout} from '@cucumber/cucumber'
import { expect} from '@playwright/test';
//import {PageFixture} from './../../hooks/pageFixture';
import { CustomWorld } from '../../hooks/world';
setDefaultTimeout(6000);
Given('User navigate to the tutorialWebsite', async function (this:CustomWorld) {
  //await PageFixture.page.goto("https://tutorialsninja.com/demo/");
  await this.page.goto("https://tutorialsninja.com/demo/");
  
});

Given('User click Myaccount link', async function (this:CustomWorld) {
  await this.page.locator('i.fa.fa-user').click();
});

Given('User click the login link', async function (this:CustomWorld) {
  await this.page.getByRole('link', { name: 'Login' }).click();
});

Given('User enter the email as {string}', async function (this:CustomWorld,email:string ) {
  await this.page.getByRole('textbox', { name: 'E-Mail Address' }).fill(email);
});

Given('User enter the password1 as {string}',async function(this:CustomWorld,password1:string){
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password1);
});

When('User click login button', async function (this:CustomWorld) {
  await this.page.locator('input.btn.btn-primary').click();
});

Then('User should see Myaccount', async function (this:CustomWorld) {
  await expect(this.page.locator('h2:has-text("My Account")')).toBeVisible();
  console.log("Login successful");
});

Then('User should see the unsuccess error message', async function (this:CustomWorld) {
  await expect(this.page.getByText('Warning: No match for E-Mail Address and/or Password.', { exact: true })).toHaveText('Warning: No match for E-Mail Address and/or Password.');
  console.log("login failed");
});

