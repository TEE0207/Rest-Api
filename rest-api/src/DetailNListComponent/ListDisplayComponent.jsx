import styles from "./listDisplay.module.css"
const ListDisplayComponent = ({country,image, population, region, capital}) => {


    return(
        <div className={styles.allContentContainer}>

            <div className={styles.imageContainer}>
                <img src={image} alt="" />

            </div>

            <div className={styles.countryTitleContainer}>
                <h1>{country}</h1>

            </div>

            <div className={styles.countryDescriptionContainer}>
                <div className={styles.populationContainer}>
                    <p>{population}</p>

                </div>

                <div className={styles.regionContainer}>
                    <p>{region}</p>

                </div>

                <div className={styles.capitalContainer}>
                    <p>{capital}</p>

                </div>
            </div>

        </div>


    )
}

export default ListDisplayComponent