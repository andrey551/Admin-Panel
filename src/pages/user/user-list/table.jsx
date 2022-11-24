import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import { Autocomplete, TextField, IconButton, Menu, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import "../../../styles/table.css"

const columns = [
  { field: 'id', headerName: <b>ID</b>, width: 70  , disableColumnMenu :'true',   disableColumnFilter : 'true',},
  { field: 'name', headerName: <b>Name</b>, width: 130,  disableColumnMenu :'true',  disableColumnFilter : 'true', },
  { field: 'username', headerName: <b>Username</b>, width: 130,  disableColumnMenu :'true',  disableColumnFilter : 'true', },
  {field: "email", headerName: <b>Email</b>, width: 250,  disableColumnMenu :'true',  disableColumnFilter : 'true',},
  {
    field: 'age',
    headerName: <b>Age</b>,
    type: 'number',
    disableColumnFilter : 'true',
    disableColumnMenu :'true',
    width: 90,
  },
  {
    field: 'verified',
    headerName: <b>Verified</b>,
    type: 'string',
    renderCell: (data) => <DisplayVerified verified={data} />,
    disableColumnFilter : 'true',
    disableColumnMenu :'true',
    width: 100
  },
  {
    field: "status",
    headerName: <b>Status</b>,
    type: 'string',
    renderCell: (data) => <DisplayStatus status={data} />,
    disableColumnFilter : 'true',
    disableColumnMenu :'true',
    width: 100
  }, {
    renderCell: () => <ActionOption />,
    disableColumnMenu :'true',
    disableColumnFilter : 'true',
    disableColumnSelector : 'true'
  }
];

const rows = [
  { id: 1, username: 'Snow', name: 'Jon', age: 35, verified: 'Yes', status: 'Active', email: 'hello@duolingo.com' },
  { id: 2, username: 'Lannister', name: 'Cersei', age: 42, verified: 'no', status: 'Banned', email: 'Codeforces@codeforces.com' },
  { id: 3, lastName: 'Lannister', name: 'Jaime', age: 45, verified: 'Yes', status: 'Active', email: 'jobs@dice.com' },
  { id: 4, username: 'Stark', name: 'Arya', age: 16, verified: 'Yes', status: 'Banned', email: 'message@isu.ifmo.ru' },
  { id: 5, username: 'Targaryen', name: 'Daenerys', age: null, verified: 'no', status: 'Active', email: 'news@isu.ifmo.ru' },
  { id: 6, username: 'Melisandre', name: null, age: 150, verified: 'Yes' , status: 'Banned', email: 'hwcapacedm@marketing.huaweicloud.com'},
  { id: 7, username: 'Clifford', name: 'Ferrara', age: 44, verified: 'no', status: 'Active', email: 'FA@fsoft.com.vn' },
  { id: 8, username: 'Frances', name: 'Rossini', age: 36, verified: 'Yes' , status: 'Banned', email: 'FA@fsoft.com.vn'},
  { id: 9, username: 'Roxie', name: 'Harvey', age: 65, verified: 'no', status: 'Active', email: 'noreply@mail.accounts.riotgames.com' },
  { id: 10, username: 'Snow', name: 'Jon', age: 35, verified: 'Yes', status: 'Active', email: 'mary@email.numerade.com' },
  { id: 11, username: 'Lannister', name: 'Cersei', age: 42, verified: 'no', status: 'Banned', email: 'contact@tutorialspoint.com' },
  { id: 12, username: 'Lannister', name: 'Jaime', age: 45, verified: 'Yes', status: 'Active', email: 'message@isu.ifmo.ru' },
  { id: 13, username: 'Stark', name: 'Arya', age: 16, verified: 'Yes', status: 'Banned', email: 'contact@tutorialspoint.com' },
  { id: 14, username: 'Targaryen', name: 'Daenerys', age: null, verified: 'no', status: 'Active', email: 'hello@duolingo.com' },
  { id: 15, username: 'Melisandre', name: null, age: 150, verified: 'Yes' , status: 'Banned', email: 'FA@fsoft.com.vn'},
  { id: 16, username: 'Clifford', name: 'Ferrara', age: 44, verified: 'no', status: 'Active', email: 'mary@email.numerade.com' },
  { id: 17, username: 'Frances', name: 'Rossini', age: 36, verified: 'Yes' , status: 'Banned', email: 'contact@tutorialspoint.com'},
  { id: 18, username: 'Roxie', name: 'Harvey', age: 65, verified: 'no', status: 'Active', email: 'noreply@mail.accounts.riotgames.com' },
];
const fieldOptions = ['ID', 'First name', 'Last name', 'Age', 'Full name', 'Verified', 'Status']
export default function DataTable() {
    const [searchOption, setSearchOption] = React.useState('');

    const handleChange = (event) => {
      setSearchOption(event.target.value);
    };
  return (
    <div style={{ height: 527, width: '100%', marginLeft: 120 }}>
        <div style={{display: 'flex'}}>
        <FormControl>
            <InputLabel id="demo-simple-select-label">Search field</InputLabel>
            <Select labelId="demo-simple-select-label" sx={{width: 300}} id="demo-simple-select" value ={searchOption} label = "Search field" onChange={handleChange}>
                {fieldOptions.map((item) => {
                    return(<MenuItem value={item}>{item}</MenuItem>)
                })}
            </Select>
        </FormControl>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={rows.map(x=> x[searchOption])}
        sx={{ width: 730 }}
        renderInput={(params) => <TextField {...params} label="Search here..." />}
        />
        </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[7]}
        checkboxSelection
        disableSelectionOnClick = 'true'
        experimentalFeatures={{ newEditingApi: true }}
        sx={{ textAlign: 'center'}}
        onCellClick = {(e) => {
            
        }}
      />
    </div>
  );
}

const DisplayVerified = (verified) =>{
    console.log(verified.verified.value)
    if(verified.verified.value === "Yes") {
        return(
            <div style={{margin: 14}}>
                <img width={25} src={require("../../../assets/verified-icon/verified.png")} />
            </div>
        )
    } 
    return(
        <div style={{margin: 14}}>
            <img height={25} src={require("../../../assets/verified-icon/pending.png")} />
        </div>
    )
}

DisplayVerified.prototype = {
    verified: PropTypes.string
}

const DisplayStatus = (status) => {
    console.log(status.status.value)
    if(status.status.value === 'Active') {
        return(
            <div style={{borderRadius: 5, backgroundColor: 'rgba(161, 216, 161, 0.88)', color: 'rgba(7, 137, 7, 0.88)', padding: 5, width:50}}>
                <b >{status.status.value}</b>
            </div>
        )
    }

    return(
        <div style={{borderRadius: 5, backgroundColor: 'rgba(226, 32, 40, 0.54)', color: 'rgba(226, 32, 40, 0.88)', padding: 5, width:50}}>
            <b >{status.status.value}</b>
        </div>
    )

    
}

DisplayStatus.prototype = {
    status: PropTypes.string
}

const ActionOption = () =>{
    const actionOptions = ['Delete', 'Ban', 'Edit'];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
        <>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <img src={require('../../../assets/verified-icon/morevert.png' )} style={{width: 20}} />
            </IconButton>
            <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
            style: {
                maxHeight: 125,
                width: '10ch',
            },
            }}
        >
            {actionOptions.map((option) => (
            <MenuItem onClick={handleClose}>
                {option}
            </MenuItem>
            ))}
            </Menu>
        </>
    )
}