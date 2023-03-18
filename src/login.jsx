import React from "react";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // const navigate = useNavigate();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  // const navigate = useNavigate();
  const loginfn = () => {
    // const formData = new FormData();
    // formData.append(
    //   "login_details",
    //   JSON.stringify({
    //     data: {
    //       email: "eve.holt@reqres.in",
    //       password: "5cityslicka"
    //     }
    //   })
    // );
    // axios.post("https://reqres.in/api/login", formData).then((response) => {
    //   console.log(response.data);
    // });
  };
  function change() {
    navigate("/view");
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = () =>
    // event: React.MouseEvent<HTMLButtonElement>
    {
      // event.preventDefault();
    };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          backgroundColor: "#000000"
        }}
      >
        <div
          style={{
            // marginTop: "15%",
            width: "30%",
            // marginLeft: "10%",
            backgroundColor: "#FFFFFF"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "45%",
              left: "30%",
              transform: `translate(-50%,-50%)`
            }}
          >
            <h2 align="center" style={{ fontWeight: "bold", fontSize: "99%" }}>
              Welcome
            </h2>
            <p style={{ fontSize: "65%", marginLeft: "25%", marginTop: "2%" }}>
              {" "}
              Enter your Username and Password{" "}
            </p>

            <FormControl
              sx={{
                width: { sm: 200, md: 300 },
                "& .MuiInputBase-root": {
                  height: 30
                }
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Username
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                startAdornment={
                  <InputAdornment position="start">
                    <PersonIcon sx={{ height: "3vh" }} />
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <br />
            <br />

            <FormControl
              sx={{
                width: { sm: 200, md: 300 },
                "& .MuiInputBase-root": {
                  height: 30
                }
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon sx={{ height: "3vh" }} />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ height: "3vh" }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>

                    {/* </InputAdornment> */}
                  </InputAdornment>
                }
                label="Password"
              />
              loginfn
            </FormControl>
            <br />

            <div style={{ marginTop: "5%" }}>
              <Stack>
                {/* <NavLink to={"/add"}> */}
                <Button
                  onClick={() => {
                    loginfn();
                    change();
                  }}
                  sx={{
                    width: { sm: 200, md: 300 },
                    "& .MuiInputBase-root": {
                      height: 30
                    }
                  }}
                  variant="contained"
                  size="small"
                >
                  Login
                </Button>
                {/* </NavLink> */}
              </Stack>
            </div>
            <br />

            <a style={{ marginLeft: "40%", fontSize: "65%" }} href="/">
              {" "}
              Forgot Password?
            </a>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#0000CD"
          }}
        >
          <div
            style={{
              border: "1px solid black",
              marginLeft: "12%",
              position: "absolute",
              width: "35%",
              zIndex: 2,
              left: "500px",
              top: "150px",
              height: "150px",
              backgroundColor: "#FFFFFF",
              boxShadow: "1px 2px 9px #F4AAB9",
              transform: "skewX(20deg)"
            }}
          ></div>

          <h5 style={{ color: "wheat", marginTop: "65%", marginLeft: "10%" }}>
            360 solution for Asset Management
          </h5>
          <p>
            lorem edmadn anfalf anfalefa fanflnakfn aefnanefaef amnfamnf amafdas
            afssd ffd
          </p>
        </div>
      </div>
      {/* </Box> */}
      {/* </div> */}
    </>
  );
}
