import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { IRangeSliderProps } from './interfaces';

function valuetext(value: number) {
    return `${value}°C`;
}

export default function RangeSlider({ value, onChange }: IRangeSliderProps) {
    return (
        <Box className="filter__input">
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={onChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={1}
                max={1000}
            />
              <div className="filter__values">
                <p>{value[0]}$</p>
                <p>{value[1]}$</p>
            </div>
        </Box>
    );
}
