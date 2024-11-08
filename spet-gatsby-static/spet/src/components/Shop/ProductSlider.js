import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"

import ShopImage1 from "../../images/shop-image/shop-image1.jpg"
import ShopImage2 from "../../images/shop-image/shop-image2.jpg"
import ShopImage3 from "../../images/shop-image/shop-image3.jpg"
import ShopImage4 from "../../images/shop-image/shop-image4.jpg"
import ShopImage5 from "../../images/shop-image/shop-image5.jpg"

const ProductSlider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="products-details-image products-details-image-slides"
      >
        <SwiperSlide className="single-image-box">
          <img src={ShopImage1} alt="img" />
        </SwiperSlide>

        <SwiperSlide className="single-image-box">
          <img src={ShopImage2} alt="img" />
        </SwiperSlide>

        <SwiperSlide className="single-image-box">
          <img src={ShopImage3} alt="img" />
        </SwiperSlide>

        <SwiperSlide className="single-image-box">
          <img src={ShopImage4} alt="img" />
        </SwiperSlide>

        <SwiperSlide className="single-image-box">
          <img src={ShopImage5} alt="img" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ProductSlider
