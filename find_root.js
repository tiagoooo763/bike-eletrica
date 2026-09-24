const fs = require('fs');

const js = fs.readFileSync('assets/index-DjYCzhbs.js', 'utf8');

let idx = 0;
while ((idx = js.indexOf('root', idx)) !== -1) {
  console.log(js.slice(Math.max(0, idx - 50), Math.min(js.length, idx + 100)));
  idx += 4;
}
