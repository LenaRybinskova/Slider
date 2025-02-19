import {SliderClient} from '@/features/SliderClient/Slider';


const fetchImages = async () => {
    return [
        {id: '11111', url: '/mocks/slide_1.png'},
        {id: '2222', url: '/mocks/slide_2.png'},
        {id: '3333', url: '/mocks/slide_3.png'},
        {id: '4444', url: '/mocks/slide_4.png'},
        {id: '5555', url: '/mocks/slide_5.png'},
        {id: '6666', url: '/mocks/slide_6.png'}]
}

export default async function SliderServer() {

    const images = await fetchImages()

    return <SliderClient images={images}/>
}