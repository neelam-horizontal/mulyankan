// Lib
import { snapshot } from 'lib/testing/utils';

// Local
import FontAwesomeIcon from './FontAwesomeIcon';
import defaultData from './FontAwesomeIcon.mock-data';

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

it('renders correctly', async () => {
  snapshot(FontAwesomeIcon, { componentProps: defaultData });
});
