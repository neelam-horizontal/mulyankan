export const mockSitecoreContext = {
  context: {
    pageEditing: false,
    Languages: [
      {
        Name: 'en',
      },
      {
        Name: 'en-US',
      },
      {
        Name: 'en-CA',
      },
    ],
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setContext: () => {
    return; //nothing
  },
};
