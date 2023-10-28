import React from 'react';
import ImageWrapper from '@/components/helpers/ImageWrapper/ImageWrapper';
import { Mulyankan } from '.generated/templates/models/Feature.Mulyankan.model';


export type ImageProps = Mulyankan.DataTemplates.Fields.Header &{
  fields: Mulyankan.DataTemplates.Fields.Header
}

export const Header = (props: ImageProps): JSX.Element => {
  
  return (
    <div>
    <ImageWrapper  field={props.fields['Logo Image']}></ImageWrapper>
   </div>
  );
};

export default Header