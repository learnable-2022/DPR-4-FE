import React from 'react';
import { useTable } from 'react-table';
import "./sub-records.css";

export default function Table({ columns, data}) {

    const tableInstance  = useTable({columns, data})

    const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow
    }= useTable({columns, data})


  return (
    <>
    <div className='container'>
               <table {...getTableProps()}>
           <thead>
               {headerGroups.map((headerGroup) => (
             
                   <tr {...headerGroup.getHeaderGroupProps()}>
                       {headerGroup.headers.map((column) => (
                           <th {...column.getHeaderProps()}>
                               {column.render('Headers')}
                               {console.log("headerGroup", headerGroup)}
                           </th>
                       ))}
                   </tr>
               ))}
           </thead>
           <tbody {...getTableBodyProps()}>
               {rows.map((row) => {
                   prepareRow(row);
                   return (
                       <tr {...row.getRowProps()}>
                           {row.cells.map((cell) => {
                               return (
                                 <>
                                   <td {...cell.getCellProps()}>
                                       {cell.render('Cell')}
                                   </td>
                                  
                                 </>
                               );
                           })}
                       </tr>
                   );
               })}
           </tbody>
       </table>
               </div>
                </>
  )
}
