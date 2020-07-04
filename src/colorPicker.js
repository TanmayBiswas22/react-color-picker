import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ColorPicker = props => {
    const { defaultColor, handleSelectedColor, height, width } = props;
    const [color, setColor] = useState(defaultColor);
    function handleColorChange(e) {
        setColor(e.target.value);
        handleSelectedColor(e.target.value);
    }

    return (
        <input
            type="color"
            id="mycolorpicker"
            style={{ height, width }}
            value={color}
            onChange={e => handleColorChange(e)}
        />
    );
};

ColorPicker.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    defaultColor: PropTypes.string.isRequired,
    handleSelectedColor: PropTypes.func.isRequired
};
ColorPicker.defaultProps = {
    height: '23px',
    width: '44px'
};
export default ColorPicker;
