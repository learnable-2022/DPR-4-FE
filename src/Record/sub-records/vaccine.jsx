import React from 'react'
import {BiFilter} from "react-icons/bi";
import {CiSearch} from "react-icons/ci";
import { useGlobalFilter } from 'react-table';
import Table from './table';
import { useTable } from 'react-table';
import { useMemo } from 'react';

export default function Vaccine() {
  const dummyData= [
    {hosiptalName:"Gen. Hospital, Enugu Town",name:"Dr. Ada (Gen. Medicine)",Date:"02/05/2023",Time:"14:00" ,Remark:"complete",vaccine:"Covid Vaccine Shots 1,2,3"},
    {hosiptalName:"Gen. Hospital, Enugu Town",name:"Dr. Ada (Gen. Medicine)", Time:"14:00" ,Remark:"complete",vaccine:"Covid Vaccine Shots 1,2,3",Date:"02/05/2023"},
    {hosiptalName:"Gen. Hospital, Enugu Town",name:"Dr. Ada (Gen. Medicine)", Time:"14:00" ,Remark:"complete",vaccine:"Covid Vaccine Shots 1,2,3",Date:"02/05/2023"},
    {hosiptalName:"Gen. Hospital, Enugu Town",name:"Dr. Ada (Gen. Medicine)", Time:"14:00" ,Remark:"complete",vaccine:"Covid Vaccine Shots 1,2,3",Date:"02/05/2023"},
    {hosiptalName:"Gen. Hospital, Enugu Town",name:"Dr. Ada (Gen. Medicine)", Time:"14:00" ,Remark:"complete",vaccine:"Covid Vaccine Shots 1,2,3" ,Date:"02/05/2023"},
    {hosiptalName:"Gen. Hospital, Enugu Town",name:"Dr. Ada (Gen. Medicine)", Time:"14:00" ,Remark:"complete",vaccine:"Covid Vaccine Shots 1,2,3",Date:"02/05/2023"},
    
  ]
  const COCA_COLA =[
    {
        Headers: "Hospital/laboratory",
        accessor:"hosiptalName",
        Cell: ({ cell: { row } }) => {
          return (
            <div>
             <p style={{fontSize:"13px"}}> {row.original.hosiptalName}</p>
              <br/>
             <p> {row.original.name}</p>
            </div>
          );
        },
    },
    {
        Headers: "Vaccines",
        accessor:"vaccine",
    },
    {
        Headers: "Date/time",
        accessor:"Time",
        Cell: ({ cell: { row } }) => {
          return (
            <div>
             <p style={{fontSize:"13px"}}> {row.original.Date}</p>
              <br/>
             <p> {row.original.Time}</p>
            </div>
          );
        },
    },
    {
        Headers: "Remark",
        accessor:"Remark",
    },
  
];
  const columns = useMemo(()=> COCA_COLA,[]);
  const data = useMemo(()=> dummyData,[])

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
  return (
    <div className='overview-container'>
      <div className='visit-navigation'>
        <div className= "visit-header">
          
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
        
        {/* <div className='table-1-vaccine'>
          <h4>Hospital/ Laboratory</h4>
          <h4>Vaccines</h4>
          <h4>Date/Time </h4>
          <h4>Remark</h4> */}
        {/* </div> */}
          {/* this would layout component to return the data based on filter request */}
        {/* {dummyData.map((items)=>{
            return(
        <div className='table-2-vaccine'>
              <ul>
                <li>{items.hosiptalName} <br/>{items.name}</li>
                <li>{items.vaccine}</li>
                <li>{items.Date}<br/>{items.Time}</li>
                <li>{items.Remark}</li>
              </ul>
        </div>


            )
        })} */}


      </div>
    </div>
  )
}
