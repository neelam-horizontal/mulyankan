// Global
import { act } from '@testing-library/react';

// Lib
import { renderComponent } from 'lib/testing/utils';

// Local
import GoogleMaterialSymbol from './GoogleMaterialSymbol';
import defaultData from './GoogleMaterialSymbol.mock-data';

// Mocks
global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () =>
      Promise.resolve(`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 2c-.55 0-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1zm2 18H5V10h14v10zm-8-7c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1zm-4 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1zm8 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1zm-4 4c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1zm-4 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1zm8 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1z"/></svg>
      `),
  })
);

it('renders correctly', async () => {
  let component;

  await act(async () => {
    component = renderComponent(GoogleMaterialSymbol, { componentProps: defaultData });
  });

  expect(component.container.firstChild).toMatchSnapshot();
});
