// Global
import { render } from '@testing-library/react';

// Lib
import { snapshot } from 'lib/testing/utils';

// Local
import RichTextA11yWrapper from './RichTextA11yWrapper';
import defaultData, { regExTest } from './RichTextA11yWrapper.mock-data';

it('renders common usage correctly', () => {
  snapshot(RichTextA11yWrapper, { componentProps: defaultData });
});

it('handles various attributes, invalid attributes, and character types in <a> tags appropriately and nested tags in <a> tags', () => {
  snapshot(RichTextA11yWrapper, { componentProps: regExTest });
});
