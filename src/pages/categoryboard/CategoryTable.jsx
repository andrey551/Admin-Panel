import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Link, IconButton,  Button, Input, TextField} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "../../styles/table.css"


const CategoryTable = () => {
  return (
    <div style={{ height: '24em', width: '46em', margin: 40}}>
      <div style={{marginBottom: 10}}>
        <Button sx={{marginRight: '30em', backgroundColor: 'rgba(121, 202, 129, 0.8)', height: '2.8em'}}><img src={require("../../assets/option-icon/add.png")} style={{width: '1.75em'}} /></Button>
          <TextField
          size='small'
            variant='outlined'
            label = 'Search'
            InputProps={{
              endAdornment:
              <SearchOutlinedIcon />
              }}
          />
        </div>
      <DataGrid
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        disableColumnSelector
        disableColumnMenu
        disableColumnFilter
        disableSelectionOnClick
      />
    </div>
  );
}

const columns = [
  { field: 'name', headerName: <b>Name</b>, width: 180, editable: true, sortable: 'false' },
  {
    field: 'dateCreated',
    headerName: <b>Date Created</b>,
    type: 'date',
    width: 180,
    editable: true,
    sortable: 'false'
  },
  {
    field: 'lastModified',
    headerName: <b>Last Modified</b>,
    type: 'dateTime',
    width: 220,
    editable: true,
    sortable: 'false'
  },
  {
    headerName: <b>Option</b>,
    width: 150,
    renderCell: () =>(  
        <div>      
            <Link underline="hover" href="#" sx={{paddingRight: 5}}>
                {"Detail"}
            </Link>
            <Delete/>
        </div>)
  },


];

const rows = [
  {
    id: 1,
    name: "Sherlock Holmes",
    dateCreated: "25/08/2021",
    lastModified: '25/08/2021',
  },
  {
    id: 2,
    name: "Sherlock Holmes",
    dateCreated: "25/08/2021",
    lastModified: '25/08/2021',
  },
  {
    id: 3,
    name: "Sherlock Holmes",
    dateCreated: "25/08/2021",
    lastModified: '25/08/2021',
  },
  {
    id: 4,
    name: "Sherlock Holmes",
    dateCreated: "25/08/2021",
    lastModified: '25/08/2021',
  },
  {
    id: 5,
    name: "Sherlock Holmes",
    age: 25,
    dateCreated: "25/08/2021",
    lastModified: '25/08/2021', 
  },
];

const Delete = () =>{

    return(
        <>
              <IconButton aria-label="delete" color="primary" sx={{width: 30, height: 30}}>
                <img src={require("../../assets/option-icon/delete.png")}  style={{width: 30}}/>
              </IconButton>
        </>
    )
}

export default CategoryTable;