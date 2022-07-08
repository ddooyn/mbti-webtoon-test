const axios = require('axios').default;
const cheerio = require('cheerio');

const getHTML = async () => {
  try {
    return await axios.get(`https://www.lezhin.com/ko/comic/sparrow`);
  } catch (error) {
    console.log(error);
  }
};

const parsing = async () => {
  const html = await getHTML();
  const $ = cheerio.load(html.data);
  const LzList = $('.comicInfo__detail');
  let courses = [];
  LzList.each((idx, node) => {
    const title = $(node).find('.comicInfo__title').text();
    console.log(title);
  });
};

parsing();
