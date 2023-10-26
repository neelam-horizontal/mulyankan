// Lib
import { snapshot } from 'lib/testing/utils';

// Local
import Text from './Text';
import defaultData, {
  blockquote,
  bold,
  deleted,
  em,
  heading,
  italics,
  small,
  span,
} from './Text.mock-data';

it('renders a standard paragraph', () => {
  snapshot(Text, { componentProps: defaultData });
});

it('renders a blockquote', () => {
  snapshot(Text, { componentProps: blockquote });
});

it('renders bold text', () => {
  snapshot(Text, { componentProps: bold });
});

it('renders deleted text', () => {
  snapshot(Text, { componentProps: deleted });
});

it('renders emphasized text', () => {
  snapshot(Text, { componentProps: em });
});

it('renders a level one heading', () => {
  snapshot(Text, { componentProps: heading });
});

it('renders italicized text', () => {
  snapshot(Text, { componentProps: italics });
});

it('renders small text', () => {
  snapshot(Text, { componentProps: small });
});

it('renders text in a span tag', () => {
  snapshot(Text, { componentProps: span });
});
