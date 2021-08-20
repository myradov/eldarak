import styles from '../styles/Revival.module.scss'
import Card from '../components/RevivalCard/RevivalCard.js'


const Revival = () => {
    return (
        <>
            <section className={styles.revival}>
                <div className={styles.grid}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </>
    )
}

export default Revival
