import React, { useState } from 'react';
import {BiFilter} from "react-icons/bi";
import {CiSearch} from "react-icons/ci";
import { useTable } from 'react-table';
import { Link, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import Table from './table';
import { useGlobalFilter } from 'react-table';

function MyCell({ value, columnProps: { rest: { someFunc } } }) {
  return <button onClick={someFunc}>{value}</button>
}

export default function Lab() {

  const  link = "/lab/view-report";

    const dummyData= [
        {hosiptalName:"Alpha general",OwnerName:"chuks", testResult:" Malaria Paracite Test",Time:"14:00" ,Remark:"complete",Report:"view-report" , status:"Approve",complaint:"malariaX2"},
        {hosiptalName:"Beta general",OwnerName:"chuks", testResult:" chest x-ray",Time:"14:00" ,Remark:"complete",Report:"view-report",status:"Approve",complaint:"malariaX2"},
        {hosiptalName:"omega general",OwnerName:"chuks", testResult:" condensation test",Time:"14:00" ,Remark:"complete",Report:"view-report",status:"Approve",complaint:"malariaX2"},
        {hosiptalName:"zootopia general",OwnerName:"chuks", testResult:" breast cancer test",Time:"14:00" ,Remark:"complete",Report:"view-report",status:"Approve",complaint:"malariaX2"},
        {hosiptalName:" kentuky general",OwnerName:"chuks", testResult:" stapyloccous test",Time:"14:00" ,Remark:"complete",Report:"view-report",status:"Approve",complaint:"malariaX2"},
        {hosiptalName:" paradise general",OwnerName:"chuks", testResult:"chicken-pox test",Time:"14:00" ,Remark:"complete",Report:"view-report",status:"Approve",complaint:"malariaX2"},
       
      ];

      const COLA =[
        {
            Headers: "Hospital/laboratory",
            accessor:"hosiptalName",
            Cell: ({ cell: { row } }) => {
              return (
                <div>
                 <p style={{fontSize:"13px"}}> {row.original.hosiptalName} </p>
                  <br/>
                  <p>{row.original.OwnerName}</p>
                </div>
              );
            },
        },
        {
            Headers: "Test-type",
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
             <Link to={link} style={{color:"#fff", textDecoration:"none",}}>
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
          {/* <h2>Medical Record <IoIosArrowForward/> Lab</h2> */}
          {/* <p>This Month <MdOutlineCancel /></p> */}
        </div>
        {/* /search component would be here  */}
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
      </div>
      <div className='table'>

      <Table columns={columns} data={data}  getTableProps={ getTableProps}    getTableBodyProps={  getTableBodyProps} headerGroups={headerGroups} rows={rows} state={state} setGlobalFilter={ setGlobalFilter} prepareRow={  prepareRow}/>


              {/* <div className='table-4'>
                <ul>
                  <li>Hospital/ Laboratory</li>
                  <li>Test-type</li>
                  <li>Complaint</li>
                  <li>Status</li>
                </ul>
              </div> */}
                {/* this would layout component to return the data based on filter request */}
                      {/* { dummyData.map((items)=>{
                          return(
                              <>        
                  <div className='table-3'>
                  <ul>
                    <li>{items.hosiptalName}<br/> {items.OwnerName}</li>
                    <li>{items.testResult}</li>
                    <li>{items.complaint}</li>
                    <li>< FcCheckmark className='center'/><br/>{items.status}</li>
                    <li><button onClick={handleclick}>{items.Report}</button></li>                      
                  </ul>
              </div>
                  </>
                          )
                      })} */}




      </div>
    </div>
  )
}

