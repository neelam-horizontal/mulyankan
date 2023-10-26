// Global
import tailwind from 'tailwind-config';
import resolveConfig from 'tailwindcss/resolveConfig';

// Local
import themes from '../../../theme/';

export type TypographyProps = {
  theme: string;
};

type ThemeTypes = 'Base' | 'BrandA' | 'BrandZ';

const Typography = ({ theme }: TypographyProps): JSX.Element => {
  const config = resolveConfig(tailwind.config(themes[theme as ThemeTypes]));

  const fontFamilies = {
    ...config.theme.fontFamily,
    ...(config.extend ? config.extend.fontFamily : {}),
  };
  const fontSizes = { ...config.theme.fontSize, ...(config.extend ? config.extend.fontSize : {}) };

  /* possible font family values are font-mono font-sans font-serif font-roboto font-openSans font-rockwell font-avenirNextCondensed font-merriweather */
  /* possible font size values are text-xs text-sm text-base text-lg text-xl text-2xl text-3xl text-4xl text-5xl text-6xl */

  return (
    <div className="container px-16 py-8">
      <h1 className="font-bold mb-6 text-4xl">Font Families</h1>
      <p className="mb-6">
        The typeface of any text element can be controlled using the following font classes:
      </p>
      <div className="flex flex-col flex-wrap mb-6 md:flex-row">
        {Object.entries(fontFamilies).map(([key, value]: [string, string[]]) => (
          <div className="grid grid-cols-3 gap-6 mb-12 w-full" key={key}>
            <div className="mb-6 w-40">{`font-${key}`}</div>
            <div className="col-span-2">
              <div className={`font-${key} text-2xl`}>
                The quick brown fox jumps over the lazy dog.
              </div>
              <div className="font-mono mt-4 text-xs">{value.join(', ')}</div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="font-bold mb-6 text-4xl">Text Sizes</h1>
      <p className="mb-6">
        The size of any text element can be controlled using the following size classes:
      </p>
      <div className="flex flex-col flex-wrap mb-16 md:flex-row">
        {Object.entries(fontSizes).map(([key, value]: [string, string[]]) => (
          <div className="grid grid-cols-3 gap-6 mb-12 w-full" key={key}>
            <div className="mb-6 w-40">{`text-${key}`}</div>
            <div className="col-span-2" key={key}>
              <div className={`font-sans text-${key}`}>
                The quick brown fox jumps over the lazy dog.
              </div>
              <div className="font-mono mt-4 text-xs">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Typography;
