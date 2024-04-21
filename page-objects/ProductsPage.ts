import { Page, Locator } from "playwright";

export default class ProductPage {

    readonly page : Page
    readonly productsBtn : Locator
    readonly cartBtn : Locator
    readonly hoverOver : Locator
    readonly pickProduct : Locator

    constructor(page:Page){
        this.page = page;
        this.productsBtn = this.page.getByText("Products")
        this.cartBtn = this.page.getByText('View Cart')
        this.hoverOver = this.page.locator('.features_items > div:nth-child(4)')
        this.pickProduct = this.page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn')
    }

    async navigateToHomePage(url: string){
        await this.page.goto("/");

    }

    async navigateToProductsPage() {
        await this.productsBtn.click()

    }

    async viewCart() {
        await this.cartBtn.click()

    }

    async hoverOverProduct() {
        await this.hoverOver.click()

    }

    async pickAProduct() {
        await this.pickProduct.click()

    }
}