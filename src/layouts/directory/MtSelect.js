import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { State } from "country-state-city";
export default function BasicSelect({ title, options, callback }) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
        if (typeof callback === 'function') {
            const states = State.getStatesOfCountry(event.target.value).map(state => ({
                name: state.name,
                value: state.isoCode
            }));
            callback(states)
        }
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <div><label style={{
                    fontSize: '1rem',
                    color: '#eaeaea',
                    marginLeft: '5px'
                }}>{title}</label></div>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    inputProps={{
                        className: 'mycolors'
                    }}
                >
                    {options.map((option, index) => <MenuItem key={index} value={option.value}>{option.name}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
}
