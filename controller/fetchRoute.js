const express = require("express");
const router = express.Router();
const puppeteer = require("puppeteer");

exports.flipkartMobile = async (req, res) => {
    async function scrape() {
        const browser = await puppeteer.launch({})
        const page = await browser.newPage()
        await page.goto('https://www.flipkart.com/search?sid=tyy%2C4io&otracker=CLP_Filters&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3DMax')
        await page.waitForSelector('._3pLy-c')

        const productName = await page.$$eval('._4rR01T',
            divs => divs.map(({ innerText }) => innerText));
        const productRating = await page.$$eval('._2_R_DZ',
            divs => divs.map(({ innerText }) => innerText));
        const productDetails = await page.$$eval('._1xgFaf',
            divs => divs.map(({ innerText }) => innerText));
        const offerPrice = await page.$$eval('._30jeq3',
            divs => divs.map(({ innerText }) => innerText));
        const productPrice = await page.$$eval('._3I9_wc',
            divs => divs.map(({ innerText }) => innerText));
        const productdelivery = await page.$$eval('._3tcB5a',
            divs => divs.map(({ innerText }) => innerText));
        const productExchange = await page.$$eval('._2ZdXDB',
            divs => divs.map(({ innerText }) => innerText));
        // _2ZdXDB
        let Products = [];
        for (let i = 0; i < productName.length; i++) {
            Products.push({
                Name: productName[i],
                Rating: productRating[i],
                Details: productDetails[i],
                OfferPrice: offerPrice[i],
                productPrice: productPrice[i],
                Delivery: productdelivery[i],
                ExchangeOffer: productExchange[i]
            });

        }
        if(!Products){
            res.send("error fetching details")
        }
        res.send(Products);
        browser.close()
    }
    scrape();
};

exports.snapdealTShirt = async (req, res) => {
    async function scrape() {
        const browser = await puppeteer.launch({})
        const page = await browser.newPage()
        await page.goto('https://www.snapdeal.com/search?keyword=tshirt&santizedKeyword=&catId=&categoryId=0&suggested=false&vertical=&noOfResults=20&searchState=&clickSrc=go_header&lastKeyword=&prodCatId=&changeBackToAll=false&foundInAll=false&categoryIdSearched=&cityPageUrl=&categoryUrl=&url=&utmContent=&dealDetail=&sort=rlvncy')
        await page.waitForSelector('.product-tuple-description');
        const productName = await page.$$eval('.product-title',
            divs => divs.map(({ innerText }) => innerText));
        const offerPrice = await page.$$eval('.product-price',
            divs => divs.map(({ innerText }) => innerText));
        const productPrice = await page.$$eval('.product-desc-price',
            divs => divs.map(({ innerText }) => innerText));
        const productDiscount = await page.$$eval('.product-discount',
            divs => divs.map(({ innerText }) => innerText));
        let Products = [];
        for (let i = 0; i < productName.length; i++) {
            Products.push({
                Name: productName[i],
                Discount: productDiscount[i],
                OfferPrice: offerPrice[i],
                productPrice: productPrice[i],
            });

        }
        if(!Products){
            res.send("Error fetching details")
        }
        res.send(Products);

        browser.close()
    }
    scrape();
};

exports.flipkartMobileFull = async (req, res) => {
    async function scrape() {
        const browser = await puppeteer.launch({})
        const page = await browser.newPage()
        await page.goto('https://www.flipkart.com/search?sid=tyy%2C4io&otracker=CLP_Filters&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3DMax')
        await page.waitForSelector('._1fQZEK')
        const hrefs = await page.$$eval('a._1fQZEK', elements => elements.map(el => el.href))
        let Products=[];
        for (const url of hrefs) {
            await page.goto(url);
            await page.waitForSelector('.B_NuCI')

            const productName = await page.$$eval('.B_NuCI',
                divs => divs.map(({ innerText }) => innerText));
            const productRating = await page.$$eval('._2_R_DZ',
                divs => divs.map(({ innerText }) => innerText));
            const productDetails = await page.$$eval('._2418kt',
                divs => divs.map(({ innerText }) => innerText));
            const offerPrice = await page.$$eval('._30jeq3',
                divs => divs.map(({ innerText }) => innerText));
            const productPrice = await page.$$eval('._3I9_wc',
                divs => divs.map(({ innerText }) => innerText));
            const productwarrenty = await page.$$eval('._352bdz',
                divs => divs.map(({ innerText }) => innerText));
            const productreplacement = await page.$$eval('._1UNqMC',
                divs => divs.map(({ innerText }) => innerText));
            var Product = [];
            for (let i = 0; i < productName.length; i++) {
                Product.push({
                    Name: productName[i],
                    Rating: productRating[i],
                    Details: productDetails[i],
                    OfferPrice: offerPrice[i],
                    productPrice: productPrice[i],
                    Warrenty: productwarrenty[i],
                    ReplacementPolicy: productreplacement[i]
                });
                
            }
            Products.push(Product);

        }
        if(!Products){
            res.send("error fetching details")
        }
        res.send(Products);
        browser.close()
    }
    scrape();
};