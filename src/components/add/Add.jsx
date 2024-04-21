import React from 'react'
import './Add.css'
export default function Add({slug, columns, setOpen}) {
    const handleSubmit = e=>{
        e.preventDefault();
    }
  return (
    <div className='add'>
        <div className="modal">
            <span className="modalClose" onClick={()=>setOpen(false)}>X</span>
            <h1>Add new {slug}</h1>
            <form onSubmit={handleSubmit}>
                { columns.filter((item)=>item.field !== 'id' && item.field !== 'img')
                .map((column)=>(
                    <div className="columnItem">
                        <label htmlFor="">{column.headerName}:</label>
                        <input type={column.type} placeholder={column.field} />
                    </div>
                ))}
                <button onClick={()=>setOpen(false)}>Submit</button>
            </form>
        </div>
    </div>
  )
}
