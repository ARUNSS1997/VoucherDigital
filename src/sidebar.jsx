import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  function navigate1() {
    navigate("/view");
  }
  function navigate2() {
    navigate("/add");
  }
  return (
    <>
      <div>
        <h4>Company names</h4>
        <TextField
          sx={{ width: "10%" }}
          placeholder="Search Modules"
          type="search"
          variant="outlined"
          size="small"
          //  onChange={handleSearchFieldOnChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />

        <h3>Client masters</h3>
        <div>
          <Button variant="contained" onClick={navigate1}>
            View Clients
          </Button>
        </div>
        <div style={{ marginTop: "2%" }}>
          <Button variant="contained" onClick={navigate2}>
            Add Clients
          </Button>
        </div>
      </div>
    </>
  );
}
