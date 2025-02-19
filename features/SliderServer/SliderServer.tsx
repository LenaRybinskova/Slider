import {SliderClient} from '@/features/SliderClient/Slider';




const fetchImages=async ()=>{
    return [{id: '11111', url: "/mocks/slide_1.png"}, {id: '2222', url: "/mocks/slide_2.png"}]
}

export default async function SliderServer() {

    const images = await fetchImages()

   return <SliderClient images={images}/>
}