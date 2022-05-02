import promos from 'data/carosel.json'
import Carousel from 'nuka-carousel';

export default function Carosel() {
    return ( 
        <div >
            <Carousel>
                {promos.map((promo) => (
                    <div key={promo.id}>
                        <img src={promo.photo} />
                        <p>{promo.title}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}