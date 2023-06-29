import React from "react";
import { Button } from "@mui/material";
import { products } from "../dummy_product";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
    return (
        <>
            <Swiper autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }} pagination={{ clickable: true }} spaceBetween={20} centeredSlides={true} navigation={true} modules={[Autoplay, Navigation, Pagination]} className="swiperContainer">
                {products.map((prod, index) => {
                    if (index < 3) return (
                        <SwiperSlide key={prod.id} className="swiper">
                            <div className="slider">
                                <img src={prod.img} alt={prod.title} />
                            </div>
                            <div style={{ width: '20rem' }}>
                                <h1>{prod.title}</h1>
                                <p>({prod.rating} Stars)</p>
                                <p>Shop your favorite products at anytime.</p>
                                <Button onClick={() => window.scrollBy({ top: 450, behavior: 'smooth' })} variant="outlined" color="warning" style={{ marginTop: '10px' }}>Explore</Button>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    );
}
