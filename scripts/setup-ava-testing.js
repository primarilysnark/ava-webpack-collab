import { jsdom } from 'jsdom';

global.document = jsdom('<body></body>');
global.window = document.defaultView;
global.navigator = {
  userAgent: 'node.js'
};
