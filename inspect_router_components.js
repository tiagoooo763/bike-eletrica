const fs = require('fs');

const js = fs.readFileSync('assets/index-DjYCzhbs.js', 'utf8');

function findVar(name) {
  console.log(`=== ${name} ===`);
  const regex = new RegExp(`(?:const|var|function)\\s+${name}\\s*=|function\\s+${name}\\s*\\(`, 'g');
  let match;
  while ((match = regex.exec(js)) !== null) {
    console.log(js.slice(Math.max(0, match.index - 50), Math.min(js.length, match.index + 200)));
  }
}

findVar('m1');
findVar('l1');
findVar('Z');
findVar('Hw');
