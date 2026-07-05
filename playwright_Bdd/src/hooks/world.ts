import{setWorldConstructor, World} from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import{transports, format} from "winston";

export class CustomWorld extends World{
    browser!:Browser;
    context!:BrowserContext;
    page!:Page;
}
setWorldConstructor(CustomWorld);