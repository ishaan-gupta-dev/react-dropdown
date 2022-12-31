import React, { useState } from 'react';
import '../styles/Dropdown.css';
import mongoDBImage from '../assets/mongoDB.png';
import expressJsImage from '../assets/expressJs.png';
import reactJsImage from '../assets/reactJs.png';
import nodeJsImage from '../assets/nodeJs.png';
function Dropdown({ dropdownOptions }) {

    // to control if list of options is to be displayed or not
    const [isDisplay, setDisplay] = useState(false);
    // to display the selected value
    const [selectedValue, setselectedValue] = useState("");
    // to display the selected value image
    const [selectedImage, setselectedImage] = useState("");
    // to store the href of the selected value
    const [hrefValue, sethrefValue] = useState("");


    // shows content of the selected option in display area
    const showOptionInDisplayArea = (event) => {
        setselectedValue(event.target.textContent);
        if (event.target.textContent == "MongoDB") {
            setselectedImage(mongoDBImage);
            sethrefValue("https://www.mongodb.com/");
        } else if (event.target.textContent == "Express") {
            setselectedImage(expressJsImage);
            sethrefValue("https://expressjs.com/");
        } else if (event.target.textContent == "React") {
            setselectedImage(reactJsImage);
            sethrefValue("https://reactjs.org/");
        } else if (event.target.textContent == "NodeJs") {
            setselectedImage(nodeJsImage);
            sethrefValue("https://nodejs.org/en/");
        }
        setDisplay(false);
    };

    // showing list options on hover
    const handleOnMouseHover = () => {
        setDisplay(true);
    }

    // iterating over all the options to show one by one in a list format, giving click handler to each option
    const dropdownOptionsUI = dropdownOptions.map((dropdownOption, index) => {
        return <li className='dropdown-option' onClick={showOptionInDisplayArea} key={index}>{dropdownOption}</li>;
    });

    // hide list options if user click anywhere else
    window.onclick = () => {
        setDisplay(false);
    }
    return (
        <div className='super-container'>
            <div className="dropdown-container">
                <div className="dropdown-div" onMouseOver={handleOnMouseHover}>
                    <span> Select an option </span> <i className="fa-solid fa-caret-down"></i>
                </div>
                {isDisplay ? <ul className='dropdown-options'>{dropdownOptionsUI}</ul> : ""}
            </div>
            <div className='display-area'>
                <h1>Click on the logo to go to the official website</h1>
                <div className='display-content'>
                    {selectedValue !== "" ?
                        <a target="_blank" href={hrefValue}>
                            {/* <span className='selected-value'>{selectedValue}</span> */}
                            <img src={selectedImage} alt="image logo" />
                        </a>
                        :
                        ""}
                </div>
            </div>
        </div >

    );
}

export default Dropdown;