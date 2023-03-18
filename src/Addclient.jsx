import React, { useState } from "react";
import TextField from "@mui/material/TextField";

// import Button from "@material-ui/core/Button";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ReplayIcon from "@mui/icons-material/Replay";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import Sidebar from "./sidebar";
export default function Addclient() {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");

  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  const [hide4, setHide4] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const f1 = () => {
      setHide1(true);
      setHide2(false);
      setHide3(false);
      setHide4(false);
    };

    const f2 = () => {
      setHide2(true);
      setHide1(false);
      setHide3(false);
      setHide4(false);
    };

    const f3 = () => {
      setHide3(true);
      setHide1(false);
      setHide2(false);
      setHide4(false);
    };

    const f4 = () => {
      setHide4(true);
      setHide1(false);
      setHide2(false);
      setHide3(false);
    };

    // newValue === "CREATE PROFILE"
    //   ? f1()
    //   : newValue === "PAYMENT SETUP"
    //   ? f2()
    //   : f3() || f4();
    newValue === "CREATE PROFILE" && f1();
    newValue === "PAYMENT SETUP" && f2();
    newValue === "THEME SETUP" && f3();
    newValue === "MODULES SETUP" && f4();
  };
  const [age1, setAge1] = React.useState("");
  const [age2, setAge2] = React.useState("");
  const [age3, setAge3] = React.useState("");
  const [age4, setAge4] = React.useState("");
  const [age5, setAge5] = React.useState("");
  const [age6, setAge6] = React.useState("");
  const [age7, setAge7] = React.useState("");

  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };

  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };

  const handleChange3 = (event) => {
    setAge3(event.target.value);
  };

  const handleChange4 = (event) => {
    setAge4(event.target.value);
  };
  const handleChange5 = (event) => {
    setAge5(event.target.value);
  };
  const handleChange6 = (event) => {
    setAge6(event.target.value);
  };
  const handleChange7 = (event) => {
    setAge7(event.target.value);
  };
  const handleChange8 = (event) => {
    setValue1(event.target.value);
  };

  const [data, setData] = useState([
    "CREATE PROFILE",
    "PAYMENT SETUP",
    "THEME SETUP",
    "MODULES SETUP"
  ]);

  return (
    <>
      <Sidebar />
      <div
        style={{ marginLeft: "20%", marginTop: "-18%" }}
        // style={{
        //   marginLeft: "20%",
        //   marginTop: 20,
        //   display: "flex",
        //   flexDirection: "row"
        // }}
      >
        <Typography align="left" variant="h5">
          Add client
        </Typography>
        <h6>Client master/ Add Client/ Module Setup</h6>
        <Box sx={{ width: "100%", ml: "1%", mt: -1 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="inherit"
            aria-label="secondary tabs example"
          >
            {data.map((item, index) => (
              <Tab
                sx={{ color: "black" }}
                value={item}
                label={item}
                key={index}
              />
            ))}
          </Tabs>
        </Box>
      </div>

      {hide1 && (
        <div style={{ marginLeft: "15%" }}>
          <div>
            <h2>Create Client Profile</h2>
            <p>Add some basic information related to the client.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <AddCircleOutlineIcon sx={{ height: "12vh", width: "12vw" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4>Company Logo</h4>
              <p>Logo ratio should be 1:1 and should be 120px * 120px</p>
            </div>
          </div>

          <div>
            <div>
              {/* <Box
                sx={{
                  width: 500,
                  maxWidth: "30%"
                }}
              > */}
              <div style={{ display: "flex", flexDirection: "row" }}>
                <TextField
                  sx={{ width: "49%" }}
                  label="Company Name"
                  id="fullWidth"
                />
                &nbsp;
                <TextField
                  sx={{ width: "49%" }}
                  label="Website
                  "
                  id="fullWidth"
                />
              </div>
              &nbsp;
              <div>
                <FormControl sx={{ width: "49%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Select Buisness Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age1}
                    label="Select Buisness Category"
                    onChange={handleChange1}
                  >
                    <MenuItem value={10}>List Items</MenuItem>
                    <MenuItem value={20}>List Items</MenuItem>
                    <MenuItem value={30}>List Items</MenuItem>
                    <MenuItem value={40}>List Items</MenuItem>
                  </Select>
                </FormControl>
                &nbsp;
                <FormControl sx={{ width: "49%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Select Facility Management Company
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age2}
                    label="Select Facility Management Company"
                    onChange={handleChange2}
                  >
                    <MenuItem value={1}>List Items</MenuItem>
                    <MenuItem value={2}>List Items</MenuItem>
                    <MenuItem value={3}>List Items</MenuItem>
                    <MenuItem value={4}>List Items</MenuItem>
                  </Select>
                </FormControl>
              </div>
              &nbsp;
              <div>
                <TextField
                  sx={{ width: "49%" }}
                  label="Company Email Adress"
                  id="fullWidth"
                />
                &nbsp;
                <TextField
                  sx={{ width: "49%" }}
                  label="Mobile Number"
                  id="fullWidth"
                />
              </div>
              &nbsp;
              <div>
                <FormControl sx={{ width: "49%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Select State
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age3}
                    label="Select State"
                    onChange={handleChange3}
                  >
                    <MenuItem value={10}>List Items</MenuItem>
                    <MenuItem value={20}>List Items</MenuItem>
                    <MenuItem value={30}>List Items</MenuItem>
                    <MenuItem value={40}>List Items</MenuItem>
                  </Select>
                </FormControl>
                &nbsp;
                <FormControl sx={{ width: "40%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Select City
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age4}
                    label="Select City"
                    onChange={handleChange4}
                  >
                    <MenuItem value={10}>List Items</MenuItem>
                    <MenuItem value={20}>List Items</MenuItem>
                    <MenuItem value={30}>List Items</MenuItem>
                    <MenuItem value={40}>List Items</MenuItem>
                  </Select>
                </FormControl>
                &nbsp;
                <TextField
                  sx={{ width: "9%" }}
                  label="Pincode"
                  id="fullWidth"
                />
              </div>
              &nbsp;
              <div>
                <TextField
                  sx={{ width: "49%" }}
                  label="GST Number"
                  id="fullWidth"
                />
                &nbsp;
                <TextField
                  sx={{ width: "49%" }}
                  label="Fax Number"
                  id="fullWidth"
                />
              </div>
              {/* </Box> */}
              {/* <TextField  id="outlined-basic" label="name" variant="outlined" />
              <TextField id="outlined-basic" label="pppp" variant="outlined" /> */}
            </div>
          </div>

          <div style={{ marginTop: "2%" }}>
            <Button
              variant="contained"
              // color="primary"
              // className={classes.button}
              endIcon={<ArrowForwardIosIcon />}
            >
              Save & continue
            </Button>

            <Button
              sx={{ marginLeft: "2" }}
              variant="contained"
              // color="default"
              // className={classes.button}
              startIcon={<ReplayIcon />}
            >
              Reset
            </Button>
          </div>
        </div>
      )}

      {hide2 && (
        <>
          <div style={{ marginLeft: "15%" }}>
            <div>
              <h3>Payment setup</h3>
              <p>Setup payment for the Clients</p>
            </div>

            <div>
              <div>
                <TextField
                  sx={{ width: "98%" }}
                  label="Billing Adress"
                  id="fullWidth"
                />
              </div>
              &nbsp;
              <div>
                <FormControl sx={{ width: "49%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Select State
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age5}
                    label="Select State"
                    onChange={handleChange5}
                  >
                    <MenuItem value={10}>List Items</MenuItem>
                    <MenuItem value={20}>List Items</MenuItem>
                    <MenuItem value={30}>List Items</MenuItem>
                    <MenuItem value={40}>List Items</MenuItem>
                  </Select>
                </FormControl>
                &nbsp;
                <FormControl sx={{ width: "40%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Select City
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age6}
                    label="Select City"
                    onChange={handleChange6}
                  >
                    <MenuItem value={10}>List Items</MenuItem>
                    <MenuItem value={20}>List Items</MenuItem>
                    <MenuItem value={30}>List Items</MenuItem>
                    <MenuItem value={40}>List Items</MenuItem>
                  </Select>
                </FormControl>
                &nbsp;
                <TextField
                  sx={{ width: "8%" }}
                  label="Pincode"
                  id="fullWidth"
                />
              </div>
              &nbsp;
              <div>
                <FormControl sx={{ width: "49%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Select Number of Site Access
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age7}
                    label="input"
                    onChange={handleChange7}
                  >
                    <MenuItem value={10}>List Items</MenuItem>
                    <MenuItem value={20}>List Items</MenuItem>
                    <MenuItem value={30}>List Items</MenuItem>
                    <MenuItem value={40}>List Items</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  sx={{ width: "40%" }}
                  label="Rs:payable Amount for site"
                  id="fullWidth"
                />{" "}
                <TextField
                  sx={{ width: "8%" }}
                  label="Total RS:0000"
                  id="fullWidth"
                />
              </div>
              &nbsp;
              <div>
                <TextField
                  sx={{ width: "49%" }}
                  label="Discount(%)"
                  id="fullWidth"
                />
                &nbsp;
                <TextField
                  sx={{ width: "49%" }}
                  label="Reason"
                  id="fullWidth"
                />
              </div>
              &nbsp;
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <h6>Payment Mode</h6>
                <FormGroup style={{ display: "flex", flexDirection: "row" }}>
                  <FormControlLabel control={<Checkbox />} label="UPI" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Net Banking"
                  />
                  <FormControlLabel control={<Checkbox />} label="Cash" />
                  <FormControlLabel control={<Checkbox />} label="Cheque" />
                  <FormControlLabel control={<Checkbox />} label="Other" />
                </FormGroup>
              </div>

              <div style={{ marginLeft: "15%" }}>
                <h6>Payment Status</h6>
                <FormControlLabel control={<Checkbox />} label="paid" />
                <FormControlLabel control={<Checkbox />} label="pending" />
              </div>
            </div>

            <div style={{ marginTop: "2%" }}>
              <Button
                variant="contained"
                // color="primary"
                // className={classes.button}
                endIcon={<ArrowForwardIosIcon />}
              >
                Save & continue
              </Button>

              <Button
                sx={{ marginLeft: "2" }}
                variant="contained"
                // color="default"
                // className={classes.button}
                startIcon={<ReplayIcon />}
              >
                Reset
              </Button>
            </div>
          </div>
        </>
      )}

      {hide3 && (
        <>
          <div style={{ marginLeft: "15%" }}>
            <div>
              <h2>Theme Setup</h2>
              <p>
                Add information about the client to give them a personalised
                expiernce
              </p>
            </div>

            <div>
              <TextField
                id="standard-read-only-input"
                label="primary color"
                defaultValue="*153AC7"
                InputProps={{
                  readOnly: true
                }}
                variant="standard"
              />
              <p>Add max value</p>
            </div>
            <div>
              <h2>Login Theme</h2>
              <p>Select the look and feel of the login page</p>
            </div>
            <div>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value1}
                  onChange={handleChange8}
                >
                  <FormControlLabel
                    value="color"
                    control={<Radio />}
                    label="Use color"
                  />
                </RadioGroup>
              </FormControl>
              &nbsp;
              <TextField
                id="outlined-read-only-input"
                label=""
                defaultValue="#F8F9FD"
                InputProps={{
                  readOnly: true
                }}
              />
            </div>
            <div>
              <h6>Where Should be the login modol?</h6>
              <div style={{ dipaly: "flex", flexDirection: "row" }}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div style={{ marginTop: "2%" }}>
              <Button
                variant="contained"
                // color="primary"
                // className={classes.button}
                endIcon={<ArrowForwardIosIcon />}
              >
                Save & continue
              </Button>

              <Button
                sx={{ marginLeft: "2" }}
                variant="contained"
                // color="default"
                // className={classes.button}
                startIcon={<ReplayIcon />}
              >
                Reset
              </Button>
            </div>
          </div>
        </>
      )}

      {hide4 && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "15%"
            }}
          >
            <div>
              <div>
                <h4>Modules Setup</h4>
                <p>Select the modules that the client can use</p>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    defaultChecked
                    label="Home/Dashboard"
                  />
                  <FormControlLabel control={<Checkbox />} label="Helpdesk" />
                  <FormControlLabel control={<Checkbox />} label="Assets" />
                  <FormControlLabel
                    control={<Checkbox />}
                    defaultChecked
                    label="Dialy Tasks"
                  />
                  <FormControlLabel control={<Checkbox />} label="PPM" />
                  <FormControlLabel control={<Checkbox />} label="Emplyees" />
                  <FormControlLabel control={<Checkbox />} label="Profile" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Transactions"
                  />
                </FormGroup>
              </div>
              <div style={{ marginTop: "2%" }}>
                <Button
                  variant="contained"
                  // color="primary"
                  // className={classes.button}
                  endIcon={<ArrowForwardIosIcon />}
                >
                  Save & continue
                </Button>

                <Button
                  sx={{ marginLeft: "2" }}
                  variant="contained"
                  // color="default"
                  // className={classes.button}
                  startIcon={<ReplayIcon />}
                >
                  Reset
                </Button>
              </div>
            </div>
            <div style={{ marginTop: "5%", marginLeft: "5%" }}>
              <div>
                <h2>Dialy tasks</h2>
                <p>Select the sub modules that the client can use</p>
              </div>
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Show All SUb Modules"
                  />
                  <FormControlLabel control={<Checkbox />} label="View Tasks" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Create New Task"
                  />
                  <FormControlLabel control={<Checkbox />} label="Logbook" />
                  <FormControlLabel control={<Checkbox />} label="Logsheet" />
                  <FormControlLabel control={<Checkbox />} label="Dialy" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Activity Wise"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Transactions"
                  />
                </FormGroup>
              </div>
            </div>
          </div>
        </>
      )}
      {/* </Sidebar> */}
    </>
  );
}
