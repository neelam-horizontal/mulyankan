import React from 'react';
import { Mulyankan } from '.generated/templates/models/Feature.Mulyankan.model';
import Text from '@/components/helpers/Text/Text';
import { Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { link } from 'fs';

export type TopBarProps = Mulyankan.DataTemplates.Fields.Header & {
  fields: Mulyankan.DataTemplates.Fields.Header;
};

const TopBar = (props: TopBarProps): JSX.Element => {
  return (
    <div className=" flex justify-between">
      <div className="logo">LOGO will be here</div>
      <div className="information">
        <Text text={props.fields.Address.value} tag="small"></Text>
        <Text text={props.fields.Email.value} tag="small"></Text>
        <Text text={props.fields.Phone.value} tag="small"></Text>
      </div>
      <div className="social">
        <ul>
          {props?.fields?.SocialMediaLinks.map((item: any, index: number) => {
            return (
              <>
                <li key={index}>{item.name}</li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default TopBar;
