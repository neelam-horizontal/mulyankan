import React from 'react';

import { Mulyankan } from '.generated/templates/models/Feature.Mulyankan.model';

export type NavBarProps = Mulyankan.DataTemplates.Fields.Header & {
  fields: Mulyankan.DataTemplates.Fields.Header;
};

const Navigation = (props: NavBarProps): JSX.Element => {
  return (
    <div>
      <p>this is Nav bar</p>
    </div>
  );
};

export default Navigation;
