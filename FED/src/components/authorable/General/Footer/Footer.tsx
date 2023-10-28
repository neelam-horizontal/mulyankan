
import { Mulyankan } from '.generated/templates/models/Feature.Mulyankan.model';


export type FooterProps = Mulyankan.DataTemplates.Fields.Footer & {
    fields: Mulyankan.DataTemplates.Fields.Footer;
  };

const Footer = ({ fields }: FooterProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <> <footer>
       <div className="container-fluid bg-turquoise-dark  mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="mb-4 text-turquoise">{fields.officeTitle.value}</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>{fields.officeAddress.value}</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>{fields.officeNumber.value}</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>{fields.officeEmail.value}</p>
                    <div className="d-flex pt-3">
                        <a className="btn btn-square btn-light rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-light rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-light rounded-circle me-2" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-light rounded-circle me-2" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Our Services</a>
                    <a className="btn btn-link" href="">Terms &amp; Condition</a>
                    <a className="btn btn-link" href="">Support</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Business Hours</h4>
                    <p className="mb-1">Monday - Friday</p>
                    <h6 className="text-light">09:00 am - 07:00 pm</h6>
                    <p className="mb-1">Saturday</p>
                    <h6 className="text-light">09:00 am - 12:00 pm</h6>
                    <p className="mb-1">Sunday</p>
                    <h6 className="text-light">Closed</h6>
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