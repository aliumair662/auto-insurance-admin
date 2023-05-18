
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import team1 from "assets/images/avatar1.png";
import team2 from "assets/images/avatar2.png";
import team3 from "assets/images/avatar3.png";
import team4 from "assets/images/avatar4.png";

// @mui material components
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import VuiTypography from "components/VuiTypography";

// Images
import profile1 from "assets/images/profile-1.png";
import profile2 from "assets/images/profile-2.png";
import profile3 from "assets/images/profile-3.png";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "examples/Footer";
import Header from "layouts/memberships/components/Header";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Stack } from "@mui/material";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Memberships() {
    const [data, setData] = useState([]);

    const handleSubscription = () => {

    }

    useEffect(() => {
        // Fetch data from the backend API endpoint
        axios.get('http://localhost:3000/api/subscriptionPlan')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <DashboardLayout>
            <Header />
            <Grid mt={4} item xs={12} xl={9}>
                <Card>
                    <VuiBox display="flex" flexDirection="column" height="100%">
                        <VuiBox display="flex" flexDirection="column" mb="24px">
                            <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                                Plans List
                            </VuiTypography>
                        </VuiBox>
                        <Stack direction={"row"} justifyContent='space-evenly' width='90%'>
                            {data.map(plans => (
                                <Stack direction='column' justifyContent='center' key={plans._id} mt={4} mb={4} alignItems='center' maxWidth='350px' textAlign='center' px={10} py={7} sx={{ ':hover': { transform: 'scale(1.02)' }, transition: '0.5s', background: ' linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%);', borderRadius: '30px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', cursor: 'pointer' }}>
                                    <Typography variant="h1" color='#fff' fontWeight='bold'>${plans?.price}</Typography>
                                    <Typography variant="h4" color='#f5f5f5' px={2} py={1} sx={{ background: '#344767', borderRadius:'25px'}} fontWeight='bold' mt={3}>{plans?.name}</Typography>
                                    <Typography maxWidth='120px' color='#C5C5C5' mt={2}>In this pakage you will be able to access a total of 50 sites</Typography>
                                    <Button variant="contained" sx={{ py: '10px', px: '40px', borderRadius: '15px', mt: '40px', color: '#fff', width: '100%' }} onClick={() => handleSubscription}>Subscribe</Button>
                                </Stack>
                            ))}
                        </Stack>
                    </VuiBox>
                </Card>
            </Grid>
            <Footer />
        </DashboardLayout>
    );
}

export default Memberships;