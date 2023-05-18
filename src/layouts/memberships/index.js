/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import axios from 'axios'
// Data
import { Stack } from "@mui/material";

import { useState, useEffect } from "react";
import MmbShipCard from "./card";
import { apiURL } from "config";
function MemberShip() {

  const [plans, setPlans] = useState([]);
  useEffect(() => {
    // Fetch data from the backend API endpoint
    axios.get(`${apiURL}/membership`, {
      headers: {
        _id: localStorage.getItem('userID')
      }
    })
      .then(response => {
        setPlans(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Card>
            <VuiBox display="flex" flexDirection="column" height="100%">
              <VuiBox display="flex" flexDirection="column" mb="24px">
                <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                  Plans List
                </VuiTypography>
              </VuiBox>
              <Stack direction={"row"} justifyContent='space-evenly' width='90%'>
                {plans.map(plan => (<MmbShipCard key={plan._id} plan={plan} />))}
              </Stack>
            </VuiBox>
          </Card>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default MemberShip;
