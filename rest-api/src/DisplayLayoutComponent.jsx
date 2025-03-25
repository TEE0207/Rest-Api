import  { useEffect, useState } from 'react';
// import { NavLink } from "react-router-dom";
import HeaderNModeComponent from './AllOtherComponent/HeaderNModeComponent';
import { useTheme } from './AllOtherComponent/ThemeProvider';
import ListDisplayComponent from './AllOtherComponent/ListDisplayComponent';
const API_URL = 'https://restcountries.com/v3.1/all'
import styles from "./displaylayoutcomponent.module.css"

const DisplayLayoutComponent = ()=> {
   
    const { isDarkMode } = useTheme();
    const [countries, setCountries]= useState([])
    // const [loading, setLoading] = useState (false)

    useEffect(()=>{
        const getCountries = async () => {
            // setLoading(true)
            const response = await fetch (API_URL)
            const fetchedcountries = await response.json()
            setCountries(fetchedcountries)
            // setLoading(false)

        }
        getCountries() // activation of the useEffect Hook
    }, [])

    // Function to format population in thousands
    const formatPopulation = (population) => {
        if (!population) return 'N/A';
        const populationInThousands = (population);
        return new Intl.NumberFormat().format(populationInThousands);
    };

    return(
        <div className={`${styles.allContentContainer} ${isDarkMode ? styles.dark : styles.light}`}>
            
        <HeaderNModeComponent />

        


        <ul>
                {countries.map((country, index) => (
                    <li key={index}>
                        {/* <Link to={`/country/${country.name.common}`}> */}
                        <ListDisplayComponent
                           countryName = {country.name.common}
                           image = {country.flags.svg}
                           flagName = {`Flag of ${country.name.common}`}
                           population={formatPopulation(country.population)}
                           region= {country.region}
                           capital={country.capital?.[0]}


                        
                        
                        />
                        {/* </Link> */}
                    </li>
                ))}
            </ul>
       
        
      </div>
    )
}

export default DisplayLayoutComponent