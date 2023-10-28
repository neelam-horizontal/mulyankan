import { Mulyankan } from '.generated/templates/models/Feature.Mulyankan.model';
import NavigationBar from './NavigationBar';
import TopBar from './TopBar';

// import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type HeaderProps = Mulyankan.DataTemplates.Fields.Header & {
  fields: Mulyankan.DataTemplates.Fields.Header;
};

const Header = (props: HeaderProps): JSX.Element => {
  console.log('Test', props);
  return (
    <div className="bg-turquoise text-white">
      <div className="container mx-auto">
        <TopBar {...props} />
        <NavigationBar {...props} />
      </div>
    </div>
  );
};

export default Header;
