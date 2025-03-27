import { expect, test } from '@playwright/test';
import { SignupPage } from '../pages/singnup.page';
import { Cookies } from '../pages/cookies.page';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page }) => {
  const cookies = new Cookies(page);
  await page.addLocatorHandler(
    await cookies.cookiesBanner,
    async () => {
      await cookies.acceptCookiesButton.click();
    }
  );
});


test("should be able to choose country", async ({ page }) => {

  const signUpPage = new SignupPage(page);
  const searchCountry = "Sweden";


  await page.goto('/users/sign_up');

  await signUpPage.email.fill(faker.internet.email({ provider: 'work.com' }));
  await signUpPage.password.fill('Test1234');
  await signUpPage.acceptTerms.click({ position: { x: 0, y: 0 } }); 
  await signUpPage.submitButton.click();

  await signUpPage.firstName.fill(faker.person.firstName());
  await signUpPage.lastName.fill(faker.person.lastName());
  await signUpPage.phoneNumber.fill(faker.phone.number());
  await signUpPage.submitButton.click();

  await signUpPage.companyCountry.click();

  await signUpPage.countryList.locator('li', { hasText: searchCountry })
    .click({ force: true });
})