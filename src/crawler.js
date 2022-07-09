const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const genre = 'boys';
const crawler = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(`https://www.lezhin.com/ko/${genre}?page=0&sub_tags=all`);

    let lastHeight = await page.evaluate('document.body.scrollHeight');
    let discount = 10;

    while (lastHeight) {
      while (discount > 1) {
        await page.evaluate(
          `window.scrollTo(0, document.body.scrollHeight/${discount})`,
        );
        await page.waitForTimeout(100);
        discount /= 2;
      }
      await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
      let newHeight = await page.evaluate('document.body.scrollHeight');
      if (newHeight === lastHeight) {
        break;
      }
      lastHeight = newHeight;
    }

    const content = await page.content();

    const $ = cheerio.load(content);
    const list = $('#exhibit-sub-tags').children('li:nth-child(-n+10)');

    let recommendData = [];
    list.each((idx, node) => {
      recommendData.push({
        title: $(node).find('div.lzComic__info > div.lzComic__title').text(),
        artist: $(node).find('div.lzComic__info > div.lzComic__artist').text(),
        link: $(node).find('a').attr('href'),
        img: $(node).find('div.lzComic__thumb > picture > img').attr('src'),
      });
    });
    const randomData =
      recommendData[Math.floor(Math.random() * recommendData.length)];
    await browser.close();

    console.log(randomData);

    return randomData;
  } catch (error) {
    console.log(error);
  }
};
crawler();
