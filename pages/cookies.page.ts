import { Page, Locator, expect } from '@playwright/test';

export class Cookies {
    readonly page: Page;
    readonly cookiesBanner: Locator;
    readonly acceptCookiesButton: Locator;


    constructor(page: Page) {
        this.cookiesBanner = page.locator('[data-testid="uc-default-wall"]');
        this.acceptCookiesButton = page.locator('[data-testid="uc-accept-all-button"]');
    }

}
