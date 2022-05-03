import Carosel from 'components/Carousel'
import Footer from 'components/Footer'

export default function HomePage() {
    return (
        <body className='bg-amber-50 flex flex-col items-center'>
            <div className='flex flex-col items-center'>
                <h2 className='text-black text-3xl font-bold my-10 border-b-4 border-amber-900'>
                    Promoções
                </h2>
                <div className='w-3/4 mb-8'>
                    <Carosel />
                </div>
            </div>
            <div>
                <section className='flex flex-col items-center'>
                    <div className='text-black text-3xl font-bold my-10 border-b-4 border-amber-900 flex flex-row'>
                        <h2 className='mr-6'>
                            Novidades
                        </h2>
                        <button className='font-thin text-xl'>
                            VER +
                        </button>
                    </div>
                    
                    <div className='flex flex-row w-4/5 gap-3'>
                        <div>
                            <img src="/assets/fotos/promos/promo-01.png" alt="" className='rounded-t-xl'/>
                        </div>
                        <div>
                            <img src="/assets/fotos/promos/promo-01.png" alt="" className='rounded-t-xl'/>
                        </div>
                        <div>
                            <img src="/assets/fotos/promos/promo-01.png" alt="" className='rounded-t-xl'/>
                        </div>
                    </div>
                </section>
                <section className='flex flex-col items-center'>
                    <div className='text-black text-3xl font-bold my-10 border-b-4 border-amber-900 flex flex-row'>
                        <h2 className='mr-6'>
                            Mais comprados
                        </h2>
                        <button className='font-thin text-xl'>
                            VER +
                        </button>
                    </div>
                    
                    <div className='flex flex-row w-4/5 gap-3'>
                        <div>
                            <img src="/assets/fotos/promos/promo-01.png" alt="" className='rounded-t-xl'/>
                        </div>
                        <div>
                            <img src="/assets/fotos/promos/promo-01.png" alt="" className='rounded-t-xl'/>
                        </div>
                        <div>
                            <img src="/assets/fotos/promos/promo-01.png" alt="" className='rounded-t-xl'/>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </body>
    )
}