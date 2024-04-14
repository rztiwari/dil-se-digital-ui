import { InputLabel, Slider } from "@material-ui/core";
import { useState } from "react";
import { grey } from "@material-ui/core/colors";
import BasicTooltip from "./BasicTooltip";

const SliderField = ({ label,  minValue=0, maxValue=100, handleChange=null, tooltip}) => {

    const handleValueChange = (event, newValue) => {
        handleChange && handleChange(newValue);
    };
    
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    }
    const handleBlur = () => {
        setFocused(false);
    }

    return (
        <div style={{display:'flex', flexDirection:'row'}}>
            <InputLabel 
                style={{
                    fontSize:'.7rem',
                    color: focused ? '#1976d2' : grey[500]
                }}
            >
                {label}
            </InputLabel>
            <Slider  
                mim={minValue}
                max={maxValue}
                defaultValue={50} 
                aria-label={label} 
                valueLabelDisplay="auto"
                style={{margin:'0 1rem', maxWidth:'300px'}}
                onChange={handleValueChange}
                onFocus={()=> handleFocus()}
                onBlur={() => handleBlur()}
            />
            {tooltip && <BasicTooltip 
                value={tooltip}
            />}
        </div>
    );
};

export default SliderField;