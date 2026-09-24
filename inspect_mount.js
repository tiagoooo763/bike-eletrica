const fs = require('fs');

const js = fs.readFileSync('assets/index-DjYCzhbs.js', 'utf8');

// Find Router initialization
const routerIdx = js.indexOf('BrowserRouter') !== -1 ? js.indexOf('BrowserRouter') : -1;
console.log('BrowserRouter index:', routerIdx);

// Search for createBrowserRouter or createHashRouter or RouterProvider or Router
const routerMatches = js.match(/[a-zA-Z0-9_$]+\.jsx\([a-zA-Z0-9_$]+Router[^\)]*\)/g) || [];
console.log('Router JSX:', routerMatches);

// Search for how the app mounts to root
const mountIdx = js.indexOf('createRoot(');
console.log('Mount:', js.slice(mountIdx - 200, mountIdx + 400));
