const {test, expect} = require('@playwright/test');
// Define a test case for the home page login functionality
test('Home Page', async({page})=>{
 // Navigate to the login page
await page.goto('https://practicetestautomation.com/practice-test-login/');
// Get the page title (but missing await, so it won't work as expected)
const pageTitle=page.title();
console.log('page title is', pageTitle);
 // Get the current URL 
const pageURL = page.url();
console.log('Page URL is', pageURL);
// Verify the page URL to ensure navigation was successful
await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
// Fill in the username field (Ensure the selector #username is correct)
await page.locator('#username').fill("student");
// Fill in the password field
await page.locator('#password').fill("Password123");
// Click the submit button to log in
await page.locator('#submit').click();
})
