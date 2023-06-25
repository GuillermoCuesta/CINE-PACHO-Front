// React
import { ReactElement } from 'react';
// Animation config & images
import { imagesToMap, uptodown, downtoup } from './config'
// React-Slick
import Slider from "react-slick";


const Carrousel: React.FC = (): ReactElement => {
    return (
        <div className='w-full flex lg:h-screen h-[50vh] gap-4'>
            <div className='w-1/3 h-full flex flex-col gap-2 overflow-hidden'>
                <Slider {...uptodown}>
                    {imagesToMap.slice(0, 5).map(item => {
                        return (
                            <img className='rounded-2xl my-2' key={item} src={item} alt="SlideImage" />
                        )
                    })}
                </Slider>
            </div>
            <div className='w-1/3 h-full flex flex-col gap-2 overflow-hidden'>
                <Slider {...downtoup}>
                    {imagesToMap.slice(5, 10).map(item => {
                        return (
                            <img className='rounded-2xl my-2' key={item} src={item} alt="SlideImage" />
                        )
                    })}
                </Slider>
            </div>
            <div className='w-1/3 h-full flex flex-col gap-2 overflow-hidden'>
                <Slider {...uptodown}>
                    {imagesToMap.slice(10, 15).map(item => {
                        return (
                            <img className='rounded-2xl my-2' key={item} src={item} alt="SlideImage" />
                        )
                    })}
                </Slider>
            </div>
        </div>
    )

}

export default Carrousel