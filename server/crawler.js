const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const genreMap = new Map([
  ['romance', 'https://www.lezhin.com/ko/romance?page=0&sub_tags=all'],
  ['boys', 'https://www.lezhin.com/ko/boys?page=0&sub_tags=all'],
  [
    'boys-drama',
    'https://www.lezhin.com/ko/boys?page=0&sub_tags=%EB%93%9C%EB%9D%BC%EB%A7%88',
  ],
  ['drama', 'https://www.lezhin.com/ko/drama?page=0&sub_tags=all'],
  [
    'fantasy',
    'https://www.lezhin.com/ko/boys?page=0&sub_tags=%ED%8C%90%ED%83%80%EC%A7%80',
  ],
  [
    'romanceComic',
    'https://www.lezhin.com/ko/romance?page=0&sub_tags=%EC%B9%9C%EA%B5%AC%3E%EC%97%B0%EC%9D%B8',
  ],
  [
    'romance-ori',
    'https://www.lezhin.com/ko/romance?page=0&sub_tags=%EB%8F%99%EC%96%91%ED%92%8D',
  ],
]);

const crawler = async (genre) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--window-size=1600,2000',
    ],
  });

  const page = await browser.newPage();

  let recommendData = [];
  let recommendRandomData = [];
  let rankData = [];
  if (genre === 'all') {
    let urlKeys = genreMap.keys();
    for (let v of urlKeys) {
      await getGenreData(v);
    }
  } else {
    await getGenreData(genre);
  }

  async function getGenreData(v) {
    let url = genreMap.get(v);
    await page.goto(url);

    await page.evaluate(`window.scrollTo(0, document.body.scrollHeight/5)`);
    await page.waitForTimeout(100);

    const content = await page.content();
    const $ = cheerio.load(content);

    const list = $('#exhibit-sub-tags').children('li:nth-child(-n+10)');
    list.each((idx, node) => {
      recommendData.push({
        title: $(node).find('div.lzComic__info > div.lzComic__title').text(),
        artist: $(node).find('div.lzComic__info > div.lzComic__artist').text(),
        link: $(node).find('a').attr('href'),
        img: $(node).find('div.lzComic__thumb > picture > img').attr('src'),
      });
    });
    recommendRandomData =
      recommendData[Math.floor(Math.random() * recommendData.length)];

    await page.waitForTimeout(50);

    await page.goto('https://www.lezhin.com/ko/ranking?genre=_all');

    await page.waitForTimeout(100);
    const Rankcontent = await page.content();
    const $$ = cheerio.load(Rankcontent);
    const RankingList = $$('#rank-realtime > ul').children(
      'li:nth-child(-n+4)',
    );

    RankingList.each((idx, node) => {
      rankData.push({
        title: $(node)
          .find('a')
          .attr('data-ga-event-label')
          .replace(/[^s]+[_]/g, ''),
        img: $(node).find('div.lzComic__thumb > picture > img').attr('src'),
        link: $(node).find('a').attr('href'),
      });
    });
  }
  await browser.close();

  return { recommendRandomData, rankData };
};

module.exports.crawler = crawler;
