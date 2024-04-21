import {test as setup} from '@playwright/test';
import HomePage from '../../page-objects/HomePage';


const authFile =".auth/testertdl-user-auth.json";

setup("Sign in with a user", async ({page}) => {

    const homePage = new HomePage(page);
    await homePage.navigateToHomePage("/")
    await homePage.navigateToLoginPage()
    await homePage.inputLoginData("testertdl@testertdl.com", "testertdl" )
    await homePage.clickLoginBtn()
    await homePage.assertLoggedIn("Logged in as testertdl");

    await page.context().storageState({ path: authFile })

})