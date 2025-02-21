'use client';

import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import {Slide} from '@/common/types';
import Image from 'next/image';

type Props = {
    images: Slide[]
}


export const SliderClient = ({images}: Props) => {
    return (

        <Swiper
            pagination={{clickable: true}}
            modules={[Pagination]}
            wrapperClass="mySwiper"
        >
            {images.map((image: Slide) => <SwiperSlide className="bg-gray-200 p-6 text-center" key={image.id}><Image
                src={image.url} alt={image.id} height={212} width={358}/></SwiperSlide>)}
        </Swiper>
    );
}