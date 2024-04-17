import React from 'react'
import "./HeaderStyles.css"
import Top from './Top'
function Home() {
  
  return (

    <div>
       
         <div class="main-body">
        <span>General Information</span>
        <br />
            <h1 align ="center"> Welcome To Admin Panel <br /> Admin Name Here</h1>
            <span>USER-DETAILS</span><br /><br />
            <table className='nameref'>
            <tr>
                    <td> Name </td>
                     <td>:</td> 
                     <td>Admin Name Here </td>
                     <td></td><td></td>
                     <td></td><td></td>
                     <td>Designation</td><td>:</td>
                     <td>Head</td>
            
            </tr>
            <tr> </tr><tr> </tr><tr> </tr>
            <tr>
                    <td> Username / Mail </td>
                     <td>:</td> 
                     <td>augustaviations1@gmail.com</td>
                     <td></td><td></td>
                     <td></td><td></td>
                     <td>Phone Number</td><td>:</td>
                     <td>9100795816</td>
            
            </tr>
            </table>
      </div>
    </div>
  )
}

export default Home