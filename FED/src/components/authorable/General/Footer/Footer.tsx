// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Mulyankan } from '.generated/templates/models/Feature.Mulyankan.model';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
    businessDescription: Field<string>;
    businessTitle: Field<string>;
    copyRightText:Field<string>;

}

export type FooterProps = Mulyankan.DataTemplates.Fields.Footer & {
    theme: string;
    fields: Mulyankan.DataTemplates.Fields.Footer;
  };

const Footer = ({ fields }: FooterProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <> <footer>
        {fields.businessDescription.value}
        </footer><div></div>
    </>
 
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ContentBlockProps>(ContentBlock);
export default Footer;