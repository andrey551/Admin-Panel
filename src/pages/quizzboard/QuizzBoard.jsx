import * as React from 'react';
import {  Button, TextField, IconButton} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "../../styles/table.css"
import { DataGrid } from '@mui/x-data-grid';
const QuizzBoard = () => {
    const columns = [
        { field: 'id', headerName: <b>ID</b>, width: 50 },
        {
          field: 'category',
          headerName: <b>Category</b>,
          width: 100,
          editable: true,
        },
        {
          field: 'question',
          headerName: <b>Question</b>,
          width: 150,
          editable: true,
        },
        {
          field: 'option_A',
          headerName: <b>A ( Correct Answer)</b>,
          width: 110,
          editable: true,
        },
        {
            field: 'option_B',
            headerName: <b>B</b>,
            width: 110,
            editable: true,
          },
          {
            field: 'option_C',
            headerName: <b>C</b>,
            width: 110,
            editable: true,
          },
          {
            field: 'option_D',
            headerName: <b>D</b>,
            width: 110,
            editable: true,
          }, {
            field: 'hint',
            headerName: <b>Hint</b>,
            editable: true
          }, {
            width: 50,
            renderCell: () => <Delete />
          }
      ];
      
      const rows = [
        { id: 1, category: 'Novel', question: 'Who wrote Sherlock Holmes?', option_A: 'Conan Doyle', option_B: 'Agatha Christine', option_C: 'Hikaru Mirakami', option_D: 'Ludwig van Beethoven', hint: "Detective is shrinking" },
        { id: 2, category: 'Novel', question: 'Who wrote Sherlock Holmes?', option_A: 'Conan Doyle', option_B: 'Agatha Christine', option_C: 'Hikaru Mirakami', option_D: 'Ludwig van Beethoven', hint: "Detective is shrinking" },
        { id: 3, category: 'Novel', question: 'Who wrote Sherlock Holmes?', option_A: 'Conan Doyle', option_B: 'Agatha Christine', option_C: 'Hikaru Mirakami', option_D: 'Ludwig van Beethoven', hint: "Detective is shrinking" },
        { id: 4, category: 'Novel', question: 'Who wrote Sherlock Holmes?', option_A: 'Conan Doyle', option_B: 'Agatha Christine', option_C: 'Hikaru Mirakami', option_D: 'Ludwig van Beethoven', hint: "Detective is shrinking" },
        { id: 5, category: 'Novel', question: 'Who wrote Sherlock Holmes?', option_A: 'Conan Doyle', option_B: 'Agatha Christine', option_C: 'Hikaru Mirakami', option_D: 'Ludwig van Beethoven', hint: "Detective is shrinking" },
        { id: 6, category: 'Novel', question: 'Who wrote Sherlock Holmes?', option_A: 'Conan Doyle', option_B: 'Agatha Christine', option_C: 'Hikaru Mirakami', option_D: 'Ludwig van Beethoven', hint: "Detective is shrinking" },
        { id: 7, category: 'Novel', question: 'Who wrote Sherlock Holmes?', option_A: 'Conan Doyle', option_B: 'Agatha Christine', option_C: 'Hikaru Mirakami', option_D: 'Ludwig van Beethoven', hint: "Detective is shrinking" },
        { id: 8, category: 'Novel', question: 'Who wrote Sherlock Holmes?', option_A: 'Conan Doyle', option_B: 'Agatha Christine', option_C: 'Hikaru Mirakami', option_D: 'Ludwig van Beethoven', hint: "Detective is shrinking" },
        { id: 9, category: 'Novel', question: 'Who wrote Sherlock Holmes?', option_A: 'Conan Doyle', option_B: 'Agatha Christine', option_C: 'Hikaru Mirakami', option_D: 'Ludwig van Beethoven', hint: "Detective is shrinking" },
      ];
    return (
        <>
        <div style={{ height: 400, width: '60em', margin : 20 }}>
        <div style={{marginBottom: 10}}>
        <Button sx={{marginRight: '45em', backgroundColor: 'rgba(121, 202, 129, 0.8)', height: '2.8em'}}><img src={require("../../assets/option-icon/add.png")} style={{width: '1.75em'}} /></Button>
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
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnSelector
        disableColumnMenu
        disableColumnFilter
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
        </>
    )
}


const Delete = () =>{

    return(
        <>
              <IconButton aria-label="delete" color="primary" sx={{width: 30, height: 30}}>
                <img src={require("../../assets/option-icon/delete.png")}  style={{width: 30}}/>
              </IconButton>
        </>
    )
}

export default QuizzBoard;