import React from 'react'
import { thisState } from './form'
type Props = {
  rows:thisState[]
}
export default function Table({rows}:Props) {
  return (
    <div>
      <table className='table'>
        <label> Client Data :</label><br/> <br/>
            <tr className='tablehead'>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th> Start Date </th>
              <th>End Date </th>
            </tr>
      {rows.map((row ,index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.gender}</td>
                <td>{row.phoneNumber}</td>
                <td>{row.startdate}</td>
                <td>{row.enddate}</td>
              </tr> ))}
      </table>
      <div>
        <br/><br/>
        <h1> Welcome Our Guest  </h1> <br/>
        <h2> You are submitting the following Data , so Please If there are any Problem Contact Us ... THANKS </h2>
        <br/>
        <table className ='Client data'>
        <tr className='table2'>
              <th>Number of Rooms</th>
              <th>Total Price </th>
        </tr>
        {rows.map((row ,index) => (
              <tr key={index}>
                <td>{row.roomnum}</td>
                <td>{row.Cost}</td>
              </tr>))}

        </table>

      </div>
    </div>
  )
}
