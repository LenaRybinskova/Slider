'use client';

import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import {Slide} from '@/app/common/types';
import Image from 'next/image';

type Props = {
    images: Slide[]

}


export const SliderClient = ({ images }: Props) => {
    const [dynamicWidth, setDynamicWidth] = useState<number>(
        typeof window !== "undefined" ? window.innerWidth : 0
    );

    useEffect(() => {
        const handleResize = () => setDynamicWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            {dynamicWidth < 500 ? (
                <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
                    {images.map((image) => (
                        <SwiperSlide key={image.id} className="bg-gray-200 p-6 text-center">
                            <Image src={image.url} alt={`Slide ${image.id}`} height={212} width={358} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="flex gap-4 overflow-x-auto">
                    LENA
                </div>
            )}
        </div>
    );
};