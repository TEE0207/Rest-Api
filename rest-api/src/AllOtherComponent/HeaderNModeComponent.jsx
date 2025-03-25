import { MdDarkMode , MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "./ThemeProvider";


const HeaderNModeComponent = () =>{

    const { isDarkMode, toggleTheme } = useTheme();

   
    return(
        <div className="allContentContainer">
            <div className="headingContainer">
                <h1> Where In The World ? </h1>
            </div>

            < div className="iconAndTitleContainer">
                <div className="iconContainer" onClick={toggleTheme}>
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
