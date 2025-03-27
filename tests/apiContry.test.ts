import { test, expect } from '@playwright/test';

test('Check if Sweden is in the list of countries', async ({ request }) => {
    const response = await request.get('https://circula-qa-challenge.vercel.app/api/countries?locale=en&intent=REGISTRATION');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(Array.isArray(responseBody)).toBeTruthy();
    const countryNames = responseBody.map((country: { name: string }) => country.name);
    expect(countryNames).toContain('Sweden');
});
