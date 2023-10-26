// Allow raw SVGs as modules.
declare module '*.svg' {
  const content: any;
  export default content;
}

namespace React {
  // Extend the <source> element to allow width and height attributes.
  // https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element
  interface SourceHTMLAttributes<T> {
    width?: number | string | undefined;
    height?: number | string | undefined;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LayoutServiceContext, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ImageFieldValue } from '@sitecore-jss/sitecore-jss-react/types/components/Image';

// Override the LayoutServiceContext to add and custom fields we get from the LayoutService in Sitecore.
declare module '@sitecore-jss/sitecore-jss-nextjs' {
  interface LayoutServiceContext {
    itemId?: string;
    itemPath?: string;
    customField?: string;
  }
}

declare module '@sitecore-jss/sitecore-jss-react/types/components/Image' {
  interface ImageFieldValue {
    extension?: string;
  }
}
