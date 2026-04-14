/**
 * Submits URLs to Bing IndexNow (https://www.indexnow.org/).
 * Requires the key file at public/{key}.txt to be deployed at https://goevolo.com/{key}.txt
 */
const https = require('https');

const KEY = 'a1b2c3d4e5f60718293a4b5c6d7e8f09';
const HOST = 'goevolo.com';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const URL_LIST = [`https://${HOST}/`, `https://${HOST}/sitemap.xml`];

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: URL_LIST,
});

const req = https.request(
  'https://api.indexnow.org/IndexNow',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(body),
    },
  },
  (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log(`IndexNow HTTP ${res.statusCode}`);
      if (data) console.log(data);
      process.exit(res.statusCode >= 200 && res.statusCode < 300 ? 0 : 1);
    });
  }
);

req.on('error', (err) => {
  console.error(err);
  process.exit(1);
});

req.write(body);
req.end();
