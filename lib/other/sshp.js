async function sshp(url, fpage = false) {
async function getBrowser(opts = {}) {
    const chromeOptions = {
        headless: true,
       defaultViewport: {
            width: 3840,
            height: 2160
        },
        timeout: 120000,
        args: [
            "--incognito",
            "--no-sandbox",
            "--single-process",
            "--no-zygote",
            "--no-cache"
        ],
        ...opts
    }
    return await require('puppeteer').launch(chromeOptions)
}
const browser = await getBrowser()
                const page = await browser.newPage()
                await page.setUserAgent('Mozilla/5.0 (Linux; Android 11; SM-A205F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Mobile Safari/537.36')
                await page.goto(url, {
                    waitUntil: 'load',
                    timeout: 300000
                })
const screenshot = await page.screenshot({
                    type: 'png',
                    fullPage: fpage
                })
await browser.close()
return screenshot 
}

module.exports = sshp
