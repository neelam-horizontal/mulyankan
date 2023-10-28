// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Mulyankan } from '.generated/templates/models/Feature.Mulyankan.model';

// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';

// // Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
// interface Fields {
//   eyebrow: Field<string>;
//   title: Field<string>;
//   description: Field<string>;
// }

export type ContentBlockProps = Mulyankan.DataTemplates.Fields.ContentBlock &{
  fields: Mulyankan.DataTemplates.Fields.ContentBlock;
};

const ContentBlock = ({ fields }: ContentBlockProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div
      className="bg-theme-bg border border-b-4 border-b-primary border-black dark:border-gray dark:border-b-primary max-w-lg p-2 rounded"
      data-component="authorable/general/contentblock"
      data-testid="contentblock"
    >
      {/* <p className="font-bold">ContentBlocksss</p>   */}
      <p>{fields.eyebrow.value}</p>
      <h1>{fields.title.value}</h1>
      <RichTextA11yWrapper data-testid="contentblock" field={fields.description} editable />
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ContentBlockProps>(ContentBlock);
export default ContentBlock;
