'use client';
import { Field, NextImage, Link, RichText } from "@sitecore-jss/sitecore-jss-nextjs"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from "react";
import { Mulyankan } from ".generated/templates/models/Feature.Mulyankan.model";
import ImageWrapper from "@/components/helpers/ImageWrapper/ImageWrapper";
import Slider from "react-slick";

type CarouselProps = Mulyankan.DataTemplates.Fields.Banner & {
  fields: Mulyankan.DataTemplates.Fields.Banner
  }


const Banner = (props: CarouselProps): JSX.Element => {

  const [index, setIndex] = useState(0);

  const handleSlideChange = (currentIndex) => {
    setIndex(currentIndex);
  };

  const sliderSettings = {
    arrows: true,
    fade: true,
    infinite: true,
    autoplaySpeed: 1000,
    autoplay: false,
  };
  return (
    <Slider {...sliderSettings}>
      {props.fields?.Banners.map((image, idx) => (
       
          <div key={idx} className="carousel slide carousel-fade">
            <div id="header-carousel"  data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <ImageWrapper
                    className=""
                    field={image.fields.image}
                    editable={false}
                    
                    data-sample="other-attributes-pass-through"
                  />
                  <div className="carousel-caption">
                    <div className="container">
                      <div className="flex justify-start">
                        <div className="col-lg-7 animated slideInLeft text-left">
                          <RichText className="" field={image.fields.ImageCaption} />
                          <div className="bg-blue-500 text-white rounded-full py-3 px-5 animate__animated animate__slideInLeft">
                          <Link field={image.fields.TargetUrl}></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
      ))}

    </Slider>
  );

};
export default Banner;