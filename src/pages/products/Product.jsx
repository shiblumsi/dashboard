import React, { useState } from 'react'
import './Product.css'
import DataTable from '../../components/dataTable/DataTable';
import Add from '../../components/add/Add';
import {products} from '../../damiData'


const columns =[
{ field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

export default function Product() {
  const [open, setOpen] = useState(false)
  return (
    <div className='users'>
    <div className="userInfo">
      <h1>Products</h1>
      <button className='userBtn' onClick={()=>setOpen(true)}>Add New Product</button>
    </div>
    
    <DataTable columns={columns} slug="product" rows={products} />
    {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
  </div>
  )
}
