/* eslint-disable jsx-a11y/alt-text */
import promos from 'data/carosel.json'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default function Carosel() {


    return ( 
        <div >
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
            >
                {promos.map((promo) => (
                    <div key={promo.id}>
                        <img src={promo.photo} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}