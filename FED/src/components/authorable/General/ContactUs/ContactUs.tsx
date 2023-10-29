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

  console.log('props', fields);
  console.log('eye ->', fields?.eyebrow?.value);
  console.log('add ->', fields?.address?.value);
  return (
    <>
      <RichTextA11yWrapper field={fields?.eyebrow?.value} />
      <div className="flex justify-between">
        <Form />
        <iframe src={fields?.address?.value} width="600" height="450" aria-hidden="false" />
      </div>
    </>
  );
};

export default ContactUs;
