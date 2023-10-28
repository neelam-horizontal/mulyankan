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

}

export interface ImageWrapperProps {
    field: SizeField;
    className?: string | undefined;
    editable?: boolean;
    objectPosition?: ObjectPositionOption;

}
const ImageWrapper = ({
    field,
    className,
    editable,
    objectPosition,

}: ImageWrapperProps):JSX.Element => {
    const nextImageProps: AnyTextImage = {
        src: field?.value?.src,
        alt: field?.value?.alt || '',
        className,
        editable,
        objectPosition,
      };
      
    
      return <NextImage {...nextImageProps} />; 

};
export default ImageWrapper;