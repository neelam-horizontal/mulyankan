import React from 'react';
import { Field, RichText as JssRichText, NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import ImageWrapper from '@/components/helpers/ImageWrapper/ImageWrapper';
import { Mulyankan } from '.generated/templates/models/Feature.Mulyankan.model';

interface Fields {
  Text: Field<string>;

}
export type ImageProps = Mulyankan.Fields.Header &{
  fields: Mulyankan.Fields.Header;
  Image: Mulyankan.Fields.Header
}
export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: RichTextProps): JSX.Element => {
  const text = props.fields ? (
    <JssRichText field={props.fields.Text} />
  ) : (
    <span className="is-empty-hint">Rich text</span>
  );
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component rich-text ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >

      <div className="component-content">{text}</div>
      <div className="">hello</div>
      <ImageWrapper field={fields.Headline}></ImageWrapper>
    </div>
  );
};
