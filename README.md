# Approach Overview  

## Technologies Used:  
- **Playwright**  
- **TypeScript**  

My approach includes **GitHub Actions** for continuous integration, ensuring that tests are executed automatically.  

---

##  Installation and Running Tests  

### 1️ Clone the Repository  
```sh
git clone https://github.com/RummyCodes/expensing-hw
```

## 2️ Install dependencies:
```
npm install
```
## 3️ Run all tests:
```
npx playwright test
```
## 4️ To run specific tests:
```
npx playwright test tests/apiContry.test.ts
npx playwright test tests/countryUI.test.ts
```

# Detailed cheklist: 
## Task 2: 
Android: Add error message for character limit for purpose field

### Character Counter Display
- [ ] Ensure that the character counter appears when the user types the 500th character.
- [ ] Verify that the character counter updates dynamically as the user types.

### Character Limit Handling (1,000 Characters)
- [ ] Confirm that the user can continue typing beyond 1,000 characters.
- [ ] Validate that an error state is triggered when the text exceeds 1,000 characters.
- [ ] Ensure the field remains editable even after exceeding 1,000 characters.
- [ ] Check that the error state is removed once the text is reduced to 1,000 characters or below.


### Error State & CTA Behavior
- [ ] Verify that the field turns red when exceeding 1,000 characters.
- [ ] Confirm that the CTA (Save/Submit) is disabled when the character count exceeds 1,000.
- [ ] Ensure the CTA becomes active again when the character count is reduced to 1,000 or below.
- [ ] Test that error styling disappears (not red) once the character count is within the allowed limit.


### Suggestions Behavior
- [ ] Ensure that text suggestions (e.g., autocomplete, predictive text) are displayed while typing up to 100 characters.
- [ ] Verify that suggestions are no longer displayed once the text surpasses 100 characters.


## Task 3: 
iOS: Strong password policy

### Old Password Input
- [ ] Ensure the old password field is present and required before submitting.
- [ ] Verify that the old password is validated only after clicking the CTA.
- [ ] Confirm that if the old password is incorrect, an error message is displayed as per the design.
- [ ] Ensure that after an incorrect old password attempt, the user can retry without refreshing the page.

### New Password Validation
- [ ] Verify that the new password field is present and required.
- [ ] Check that entering fewer than 8 characters triggers a validation error.
- [ ] Confirm that a new password with no numerical characters triggers an error.
- [ ] Ensure that a new password with no letters triggers an error.
- [ ] Validate that the password is accepted when it meets all criteria:
- At least 8 characters long
- Contains at least one numerical character
- Contains at least one letter

### CTA (Submit Button) Behavior
- [ ] Ensure the CTA remains disabled until:
- The old password is entered.
- The new password meets all validation criteria.
- [ ] Verify that the CTA becomes active once both conditions are met.
- [ ] Confirm that clicking the CTA triggers validation of the old password.

### Error Handling
- [ ] If the old password is incorrect, an error message appears as per the design.
- [ ] Ensure the user can re-enter the correct old password without refreshing the page.
- [ ] Validate that when the new password does not meet the criteria, an appropriate error message appears.

### Success Flow
- [ ] Check that after entering the correct old password and a valid new password, a success message is displayed.
- [ ] Confirm that after a successful password update, the user is redirected to the settings page.
- [ ] Verify that the new password is properly saved and can be used for login.
