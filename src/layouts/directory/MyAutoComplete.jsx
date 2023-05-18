import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import axios from 'axios';
const MyAutocomplete = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (event, value) => {
        setLoading(true);

        // Simulate AJAX call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Perform your AJAX call here and update the searchResults state with the fetched data
        const response = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json', {
            method: 'GET',
            query: {
                keyword: 'restaurants',
            },
            headers: {
                'key': 'AIzaSyAsaYL7N_dhGk1q2jTRC1WoXRqkiMimXw8',
            },
        });

        const data = await response.json();

        console.log(data);
        // setSearchResults(results);

        setLoading(false);
    };

    const yourAjaxCall = async (searchValue) => {
        // Make your AJAX call here to fetch data based on the searchValue
        // Return the fetched data as an array of options
        const response = await fetch(`your-api-url?search=${searchValue}`);
        const data = await response.json();
        return data;
    };

    return (
        <Autocomplete
            options={searchResults}
            loading={loading}
            getOptionLabel={(option) => option.label}
            getOptionSelected={(option, value) => option.value === value.value}
            onInputChange={handleSearch}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search"
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading && <span>Loading...</span>}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    );
};

export default MyAutocomplete;