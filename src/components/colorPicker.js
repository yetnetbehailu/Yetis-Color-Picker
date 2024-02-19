import React, { useState } from 'react';
import '../styles/colorPicker.css'

function ColorPicker() {
  // Variable that holds the current state value and a function to update it
    const [selectedColor, setSelectedColor] = useState('#FFFFFF');

    const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
    };

    const updateElementColor = (elementId) => {
    document.getElementById(elementId).style.color = selectedColor;
    };

    const updateElementBackgroundColor = (elementId) => {
    document.getElementById(elementId).style.backgroundColor = selectedColor;
    };

    return (
    // React.Fragment groups multiple JSX elements without adding extra nodes(eg.div)to the DOM tree(alternative syntax <></>)
    <React.Fragment>
        <h2>Choose a color!</h2>
        {/* Defines a color picker */}
        <input type="color" value={selectedColor} onChange={handleColorChange}/>

        <div className = "colorDisplay" style={{ backgroundColor: selectedColor }}>
        </div>

        {/* RGB value of color */}
        <p>RGB: {selectedColor}</p>

        <button onClick={() => updateElementColor('textElement')}>
        Update text color
        </button>
        <button onClick={() => updateElementBackgroundColor('buttonElement')}>
        Update button color
        </button>

        <p id="textElement">This text can change color</p>
        <button id="buttonElement">This button can change background color</button>
    </React.Fragment>
    );
}

export default ColorPicker;
