import { Page, Locator, expect } from '@playwright/test';

export class SignupPage {
    readonly page: Page;
    readonly cookiesBanner: Locator;
    readonly acceptTerms: Locator;
    readonly submitButton: Locator;
    readonly companyCountry: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly phoneNumber: Locator;
    readonly countryList: Locator;
    readonly companyName: Locator;


    constructor(page: Page) {
        this.cookiesBanner = page.locator('[data-testid="uc-default-wall"]');
        this.acceptTerms = page.locator('label')
            .filter({ has: page.locator('input[name="acceptTos"]') });
        this.submitButton = page.locator('button[type="submit"]');
        this.companyCountry = page.locator('input[name="country"]');
        this.email = page.locator('input[name="email"]');
        this.password = page.locator('input[name="password"]');
        this.firstName = page.locator('input[name="firstname"]');
        this.lastName = page.locator('input[name="lastname"]');
        this.phoneNumber = page.locator('input[name="phoneNumber"]');
        this.countryList = page.locator('[data-testid="autocomplete-menu-portal"]');
        this.companyName = page.locator('input[name="organizationName"]');
    }

}