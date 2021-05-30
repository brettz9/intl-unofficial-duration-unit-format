import DurationFormat from './index.js';

if (typeof Intl === 'undefined') {
  globalThis.Intl = {};
}

if (typeof Intl.DurationFormat === 'undefined') {
  Intl.DurationFormat = DurationFormat;
}
