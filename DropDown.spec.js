// Import the 'test' and 'expect' utilities from Playwright's test framework.
// 'test' is used to define test cases, and 'expect' is for assertions to validate conditions.
const{test, expect}=require('@playwright/test')
// Define a test case named 'DropDown' that uses an async function with a 'page' fixture.
// The 'page' object represents a browser page instance for automation.
test('DropDown',async({page})=>{
    // Navigate to the login page of the freelance-learn-automation website.
   await page.goto('https://freelance-learn-automation.vercel.app/login')
   // Locate a link inside the login form container using an XPath selector and click it to access a registration page with a dropdown.
   await page.locator('//*[@id="login_container"]/form/div/a').click()
   // Locate the dropdown with ID 'state' and select the option labeled 'Bihar'.
   await page.locator('#state').selectOption({label:'Bihar'})
   // Pause execution for 6 seconds to observe the selection
   await page.waitForTimeout(6000)
   // Select the option with the value 'Goa' from the same 'state' dropdown.
   await page.locator('#state').selectOption({value:'Goa'})
   // Wait another 6 seconds to observe or allow for page updates.
   await page.waitForTimeout(6000)
   // Select the option at index 12 (13th option, since indexing starts at 0) in the 'state' dropdown.
   await page.locator('#state').selectOption({index:12})
   // Wait 6 seconds again, likely for observation or to ensure the selection is processed.
   await page.waitForTimeout(6000)
   // Retrieve the text content of the 'state' dropdown element.
   // For a <select> element, this typically returns the text of the currently selected option.
   const DropDown=await page.locator('#state').textContent()
   // Log the string 'DropDown Options' concatenated with the text content of the selected option.
   console.log('DropDown Options'+DropDown)
   // Assert that the text content of the selected option includes 'Madhya Pradesh'..
   await expect(DropDown.includes('Madhya Pradesh')).toBeTruthy()
})