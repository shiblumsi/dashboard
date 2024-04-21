
import React from 'react'
import './DataTable.css'

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

  
  


export default function DataTable({columns, slug, rows}) {
    const handleDelete = (id) => {
        //delete the item
        // mutation.mutate(id)
        console.log('delete',id);
      };
    const actionColumn = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="action">
              <Link to={`/${slug}/${params.row.id}`}>
                <img src="" alt="X" />
              </Link>
              <div className="delete"  onClick={()=>handleDelete(params.row.id)}>
                <img src="" alt="X" />
              </div>
            </div>
          );
        },
      };
  return (
    <div className='dataTable'>
      <DataGrid
      className='dataGrid'
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs:500},
            },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}
