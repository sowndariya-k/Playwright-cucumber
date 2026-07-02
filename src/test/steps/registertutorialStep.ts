import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect} from '@playwright/test';
//import {PageFixture} from './../../hooks/pageFixture';
import { CustomWorld } from '../../hooks/world';

setDefaultTimeout(60000);
Given("the user is on the TutorialsNinja website", async function (this:CustomWorld) {
    await this.page.goto("https://tutorialsninja.com/demo/");
});

When("the user clicks My Account", async function (this:CustomWorld) {
    await this.page.locator("//span[text()='My Account']").click();
});

When("the user clicks Register", async function (this:CustomWorld) {
    await this.page.locator("//a[text()='Register']").click();

});

When("user enters first name {string}", async function (this:CustomWorld,fname: string) {
    await this.page.locator("#input-firstname").fill(fname);
});

When("user enters last name {string}", async function (this:CustomWorld, lname: string) {
    await this.page.locator("#input-lastname").fill(lname);
});

When('user enters email {string}', async function (this: CustomWorld, email:string) {
  if (email==='dynamic') {
    email = `sownd${Date.now()}@gmail.com`;
  }

  await this.page.locator('#input-email').fill(email);
});

When("user enters telephone {string}", async function (this:CustomWorld, phone: string) {
    await this.page.locator("#input-telephone").fill(phone);
});

When("user enters password {string}", async function (this:CustomWorld, password: string) {
    await this.page.locator("#input-password").fill(password);
});

When("user enters confirm password {string}", async function (this:CustomWorld, cpassword: string) {
    await this.page.locator("#input-confirm").fill(cpassword);
});

When("user selects the privacy policy", async function (this:CustomWorld) {
    await this.page.locator("input[name='agree']").check();
});

When("the user clicks Continue button", async function (this:CustomWorld) {
    await this.page.locator("input[value='Continue']").click();
});

Then("user should see Your Account Has Been Created", async function (this:CustomWorld) {
    await expect(this.page.locator("//h1[text()='Your Account Has Been Created!']")).toBeVisible();
});

Then("User should see error message", async function (this:CustomWorld) {
    await expect(this.page.getByText('Warning: E-Mail Address is already registered!', { exact: true })).toHaveText('Warning: E-Mail Address is already registered!');
});