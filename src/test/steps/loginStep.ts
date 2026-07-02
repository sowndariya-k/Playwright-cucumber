import { Given, When, Then } from "@cucumber/cucumber";
import {chromium, Page, Browser, expect} from "@playwright/test"

let browser:Browser;
let page:Page;

Given("User navigates to application", async function () {
  browser=await chromium.launch({headless:false});
  page=await browser.newPage();
  await page.goto("https://bookcart.azurewebsites.net/");
});

Given("User click on the login link", async function () {
    await page.locator('span').filter({ hasText: 'Login' }).first().click();
});

Given("User enter the username as {string}", async function (username: string) {
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
});

Given("User enter the password as {string}", async function (password: string) {
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
});

When("User click on the login button", async function () {
  await page.locator('button.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.mat-mdc-button-base').locator('span').nth(1).click();
});

Then("Login should be success", async function () {
  await expect(page.getByText('sowndariya', { exact: true })).toHaveText('sowndariya');
  console.log("Login successful");
  await browser.close();
});

Then("Login should fail", async function () {
  await expect(page.getByText('Password is required')).toBeVisible();
  console.log("Login failed require password")
  await browser.close();
});