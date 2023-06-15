import React from 'react';
import { useTable } from 'react-table';
import "./sub-records.css";

export default function Table({ getTableProps, getTableBodyProps,headerGroups,rows,state,prepareRow}) {

   

   

   
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
           <tbody {...getTableBodyProps()} className='tbody'>
               {rows.map((row) => {
                   prepareRow(row);
                   return (
                       <tr {...row.getRowProps()} className='trow'>
                           {row.cells.map((cell) => {
                               return (
                                 <>
                                   <td {...cell.getCellProps()} className='tdate'>
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
