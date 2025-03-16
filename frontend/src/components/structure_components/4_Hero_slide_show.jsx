import React from 'react';
import { CCarousel } from '@coreui/react'; /*coureui has to be installed! npm install @coreui/coreui */
import { CCarouselItem } from '@coreui/react';
import { CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import clima from '../images/rotenso_klima.webp'
import external from '../images/rotenso_external.webp';
import roof from '../images/roof_insulation.jpg';



const SlideShow = () => {   
    

    return (    

        <CCarousel controls indicators className="carousel-container">

            <CCarouselItem>
                <CImage className="d-block w-100" src={clima} alt="slide 3" />
            </CCarouselItem>

            <CCarouselItem>
                <CImage className="d-block w-100 slide-image" fluid src={roof} alt="slide 1"/>     
            </CCarouselItem>

            <CCarouselItem>
                <CImage className="d-block w-100" src={external} alt="slide 2" />
            </CCarouselItem>


        </CCarousel> 

    )
}

export default SlideShow;