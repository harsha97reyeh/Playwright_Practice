// Import the 'test' and 'expect' utilities from Playwright's test framework.
// 'test' is used to define test cases, and 'expect' is for assertions.
const{test, expect}=require('@playwright/test')
// Define a test case named 'hover' that uses an async function with a 'page' fixture.
// The 'page' object represents a browser page instance for automation.
test('hover', async({page})=>{
    // Navigate to the login page of the freelance-learn-automation website.
    await page.goto('https://freelance-learn-automation.vercel.app/login')
    // Locate the email input field by its placeholder text and fill it with 'admin@email.com'.
    await page.getByPlaceholder('Enter Email').fill('admin@email.com')
    // Locate the password input field by its placeholder text and fill it with 'admin@123'.
    await page.getByPlaceholder('Enter Password').fill('admin@123')
    // Locate the submit button by its class 'submit-btn' and click it to log in.
    await page.locator('.submit-btn').click()
    // Locate a specific element using an XPath selector and perform a hover action over it to trigger a dropdown or submenu.
    await page.locator('//*[@id="root"]/div/nav/div/div[2]/div[1]/span').hover()
    // Locate a link within the revealed dropdown/submenu (first <a> tag) using an XPath selector
    // and click it to navigate or perform an action.
    await page.locator('//*[@id="root"]/div/nav/div/div[2]/div[1]/div/a[1]').click()
    // Pause execution for 6 seconds (6000 milliseconds) to allow observation
    // of the result or to wait for a page transition to complete.
    await page.waitForTimeout(6000)
})