import React from 'react'
import VuiButton from "components/VuiButton";
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useState } from 'react';
import { Stack } from "@mui/material";
import { apiURL } from 'config';

const MmbShipCard = ({ plan }) => {
    const [isSubscribed, setSubscribed] = useState(plan.subscribed);
    const handleSubscription = (planId) => {
        let userId = localStorage.getItem('userID');
        axios.post(`${apiURL}/subscription/subscribe`, { userId, planId })
            .then(response => {
                setSubscribed(true);
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (
        <Stack direction='column' justifyContent='center' mt={4} mb={4} alignItems='center' maxWidth='350px' textAlign='center' px={10} py={7} sx={{ ':hover': { transform: 'scale(1.02)' }, transition: '0.5s', background: ' linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%);', borderRadius: '30px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', cursor: 'pointer' }}>
            <Typography variant="h1" color='#fff' fontWeight='bold'>${plan.price}</Typography>
            <Typography variant="h4" color='#f5f5f5' px={2} py={1} sx={{ background: '#344767', borderRadius: '25px' }} fontWeight='bold' mt={3}>{plan.name}</Typography>
            <Typography maxWidth='120px' color='#C5C5C5' mt={2}>{plan.description}</Typography>
            {/* <Button variant="contained" sx={{ py: '10px', px: '40px', borderRadius: '15px', mt: '40px', color: '#fff', width: '100%' }} onClick={(e) => handleSubscription(e,plan._id)}>Subscribe</Button> */}
            <VuiButton variant="contained" disabled={isSubscribed} style={{ marginTop: '1rem' }} size="large" color={isSubscribed ? "success" : "info"} onClick={() => handleSubscription(plan._id)}>{isSubscribed ? "Subscribed" : "Subscribe"}</VuiButton>
        </Stack>
    );
}

export default MmbShipCard;