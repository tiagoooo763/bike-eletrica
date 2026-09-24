const fs = require('fs');

const js = fs.readFileSync('assets/index-DjYCzhbs.js', 'utf8');

const end = js.slice(js.length - 2000);
console.log(end);
