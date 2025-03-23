import { useState } from "react";
import { MdDarkMode , MdOutlineDarkMode } from "react-icons/md";


const HeaderNModeComponent = () =>{

    const [isDarkMode, setIsDarkMode]= useState(false)

    const toggleMode = () => {
        setIsDarkMode (!isDarkMode)
    }

    return(
        <div className="allContentContainer">
            <div className="headingContainer">
                <h1> Where In The World ? </h1>
            </div>

            < div className="iconAndTitleContainer">
                <div className="iconContainer" onClick={toggleMode}>
                    {isDarkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
                </div>

            

                <div className="titleContainer">
                    <p>Dark Mode</p>

                </div>
            
            </div>
        </div>  
    )
}

export default HeaderNModeComponent 
