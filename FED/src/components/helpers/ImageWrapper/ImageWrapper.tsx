import { Image, ImageField, useSitecoreContext } from "@sitecore-jss/sitecore-jss-nextjs";

import NextImage from 'next/image';

interface SizeField extends ImageField {
    values?: {
        alt?: string;
        height: string;
        widht: string;
        src?: string;
    };
}
type NextImageLayoutOption = 'intrinsic' | 'responsive' | 'fill';
type ObjectFitOption = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
type ObjectPositionOption = 'top' | 'bottom' | 'left' | 'right' | 'center';

interface AnyTextImage {
    alt: string;
    height?: number;
    src: string;
    width?: number;
    className?: string | undefined;
    objectFit?: ObjectFitOption;
    objectPosition?: ObjectPositionOption;
    layout?: NextImageLayoutOption;
}

export interface ImageWrapperProps {
    field: SizeField;
    className?: string | undefined;
    editable?: boolean;
    objectPosition?: ObjectPositionOption;
    layout?: NextImageLayoutOption;
}
const toNumber = (str: string | undefined): number => {
    if (typeof str === 'undefined') {
      return 0;
    }
    return parseInt(str, 10);
  };
const ImageWrapper = ({
    field,
    className,
    editable,
    objectPosition,
    layout,
}: ImageWrapperProps):JSX.Element => {
    
    if (!field?.value?.src) {
        return <></>;
      }
    const nextImageProps: AnyTextImage = {
        src: field?.value?.src,
        alt: field?.value?.alt || '',
        className,
        editable,
        objectPosition,
        layout
      };
      
      if (layout === 'fill') {
        nextImageProps.objectFit = 'cover';
        nextImageProps.objectPosition = objectPosition;
      } else {
        nextImageProps.height = toNumber(field?.value?.height);
        nextImageProps.width = toNumber(field?.value?.width);
      return <NextImage {...nextImageProps} />; 
      }
};
export default ImageWrapper;