import base from './tailwind.base';
import brandA from './tailwind.brand-a';
import brandZ from './tailwind.brand-z';

const themes = {
  Base: base,
  BrandA: brandA,
  BrandZ: brandZ,
  default: base,
  themes: [brandA, brandZ],
};

export default themes;
