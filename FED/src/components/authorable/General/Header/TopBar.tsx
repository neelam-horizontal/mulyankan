import React from 'react';
import { Mulyankan } from '.generated/templates/models/Feature.Mulyankan.model';
import Text from '@/components/helpers/Text/Text';
import Link from 'next/link';

export type TopBarProps = Mulyankan.DataTemplates.Fields.Header & {
  fields: Mulyankan.DataTemplates.Fields.Header;
};

const TopBar = (props: TopBarProps): JSX.Element => {
  return (
    <div className=" flex justify-between">
      <div className="logo">LOGO will be here</div>
      <div className="information ms-auto d-flex align-items-center">
        <Text text={props.fields.Address.value} tag="small" className="ms-4"></Text>
        <Text text={props.fields.Email.value} tag="small" className="ms-4"></Text>
        <Text text={props.fields.Phone.value} tag="small" className="ms-4"></Text>
      </div>
      <div className="social ms-3 d-flex">
        <ul>
          {props?.fields?.SocialMediaLinks.map((item: any, index: number) => {
            return (
              <>
                <li key={index}>
                  <Link
                    href={item.fields.link.value.href}
                    className={``}
                    data-element-id="navigation"
                    data-element-type="textLink"
                    data-element-ui-location="social"
                  >
                    <i className={item.fields.link.value.class}></i>
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default TopBar;
