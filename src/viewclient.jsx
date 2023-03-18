import React from "react";
import Sidebar from "./sidebar";
import Box from "@mui/material/Box";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import InputAdornment from "@mui/material/InputAdornment";
export default function Viewclient() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "companyname",
      headerName: "Company name",
      width: 150,
      editable: true
    },
    {
      field: "emailadress",
      headerName: "Email adress",
      type: "email",
      width: 150,
      editable: true
    },
    {
      field: "phonenumber",
      headerName: "phone number",
      type: "number",
      width: 110,
      editable: true
    },
    {
      field: "contactperson",
      headerName: "Contact person",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160
    },
    {
      field: "tenants",
      headerName: "Tenants",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160
    },
    {
      field: "Tenantgroup",
      headerName: "Tenant group",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160
    },
    {
      field: "action",
      headerName: "Action",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160
    }
  ];
  const rows = [
    {
      id: 1,
      emailadress: "management@infosys.com",
      phonenumber: "+91 9563214587",
      companyname: "Infosys",
      contactperson: "vijayent Roy",
      Facilitator: "",
      Sites: "12",
      tenants: "",
      TenantGroups: "",
      Actions: ":"
    },
    {
      id: 2,
      emailadress: "management@wipro.com",
      phonenumber: "+91 9834687423",
      companyname: "wipro",
      contactperson: "kalpit soni",
      Facilitator: "",
      Sites: "8",
      tenants: "",
      TenantGroups: "",
      Actions: ":"
    },
    {
      id: 3,
      emailadress: "management@accenture.com",
      phonenumber: "+91 9834687423",
      companyname: "accenture",
      contactperson: "Drishti sane",
      Facilitator: "",
      Sites: "4",
      tenants: "",
      TenantGroups: "",
      Actions: ":"
    },
    {
      id: 5,
      emailadress: "management@Capegemini.com",
      phonenumber: "9945131314",
      companyname: "Capegemini",
      contactperson: "+91 8434687995",
      Facilitator: "",
      Sites: "6",
      tenants: "",
      TenantGroups: "2",
      Actions: ":"
    },
    {
      id: 6,
      emailadress: "management@hcl.com",
      phonenumber: "+91 9945161984",
      companyname: "HCL",
      contactperson: "Venkat Pant",
      Facilitator: "",
      Sites: "5",
      tenants: "",
      TenantGroups: "",
      Actions: ":"
    },
    {
      id: 7,
      emailadress: "management@tcss.com",
      phonenumber: "+91 9632457468",
      companyname: "TCS",
      contactperson: "Prabhat Rao",
      Facilitator: "",
      Sites: "12",
      tenants: "",
      TenantGroups: "",
      Actions: ":"
    },
    {
      id: 8,
      emailadress: "management@lodha.com",
      phonenumber: "+91 9945131314",
      companyname: "Lodha",
      contactperson: "Khanika Khare",
      Facilitator: "",
      Sites: "24",
      tenants: "",
      TenantGroups: "16",
      Actions: ":"
    },
    {
      id: 9,
      emailadress: "management@mphasis.com",
      phonenumber: "=91 9452136487",
      companyname: "Mphasis",
      contactperson: "Shwetha Chawla",
      Facilitator: "",
      Sites: "5",
      tenants: "2",
      TenantGroups: "1",
      Actions: ":"
    },
    {
      id: 10,
      emailadress: "management@larsentubo.com",
      phonenumber: "+91 9745154964",
      companyname: "Larsen & Turbo",
      contactperson: "Abjishek kumar",
      Facilitator: "",
      Sites: "12",
      tenants: "",
      TenantGroups: "",
      Actions: ":"
    }
  ];

  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: "15%", marginTop: "-18%" }}>
        <div>
          <h4>View Client</h4>
          <p>client master/view client</p>
        </div>
        <div>
          <TextField
            sx={{ width: "10%", marginBottom: "2%" }}
            placeholder="Search"
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
        </div>
        <div>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 9
                  }
                }
              }}
              pageSizeOptions={[9]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </div>
      </div>
    </>
  );
}
