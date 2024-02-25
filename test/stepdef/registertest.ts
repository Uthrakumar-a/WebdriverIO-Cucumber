import { Given, Then, When } from '@wdio/cucumber-framework';
import { generateRandomEmail, navigateToUrl } from '../common/utils.ts';
import registerform from '../pages/registerform.ts';
import jsonData from '../testdata/registerdata.json' assert { type: 'json' };

Given('the user is on the registration page', async () => {
    await navigateToUrl();
});

When('the user enters the first name as {string}', async (firstName: string) => {
    await registerform.enterFirstname(firstName);
});

When('the user enters the email as {string}', async (email: string) => {
    await registerform.enterEmail(await generateRandomEmail());
});

When('the user enters the phone number as {string}', async (phoneNumber: string) => {
    await registerform.enterPhone(phoneNumber);
});

When('the user chooses the gender', async () => {
    await registerform.chooseGender();
});

When('the user chooses the years of experience', async () => {
    await registerform.chooseYoe();
});

When('the user chooses skills', async () => {
    await registerform.chooseSkills();
});

When('the user chooses tools', async () => {
    await registerform.chooseTools();
});

When('the user enters details as {string}', async (details: string) => {
    await registerform.enterDetails(details);
});

When('the user clicks the submit button', async () => {
    await registerform.clickSubmitButton();
});

Then('the registration should be successful', async () => {
    expect(await registerform.getSuccessMsg()).toEqual(jsonData.Assert.submitmsg);
});
