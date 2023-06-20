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


let vitalSigns = JSON.parse(localStorage.getItem("vitalSigns"));
let treatmentDetails = JSON.parse(localStorage.getItem('treatmentDetails'));
let vaccine = JSON.parse(localStorage.getItem('vaccine'));
let prescription = JSON.parse(localStorage.getItem('prescription'));
let billing = JSON.parse(localStorage.getItem("patientBilling"));
let service = JSON.parse(localStorage.getItem("patientService"));

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
             <span style={{fontSize:"13px"}}> {row.original.hosiptalName}</span>
              <br/>
             <span > {row.original.name}</ span>
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
             <span style={{fontSize:"13px"}}> {row.original.date}</span>
              <br/>
             <span> {row.original.Time}</span>
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
       <div className='table2-display'>
         {/* <div className='table-1'>
         
          
         
        </div> */}

        {dummyData.map((items)=>{
          return(
        <div className='table-2-vaccine'>
          <ul>
          <h4>Hospital/ Attending</h4>
            <li>{items.hosiptalName}<br/>{items.date}</li>
            <h4>Date/Time</h4>
            <li>{items.Time}</li>
            <h4>Complaint </h4>
            <li>{items.complaint}</li>
        
            <li><button onClick={takeme}>{items.Report}</button></li>
          </ul>
        </div>
        )
      })}
       </div>
      
      </div>
    </div>
  )
}
