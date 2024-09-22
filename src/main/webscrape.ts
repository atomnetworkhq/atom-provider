import axios from 'axios';
const cheerio = require('cheerio');

// URL of the website you want to scrape
// const url = 'https://example.com';

// Function to scrape the website
async function scrapeWebsite(url:string) {
    console.log(url)
  try {
    // Make a GET request to the website
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        // 'Referer': 'https://www.google.com',
      },
    });
    console.log(data)
    // Load the HTML into cheerio
    const $ = cheerio.load(data);

    // Example: Extracting data (e.g., page title)
    const pageTitle = $('title').text();
    console.log(`Page title: ${pageTitle}`);

    // Example: Scrape specific data
    // Modify the selectors based on the structure of the website
    const items:any = [];
    $('cite.qLRx3b').each((index, element) => {
      items.push($(element).text());
    });

    console.log('Scraped items:', items);
  } catch (error) {
    console.error('Error scraping the website:', error.message);
  }
}

// Run the scrape function
// scrapeWebsite();

export { scrapeWebsite };

