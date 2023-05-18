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
import { Country } from "country-state-city";

// Data
import { Stack } from "@mui/material";
import VuiInput from "components/VuiInput";
import BasicSelect from "./MtSelect";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiURL } from "config";
import MyAutocomplete from "./MyAutoComplete";
import VuiButton from "components/VuiButton";
function Directory() {
  const navigate = useNavigate();
  const [userSubs, setUserSubs] = useState([]);
  const [states,setStates] = useState([]);
  const countries = Country.getAllCountries().map(country => ({ name: country.name, value: country.isoCode }));
  useEffect(() => {
    axios.post(`${apiURL}/user/subscriptions`, {
      headers: {
        _id: localStorage.getItem('userID')
      }
    })
      .then(response => {
        setUserSubs(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [])
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Card>
            <VuiBox display="flex" flexDirection="column" height="100%">
              <VuiBox display="flex" flexDirection="column" mb="24px">
                <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                  Directory
                </VuiTypography>
              </VuiBox>
              {userSubs.length ? (<Stack direction={"row"} justifyContent='center' width='100%'>
                <div style={{ width: '50%' }}>
                  <VuiInput type="text" placeholder="Directory Name" style={{ marginBottom: '1rem' }} />
                  <BasicSelect title='Category (Business)' options={[
                    { name: 'Industry', value: 10 },
                    { name: 'Tech', value: 20 },
                    { name: 'Support', value: 30 }
                  ]} />
                  <BasicSelect title='Country' callback={setStates} options={countries} />
                  <BasicSelect title='State' options={states} />
                  <Stack direction='row' justifyContent='center' width='100%'>
                  <VuiButton variant="gradient" color="info" style={{marginTop:'1rem'}} size="medium">Submit</VuiButton>
                  </Stack>
                </div>
              </Stack>) :
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <div>
                    <Link to='/membership' style={{ color: 'white' }}>Buy Plan</Link>
                  </div>
                </div>
              }

            </VuiBox>
          </Card>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Directory;
