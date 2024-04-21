import {test, expect} from '@playwright/test';
import Checkout from '../page-objects/CheckoutPage';
import HomePage from '../page-objects/HomePage';
import ProductPage from '../page-objects/ProductsPage';


test("end-to-end", async ({page}) => {

    const homePage = new HomePage(page);
    const checkoutPage = new Checkout(page);
    const productsPage = new ProductPage(page)

    await homePage.navigateToHomePage("/")
    await productsPage.navigateToProductsPage()
    await productsPage.hoverOverProduct()
    await productsPage.pickAProduct()
    await productsPage.viewCart()
    await checkoutPage.clickCheckoutBtn()
    await checkoutPage.clickOrderBtn()
    await checkoutPage.inputPaymentCredentials("testertdl", "123", "123", "123", "123")
    await checkoutPage.clickPayBtn()


   })

