import React,{useState,useEffect} from "react";
import './students.css'
import { useNavigate } from "react-router-dom";


function Students() {
const Navigate = useNavigate()
 const [show, setShow] = useState(false);

  const[data,setData] = useState()
    
   
  useEffect(()=>{
     const FetchData = async()=>{
      setShow(true)
         const options = {
             method: 'POST',
             headers: {Authorization: 'Bearer xau_ucuJHLz9N54FKlJIPlV1eGuaSXrJYPWC0', 'Content-Type': 'application/json'},
             body: '{"columns":["id","ApplicationID","FirstName","LastName","FatherName","MotherName","DateofBirth","BloodGroup","Caste","Relegion","Nationality","HighestQualification","HighestQualificationPercentageorCGPA","MobileNumber","WhatsappNumber","ParentMobileNumber","ParentOccupation","ParentAnnualIncome","HostelRequired","ResidentialAddress","City","State","Pincode","PaymentrefernceId","UTRNumber","ReceiptPath","Status","Remarks","EmailId","AadharNumber"],"page":{"size":1000}}'
           };
 try{
     const mydata = await fetch('https://shannuboda-s-workspace-s7j279.us-east-1.xata.sh/db/augusta:main/tables/admission/query', options)
     const jsonData = await mydata.json();
     const records = jsonData.records
     setData(records)
   console.log('jjfjjjffjf',records);
 } catch(error){
     console.log(error);
 }
         setShow(false)
     }
    FetchData()
  },[])

const UpdateData = async(IndexValue)=>{
 const UpdatedValues = data[IndexValue];
 const form = new FormData();

 
 for (const key in UpdatedValues) {
   form.append(key, UpdatedValues[key]);
 }
   try {
     const response = await fetch("https://augusta-backend.onrender.com/Updateapi", {
       method: "POST",
       body: form,
     });

     if (!response.ok) {
       throw new Error("Failed to submit form");
     } else {
       // If submission is successful, you can handle the response here
       const responseData = await response.json();
       console.log("Form Updated successfully:", responseData);
       alert(
         "Candidate Data is Updated Successfully!!!!"
       );
     }
   } catch (error) {
     console.error("Error in Updating form:", error);
     alert("Failed to Update form. Please try again later.", error);
   } 
}
  return (
    <div className="main-body-data">
      {/* <div className="filter-contents">
        <div className="search-bar">
          {" "}
          <i className="fa fa-search"></i>{" "}
          <input type="text" placeholder="Search...." id="searchInput" />
        </div>
<br /> </div> */}
        <div className="" style={{overflowX:'auto',maxHeight:'65vh'}}>
          <table className="tabref">
          <tr>
                <th>#</th>
                <th>ApplicationId</th>
                <th>FullName</th>
                <th>Phone Number</th>
                <th>EmailId</th>
                <th>TransactionId</th>
                <th>UTR Number</th>
                <th>View</th>
                <th>Status</th>
                <th>Remarks</th>
                <th>Update</th>
            </tr>
            <tbody>
            { show?"Pls wait data is Loading!!!!":data && data.map((res, index) => (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{res.ApplicationID}</td>
                    <td>{res.FirstName+" "}{res.LastName}</td>
                    <td>{res.MobileNumber}</td>
                    <td>{res.EmailId}</td>
                    <td>{res.PaymentrefernceId}</td>
                    <td>{res.UTRNumber}</td>
                    <td><button className='button1'onClick={()=>{window.open(`/app/${res.id}`, '_blank');}}>View</button></td>
                    <td>
                        <select name="" id="" value={res.Status} onChange={(e)=>{const updatedData = [...data];updatedData[index].Status =e.target.value;setData(updatedData);}}>
                            <option value="Inprogress">Inprogress</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </td>
                    <td><textarea value={res.Remarks} onChange={(e)=>{const updatedData = [...data];updatedData[index].Remarks =e.target.value;setData(updatedData);}}/></td>
                    <td><button className='button2' onClick={()=>UpdateData(index)}>Update</button></td>
                    {/* Render other fields as needed */}
                </tr>
            ))}
        </tbody>
          </table>
        </div>
     
    </div>
  );
}

export default Students;
