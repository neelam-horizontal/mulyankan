// Global
import { act } from '@testing-library/react';

// Lib
import { renderComponent } from 'lib/testing/utils';

// Local
import Button from './Button';
import defaultData, { disabled, iconLeft, iconOnly, iconRight, loading } from './Button.mock-data';

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

// Mocks
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        buttonIcons: true,
        maintenanceMode: false,
      }),
  })
);

it('renders correctly', async () => {
  let component;

  await act(async () => {
    component = renderComponent(Button, { componentProps: defaultData });
  });

  expect(component.container.firstChild).toMatchSnapshot();
});

it('renders as disabled', async () => {
  let component;

  await act(async () => {
    component = renderComponent(Button, { componentProps: disabled });
  });

  expect(component.container.firstChild).toMatchSnapshot();
});

it('renders with left icon', async () => {
  let component;

  await act(async () => {
    component = renderComponent(Button, { componentProps: iconLeft });
  });

  expect(component.container.firstChild).toMatchSnapshot();
});

it('renders with icon only', async () => {
  let component;

  await act(async () => {
    component = renderComponent(Button, { componentProps: iconOnly });
  });

  expect(component.container.firstChild).toMatchSnapshot();
});

it('renders with right icon', async () => {
  let component;

  await act(async () => {
    component = renderComponent(Button, { componentProps: iconRight });
  });

  expect(component.container.firstChild).toMatchSnapshot();
});

it('renders with loading indicator', async () => {
  let component;

  await act(async () => {
    component = renderComponent(Button, { componentProps: loading });
  });

  expect(component.container.firstChild).toMatchSnapshot();
});
