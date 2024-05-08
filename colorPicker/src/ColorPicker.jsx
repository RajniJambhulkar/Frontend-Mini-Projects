import React, {useState} from 'react'
function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value)
    }
    return(
        <div className="colorPicker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
            <p>selected color: {color}</p>
            </div>
            <label>Select a color: </label>
            <input type='color' value={color} onChange={handleColorChange}></input>

        </div>
    );
}
export default ColorPicker