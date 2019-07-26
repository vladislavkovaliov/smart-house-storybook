import { addParameters, configure } from '@storybook/react';
import SmartHouseThemes from './theming';

// automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /\.stories\.js$/);
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: SmartHouseThemes,
  },
});

configure(loadStories, module);
