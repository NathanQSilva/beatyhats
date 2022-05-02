import Carosel from 'components/Carousel'
import styles from './homePage.module.scss'

export default function HomePage() {
    return (
        <body className={styles.homeContainer}>
            <div className={styles.caroselContainer}>
                <h2>
                    Promoções
                </h2>
                <div className={styles.carosel}>
                    <Carosel />
                </div>
            </div>
            <div>
                <section>
                    novidades
                    <div>
                        lista de novos chapeus
                    </div>
                </section>
                <section>
                    mais comprados
                    <div>
                        Lista com mais comprados
                    </div>
                </section>
            </div>
        </body>
    )
}