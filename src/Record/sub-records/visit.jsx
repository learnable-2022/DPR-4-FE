import React from 'react';
import {BiFilter} from "react-icons/bi";
import {CiSearch} from "react-icons/ci";
import { useGlobalFilter } from 'react-table';
import {  useNavigate } from 'react-router-dom';
import Table from './table';
import { useTable } from 'react-table';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';


export default function Visit() {

const navigate =useNavigate();

const takeme =()=>{
  return navigate("/visit/visiterReport")
}

  const dummyData= [
    {hosiptalName:"Gen. Hospital, Enugu Town", name:"Dr. Ada Gen. Medicine",date:"02/05/2023",Time:"13:00 PM" ,complaint:"malariaX2",Report:"view-report"},
    {hosiptalName:"Gen. Hospital, Enugu Town", name:"Dr. Ada Gen. Medicine", date:"02/05/2023",Time:"13:00 PM" ,complaint:"malariaX2",Report:"view-report"},
    {hosiptalName:"Gen. Hospital, Enugu Town", name:"Dr. Ada Gen. Medicine", date:"02/05/2023",Time:"13:00 PM" ,complaint:"malariaX2",Report:"view-report"},
    {hosiptalName:"Gen. Hospital, Enugu Town", name:"Dr. Ada Gen. Medicine", date:"02/05/2023",Time:"13:00 PM" ,complaint:"malariaX2",Report:"view-report"},
    {hosiptalName:"Gen. Hospital, Enugu Town", name:"Dr. Ada Gen. Medicine", date:"02/05/2023",Time:"13:00 PM" ,complaint:"malariaX2",Report:"view-report"},
  
  ]
  const link ="/visit/visiterReport"
  const CALA =[
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
        Headers: "Data/time",
        accessor:"date",
        Cell: ({ cell: { row } }) => {
          return (
            <div>
             <p style={{fontSize:"13px"}}> {row.original.date}</p>
              <br/>
             <p> {row.original.Time}</p>
            </div>
          );
        },
    },
    {
        Headers: "Complaint",
        accessor:"complaint",
    },
    {
        Headers: "",
        accessor:"Report",
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

const columns = useMemo(()=> CALA,[]);
const data = useMemo(()=> dummyData,[]);


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
        <div className='visit-header'>
        
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
        {/* <div className='table-1'>
          <h4>Hospital/ Attending</h4>
          <h4>Date/Time</h4>
          <h4>Complaint </h4>
        </div> */}

        {/* this would layout component to return the data based on filter request */}
        {/* {dummyData.map((items)=>{
          return(
        <div className='table-2'>
          <ul>
            <li>{items.hosiptalName}<br/>{items.date}</li>
            <li>{items.Time}</li>
            <li>{items.Remark}</li>
            <li><button onClick={takeme}>{items.Report}</button></li>
          </ul>
        </div>
        )
      })} */}
      
      </div>
    </div>
  )
}
