// Global
import tailwind from 'tailwind-config';

// Local
import themes from '../../../theme/';

export type ColorsProps = {
  theme: string;
};

type ThemeTypes = 'Base' | 'BrandA' | 'BrandZ';

const Colors = ({ theme }: ColorsProps): JSX.Element => {
  const config = tailwind.config(themes[theme as ThemeTypes]);

  const colors = { ...config.theme.colors, ...config.extend.colors };

  const renderColor = (label: string, value: string) => (
    <div key={label}>
      <div className="flex relative">
        <div>
          <div
            className="box-border h-10 min-w-[55px] rounded w-full"
            style={{ backgroundColor: value }}
          />
          <div className="flex flex-col font-mono mt-4 px-0.5 text-xs">
            <p className="w-6">{label}</p>
            <p className="dark:text-gray-light lowercase text-gray-dark">{value}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container px-16 py-8">
      <div className="max-w-[1000px] w-full"></div>
      <h1 className="font-bold mb-6 text-4xl">Colors</h1>
      <p className="mb-6">
        This library is supported by an extensive color system that themes both styles and
        components. This enables more comprehensive customization and extension for any project.
      </p>
      {Object.entries(colors)
        .filter(([, value]) => typeof value === 'string')
        .sort()
        .map(([key, value]) => (
          <div className="flex flex-col mb-8 md:flex-row" key={key}>
            <div className="capitalize mb-6 w-40">{key}</div>
            <div className="gap-6 grid grid-cols-5 justify-center md:grid-cols-10" key={key}>
              {renderColor(key, value as string)}
            </div>
          </div>
        ))}
      {Object.entries(colors)
        .filter(([, value]) => typeof value === 'object')
        .sort()
        .map(([key, value]) => (
          <div className="flex flex-col mb-6 md:flex-row" key={key}>
            <div className="capitalize mb-6 w-40">{key}</div>
            <div className="gap-6 grid grid-cols-5 justify-center md:grid-cols-10" key={key}>
              {Object.entries(value as object).map(([innerKey, innerValue]) =>
                renderColor(innerKey, innerValue)
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Colors;
