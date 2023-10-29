import React from 'react';

import { Mulyankan } from '.generated/templates/models/Feature.Mulyankan.model';
import Link from 'next/link';

export type NavBarProps = Mulyankan.DataTemplates.Fields.Header & {
  fields: Mulyankan.DataTemplates.Fields.Header;
};

const Navigation = (props: NavBarProps): JSX.Element => {
  return (
    <div className="container mx-auto">
      <div className=" flex justify-between">
        <ul className="flex flex-row gap-12">
          {props?.fields?.NavigationItems.map((item: any, index: number) => {
            return (
              <>
                <li key={index} className="py-[20px]">
                  <Link
                    href={item.fields.link.value.href}
                    className={``}
                    data-element-id="navigation"
                    data-element-type="textLink"
                    data-element-ui-location="headerMenu"
                  >
                    {item.name}
                  </Link>
                </li>

                {/* <ul>
                <li>{item?.fields?.Navigations?.map((e) => e.fields.linkTitle.value)}</li>
              </ul> */}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
