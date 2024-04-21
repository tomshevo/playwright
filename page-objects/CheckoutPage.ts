import { Page, Locator } from "playwright";

export default class Checkout{

    readonly page : Page
    readonly nameInput : Locator
    readonly cardNrInput : Locator
    readonly cvcInput : Locator
    readonly expirationMmInput : Locator
    readonly expirationYyInput : Locator
    readonly payBtn : Locator
    readonly checkoutBtn : Locator
    readonly orderBtn : Locator

    constructor(page:Page){
        this.page = page;
        this.nameInput = this.page.getByTestId("name-on-card")
        this.cardNrInput = this.page.getByTestId("card-number")
        this.cvcInput = this.page.getByTestId("cvc")
        this.expirationMmInput = this.page.getByTestId("expiry-month")
        this.expirationYyInput = this.page.getByTestId("expiry-year")
        this.payBtn = this.page.getByTestId("pay-button")
        this.checkoutBtn = this.page.getByText('Proceed To Checkout')
        this.orderBtn = this.page.getByText('Place Order')
    }

    async navigateToHomePage(url: string){
        await this.page.goto("/");

    }

    async inputPaymentCredentials(nameCard: string, cardNr: string, cvc: string, expirationmm: string, expirationyy: string) {
        await this.nameInput.fill(nameCard)
        await this.cardNrInput.fill(cardNr)
        await this.cvcInput.fill(cvc)
        await this.expirationMmInput.fill(expirationmm)
        await this.expirationYyInput.fill(expirationyy)
    }

    async clickPayBtn() {
        await this.payBtn.click()
    }
    
    async clickCheckoutBtn() {
        await this.checkoutBtn.click()
    }

    async clickOrderBtn() {
        await this.orderBtn.click()

    }
}