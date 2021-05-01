import React, {useState} from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
export const Slider = ({sliderData}) => {
    const [current, setCurrent] = useState(0)



 if(!Array.isArray(sliderData) || sliderData.length < 1) return null

const nextSlide = () =>{
    setCurrent(current === sliderData.length -1 ? 0 : current + 1)
}
const prevSlide = () =>{
    setCurrent(current === 0 ? sliderData.length - 1 : current - 1)
}

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {sliderData.map((slide, index)=> {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                         {index === current && (
                            <img className="image" src={slide.image} alt="travel-pictures"/>
                         )}       
                    </div>
                ) 
                    
            })}
        </section>
    )
}


