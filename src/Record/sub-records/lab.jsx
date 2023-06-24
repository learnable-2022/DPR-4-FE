import React, { useState } from 'react';
import {BiFilter} from "react-icons/bi";
import {CiSearch} from "react-icons/ci";
import { useTable } from 'react-table';
import { Link, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import Table from './table';
import { useGlobalFilter } from 'react-table';



export default function Lab() {

  const  link = "/lab/view-report";

  let getFormattedRecords = JSON.parse(localStorage.getItem("getFormattedRecords"));



    

      const dummyData = getFormattedRecords.map((item, index) => ({
        hosiptalName:item.billing[3],
        OwnerName:item.billing[3],
        testResult:item.treatmentDetails[2],
        Time:"14:00" ,
        Remark:"complete",
        Report:"view-report" , 
        status:"Approve",
        complaint:item.treatmentDetails[0],
        index: index
      }));

      const COLA =[
        {
            Headers: "Hospital/healthprovider",
            accessor:"hosiptalName",
            Cell: ({ cell: { row } }) => {
              return (
                <div>
                 <span style={{fontSize:"13px"}}> {row.original.hosiptalName} </span>
                  <br/>
                  <span>{row.original.OwnerName}</span>
                </div>
              );
            },
        },
        {
            Headers: "Test-type/treatments",
            accessor:"testResult",
        },
        {
            Headers: "Complaint",
            accessor:"complaint",
        },
        // {
        //     Headers: "Status",
        //     accessor:"status",
        // },
        {
            Headers: "",
            accessor:"him",
            Cell: ({ cell: { row } }) => (
              <>
             <div className='view-report-button'>
             <Link to={`${link}/${row.original.index}`} style={{color:"#fff", textDecoration:"none",}}>
             {row.original.Report}  
              </Link>
             </div>
            </>
            ),
           
            
        },
    ];


    const columns = useMemo(()=> COLA, []);
    const data = useMemo(()=> dummyData, []);

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      state,
      setGlobalFilter,
      prepareRow,
}= useTable({columns, data}, useGlobalFilter);

const { globalFilter } = state;


      const navigate = useNavigate();
      const handleclick=()=>{
        navigate("/lab/view-report");
        console.log("its working!")
      }

  return (
    
    <div className='overview-container'>
      <div className='visit-navigation'>
        <div className= "visit-header">
       
        </div>
       
        <div className='search'>
          <CiSearch/>
          <input 
           type="text" 
           value={globalFilter || ''}
           placeholder='search'
           onChange={(e) => setGlobalFilter(e.target.value)}
           />

          <BiFilter className='icon'/>
        </div>
        <div className='select-folder'>
        <select name="link" id="link-id" onChange={(e)=> navigate(e.target.value)}>
          <option value="/Records/overview">overview</option>
            <option   value="/Records/visit">visit</option>
            <option   value="/Records/vaccine">vaccine</option>
            <option  value="/Records/prescription">prescription</option>
            <option  value="/Records/lab">lab</option>
          </select>
        </div>
      </div>
      <div className='table'>

     <div className='table-display'>
     <Table columns={columns} data={data}  getTableProps={ getTableProps}    getTableBodyProps={  getTableBodyProps} headerGroups={headerGroups} rows={rows} state={state} setGlobalFilter={ setGlobalFilter} prepareRow={  prepareRow} />
     </div>

     <div className='table2-display' >
            {/* <div className='table-1-vaccine'>
             
             
             
            
            </div>
             */}
            {dummyData.map((items)=>{
                return(
            <div className='table-2-vaccine'>
                  <ul>
                  <h4>Hospital/ healthprovider</h4>
                    <li>{items.hosiptalName} <br/>{items. OwnerName}</li>
                    <h4>Test-type</h4>
                    <li>{items.testResult}</li>
                    <h4>complaint</h4> 
                    <li>{items.complaint}</li>
                    <li><button onClick={handleclick}>{items.Report}</button></li>
                  </ul>
            </div>


              )
          })}
       </div>

      </div>
    </div>
  )
}

