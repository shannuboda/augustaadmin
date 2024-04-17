import React, {useState, useEffect } from 'react'
import { useLocation,useParams } from 'react-router-dom';
function Form1() {
    const location = useLocation();
   const { id } = useParams();
console.log(id);
    let [statusData,setStatusData] = useState({})



    useEffect(()=>{
        document.querySelector('.myhead').style.display='none'
        const getMydata = async(formData) =>{
            const options = {
              method: 'GET',
              headers: {Authorization: 'Bearer xau_ucuJHLz9N54FKlJIPlV1eGuaSXrJYPWC0', 'Content-Type': 'application/json'}
            };
            
    
            const db_Data = await fetch(`https://shannuboda-s-workspace-s7j279.us-east-1.xata.sh/db/augusta:main/tables/admission/data/${id}`, options)
            const result = await db_Data.json()
              setStatusData(result)
              
            }
            getMydata()
          
    },[])
    console.log(statusData);
  return (
    <div style={{background:'white',padding:'0'}}>
         <div class="container1">
      <header>
        <div class="rh2" style={{}}>
          <h3>Augusta Aviations</h3>
          <p style={{marginTop:'-1rem'}}>
            <b
              >Flat No:202, Cyber Residency, Indira Nagar, Gacchibowli,
              Hyderabad, Telengana.,Ph:9100795816</b
            >
          </p>
        </div>
      </header>
      <div class="hr"></div>
     
        <div class="heading-1">
          <h2>Application Form</h2>
          <hr color="green" />
        </div>
        <div class="b1">

          <div class="admissiondetails-print">
            <div class="admn">Admission Details</div>
            <div class="admn1">
              <div class="admn11">
                <b>Application ID: </b> <u>{statusData.ApplicationID}</u>
              </div>
              <div class="admn12">
                <b>Record ID:</b><u>{statusData.id}</u>
              </div>
            </div>
            <div class="admn1" style={{marginLeft: '-15rem', marginTop: '-1rem'}}>
              <div class="admn11">
                <b>Date of Submittion of Application: </b> <u></u>
              </div>
            </div>
          </div>


          <div class="admissiondetails">
            <div class="admn">Admission Details</div>
            <div class="admn1">
              <div class="admn11">
                <b>Application ID: </b> <u>{statusData.ApplicationID}</u>
              </div>
              <div class="admn12">
                <b>Record ID:</b><u>{statusData.id}</u>
              </div>
              <div class="admn11">
                <b>Date of Submittion of Application: </b> <u>{}</u>
              </div>
             </div>
          </div>

          <div class="Personaldetails">
            <div class="pd">Personal Details</div>
            <div class="p1">
              <div class="p11">
                <b>FirstName: </b> <u>{statusData.FirstName}</u>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div class="p12"><b>LastName: </b><u>{statusData.LastName}</u></div>
              &nbsp;&nbsp; &nbsp;&nbsp;
              <div class="p12"><b>FatherName: </b><u>{statusData.FatherName}</u></div>
            </div>
            <div class="p2">
              <div class="p11"><b>MotherName: </b> <u>{statusData.MotherName}</u></div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div class="p12"><b>Date of Birth: </b><u>{statusData.DateofBirth}</u></div>
              &nbsp;&nbsp; &nbsp;&nbsp;
              <div class="p12"><b>Blood Group: </b><u>{statusData.BloodGroup}</u></div>
            </div>
            <div class="p2">
              <div class="p11"><b>Caste: </b> <u>{statusData.Caste}</u></div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div class="p12"><b>Religion: </b><u>{statusData.Relegion}</u></div>
              &nbsp;&nbsp; &nbsp;&nbsp;
              <div class="p12"><b>Nationality: </b><u>{statusData.Nationality}</u></div>
              &nbsp;&nbsp; &nbsp;&nbsp;
              <div class="p12"><b>AadharNumber: </b><u>{statusData.AadharNumber}</u></div>
            </div>
            <div class="p2">
              <div class="p12"><b>Hoster Required: </b><u>{statusData.HostelRequired}</u></div>
              &nbsp; &nbsp; &nbsp;
              <div class="p11">
                <b>Parent Annual Income: </b> <u>{statusData.ParentAnnualIncome}</u>
              </div>
              &nbsp; &nbsp;
              <div class="p12">
                <b>Parent Occupation: </b><u>{statusData.ParentOccupation}</u>
              </div>
            </div>
            <div class="p2">
              <div class="p11">
                <b>Highest Qualification: </b> <u>{statusData.HighestQualification}</u>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div class="p11">
                <b>Highest Qualification Percentage: </b> <u>{statusData.HighestQualificationPercentageorCGPA}</u>
              </div>
            </div>
          </div>

          <div class="Personaldetails">
            <div class="pd">Address and Communicational Details</div>
            <div class="p1">
              <div class="p11">
                <b>Canditade Mobile Number: </b> <u>{statusData.MobileNumber} </u>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div class="p12">
                <b>Canditade Whatsapp Number: </b> <u>{statusData.WhatsappNumber} </u>
              </div>
            </div>
            <div class="p2">
              <div class="p11">
                <b>Canditade Mobile Number: </b> <u>{statusData.ParentMobileNumber}</u>
              </div>
            </div>
            <div class="p2">
              <div class="p11">
                <b>Full Address: </b>
                <u>{statusData.ResidentialAddress}</u>
              </div>
              &nbsp; &nbsp; &nbsp;
              <div class="p11">
                <b>City: </b> <u>{statusData.City}</u>
              </div>
            </div>
            <div class="p2">
              <div class="p11"><b>State: </b> <u>______{statusData.State}___________</u></div>
              &nbsp; &nbsp; &nbsp;
              <div class="p11"><b>Pincode: </b> <u>_{statusData.Pincode}___</u></div>
            </div>
          </div>

          <div class="Personaldetails">
            <div class="pd">Payment Details</div>
            <div class="p1">
              <div class="p11"><b>UTRNumeber: </b> <u>{statusData.UTRNumber} </u></div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div class="p12"><b>RefID: </b> <u>{statusData.PaymentrefernceId} </u></div>
            </div>
            <div class="p2">
              <div class="p11">
                <b>Amount Paid</b> <u>RS:2500/-</u>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>Status</b> <u>{statusData.Status}</u>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <b>Remarks</b> <u>{statusData.Remarks}</u>
              </div>
            </div>
          </div>
          <div class="signatures">
            <div class="authsign">
              <p>Authorized Signature</p>
            </div>
            <div class="studentsign">
              <p>Signature of the Candidate</p>
            </div>
          </div>
        </div>
      
    </div>

    </div>
  )
}

export default Form1