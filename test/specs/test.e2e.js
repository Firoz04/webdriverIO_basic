const { expect, browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await browser.pause(2000);
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!')
        );
        await browser.pause(2000);
    });
    

    it('Verify Site Title', async () => {
        const siteTitle = await browser.getTitle();
        console.log(`Site Tite is: ${siteTitle}`);
        
    });
});



