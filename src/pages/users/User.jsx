import React, { useState } from 'react'
import './User.css'
import DataTable from '../../components/dataTable/DataTable'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Add from '../../components/add/Add';
import { userRows } from '../../damiData';
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];




export default function User() {

  const [open, setOpen] = useState(false)

  return (
    <div className='users'>
      <div className="userInfo">
        <h1>Users</h1>
        <button className='userBtn' onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      
      <DataTable columns={columns} slug="user" rows={userRows} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
    
  )
}
