import { Mulyankan } from '.generated/templates/models/Feature.Mulyankan.model';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import Link from 'next/link';

export type FooterProps = Mulyankan.DataTemplates.Fields.Footer & {
  fields: Mulyankan.DataTemplates.Fields.Footer;
};

const Footer = ({ fields }: FooterProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <>
      {' '}
      <footer>
        <div className="w-full bg-turquoise-dark  mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container py-5  mx-auto">
            <div className="flex justify-between items-start">
              <div className="col-span-3">
                <h4 className="mb-4 text-white">{fields.officeTitle.value}</h4>
                <p className="mb-2 text-white">
                  <i className="fa fa-map-marker-alt me-3"></i>
                  {fields.officeAddress.value}
                </p>
                <p className="mb-2 text-white">
                  <i className="fa fa-phone-alt me-3"></i>
                  {fields.officeNumber.value}
                </p>
                <p className="mb-2 text-white">
                  <i className="fa fa-envelope me-3"></i>
                  {fields.officeEmail.value}
                </p>
                <div className="d-flex pt-3 text-white">
                  <a className="btn btn-square btn-light rounded-circle me-2 text-white" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-light rounded-circle me-2 text-white" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-light rounded-circle me-2 text-white" href="">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a className="btn btn-square btn-light rounded-circle me-2 text-white" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>

              <div className="col-span-3">
                <h4 className="text-white mb-4">{fields.linksTitle.value}</h4>
                {fields.links?.map((list1Item, index) => {
                  console.log(list1Item.fields.linkTitle.value);

                  return (
                    <div>
                      <Link
                        href={list1Item.url}
                        className={`text-white`}
                        data-element-id="navigation"
                        data-element-type="textLink"
                        data-element-ui-location="footerMenu"
                      >
                        {list1Item.fields.linkTitle.value}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="col-span-3">
                <h4 className="text-white mb-4">{fields.businessTitle.value}</h4>
                <RichTextA11yWrapper field={fields.businessDescription}></RichTextA11yWrapper>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ContentBlockProps>(ContentBlock);
export default Footer;
