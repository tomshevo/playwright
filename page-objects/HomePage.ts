import { Page, Locator, expect } from "@playwright/test";

export default class HomePage{

    readonly page : Page
    readonly signInBtn : Locator
    readonly emailInput : Locator
    readonly passwordInput : Locator
    readonly loginBtn : Locator
    readonly loggedUser : Locator

    constructor(page:Page){
        this.page = page;
        this.signInBtn = this.page.getByText("Signup / Login") 
        this.emailInput = this.page.getByTestId("login-email")
        this.passwordInput = this.page.getByTestId("login-password")
        this.loginBtn = this.page.getByTestId("login-button")
        this.loggedUser = this.page.locator('Logged in as testertdl')
        // await expect(page.getByText('Logged in as testertdl')).toBeVisible();
    }

    async navigateToHomePage(url: string){
        await this.page.goto("/");

    }

    async navigateToLoginPage() {
        await this.signInBtn.click()

    }

    async inputLoginData(email: string, password: string) {
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
    }

    async clickLoginBtn() {
        await this.loginBtn.click()
    }

    async assertLoggedIn(text: string) {
        await expect(this.page.getByText(text)).toBeVisible()
      }
}