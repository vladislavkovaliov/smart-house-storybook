import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: '#2F3B52',
  appContentBg: '#2F3B52',
  appBorderColor: '#44556B',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#1F8EFA',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#1F8EFA',
  barSelectedColor: '#1F8EFA',
  barBg: '#242E42',

  // Form colors
  inputBg: '#242E42',
  inputBorder: '#44556B',
  inputTextColor: '#1F8EFA',
  inputBorderRadius: 4,

  brandTitle: 'Smart House',
  brandUrl: 'https://example.com',
  brandImage: '../src/asserts/images/logo.png',
});