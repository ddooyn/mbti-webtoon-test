const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const crawler = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.lezhin.com/ko/romance?page=0&sub_tags=all');

    let lastHeight = await page.evaluate('document.body.scrollHeight');

    while (lastHeight) {
      await page.evaluate('window.scrollTo(0, document.body.scrollHeight/10)');
      await page.waitForTimeout(500);
      await page.evaluate('window.scrollTo(0, document.body.scrollHeight/5)');
      await page.waitForTimeout(500);
      await page.evaluate('window.scrollTo(0, document.body.scrollHeight/2)');
      await page.waitForTimeout(500);
      await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
      let newHeight = await page.evaluate('document.body.scrollHeight');
      if (newHeight === lastHeight) {
        break;
      }
      lastHeight = newHeight;
    }

    const content = await page.content();

    const $ = cheerio.load(content);
    const list = $('#exhibit-sub-tags').children('li');

    let RecommendData = [];
    list.each((idx, node) => {
      RecommendData.push({
        title: $(node).find('div.lzComic__title').text(),
        link: $(node).find('a').attr('href'),
        img: $(node)
          .find('li > a > div.lzComic__thumb > picture > img')
          .attr('src'),
      });
    });
    console.log(RecommendData);
    browser.close();
  } catch (error) {
    console.log(error);
  }
};

crawler();
