import { Mulyankan } from '.generated/templates/models/Feature.Mulyankan.model';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import Link from 'next/link';
import Form from './Form';

export type FooterProps = Mulyankan.DataTemplates.Fields.Footer & {
  fields: Mulyankan.DataTemplates.Fields.Footer;
};

const ContactUs = ({ fields }: FooterProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  return (
    <>
      <div className="mt-10"></div>
      <RichTextA11yWrapper field={fields?.eyebrow} />
      <RichTextA11yWrapper field={fields?.title} />
      <div className="flex justify-between">
        <Form />
        <iframe src={fields?.address?.value} width="600" height="450" aria-hidden="false" />
      </div>
    </>
  );
};

export default ContactUs;
