// Name : Heba Atef Mohamed
import React, { useState } from "react";
import './App.css';
export type thisState ={
  name: string ;
  age : number  | null ;
  email: string;
  address: string;
  gender: string;
  phoneNumber: null;
  nationalid: number  | null;
  Nationality : string ;
  startdate:string;
  enddate:string;
  roomnum:number | null;
  roomtype:string;
  Cost:number | null ;
};
type Props = {
 onSubmit:(value:thisState) => void
}
function Form({onSubmit}:Props) {
  const [state, setState] = useState<thisState>({
    name: '',
    age : null,
    email: '',
    address: '',
    gender: '',
    phoneNumber:null,
    nationalid: null,
    Nationality : '',
    startdate:'',
    enddate:'',
    roomnum:null,
    roomtype:'',
    Cost:null
  });
  function HandleFun(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e)
    if (e.target.type === "text" || e.target.type === "email"||e.target.type === "radio" ||e.target.type === "date" ){
      setState({...state, [e.target.name]: e.target.value});
    }else {
      setState({...state, [e.target.name]: Number(e.target.value)});
      
    }
  };
  const handelSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(state)
  }
  return (
      <div className="maincontainer">
        <div className="topnav">
        <a href="#home">Home</a>
         <a className="active" href="#booking">Registration Form</a>
         <a href="#Offers">Offers</a>
         <a href="#contact">Contact</a>
         <a href="#about">About</a>
         </div>
        <body>
          <div className="form">
            <form name="myform" onSubmit={(e) => handelSubmit(e)}>
              <div className="head">
              <h1 className="text"> H-R-F </h1>
              <br/>
              <h3 className="text" > Hotel Reservation Form </h3>
              </div>
              <div>
                <input type="text" className="Name" name="name" placeholder="Name" onChange={HandleFun} /> 
                <input type="email" className="email" placeholder="Email@gmail.com" name="email"  onChange={HandleFun}/>
                <br/> 
                <label> Nationality :  </label>
                <select name="Nationality" className="nationality" >
                   <option value="Enter the nationality"> Please Choose your Nationality </option>
                   <option value="Australian">Australian</option>
                   <option value="British">British</option>
                   <option value="Belgian">Belgian</option>
                   <option value="Canadian">Canadian</option>
                   <option value="Chinese">Chinese</option>
                   <option value="Emirati">Emirati</option>
                   <option value="Egyptian">Egyptian</option>
                   <option value="French">French</option>
                   <option value="German">German</option>
                   <option value="Italian">Italian</option>
                   <option value="Iraqi">Iraqi</option>
                   <option value="Indian">Indian</option>
                   <option value="Japanese">Japanese</option>
                   <option value="Kuwaiti">Kuwaiti</option>
                   <option value="Omani">Omani</option>
                   <option value="Palestinian">Palestinian</option>
                   <option value="Qatari">Qatari</option>
                   <option value="Saudi Arabian">Saudi Arabian</option>
                   <option value="Syrian">Syrian</option>
                  </select>
                <input type="text" name="address" className="address" placeholder="Address"  onChange={HandleFun}/>
                <input type="number" name="age" placeholder="Age" className="age" maxLength={2} onChange={HandleFun} />
                <div>  
                  <label className="gender">  Gender :  </label> 
                  <input type="radio" className="male" value="Male" name="gender" onChange={HandleFun} /> Male <br/>
                  <input type="radio" className="female" value="Female" name="gender" onChange={HandleFun} /> Female  
                </div>
                <label> Phone Number :   </label>
                <input onChange={HandleFun} type="text" name="phoneNumber" className="phone" placeholder="+20xxxxxxxxxx" maxLength={11} /> <br/> 
                <label>   National ID  :   </label>
                <input onChange={HandleFun} type="text" name="nationalid" className="nationalid" id="nationalId" placeholder="xxxxxxxxxxxxx" maxLength={14} />        
                </div> <br/><br/>
              <fieldset className="fieldset">
                <legend>< h3 className="reservation"> Rooms Reservation : </h3></legend><br/>
                <label><h3 className="roomnum" >Please , Sir : <br/><br/>How many number of Rooms you want to reserve ? </h3></label>
                <input type="number" name="roomnum" className="Rooms" placeholder="0" max="6"  onChange={HandleFun} /><br/>
                <div className="date " >
              <label> Please Enter The Reservation Period : </label> <br/> <br/>
              <label> Start Date : </label>
              <input type="date" className="start" id="startdate" name="startdate" min="2022-09-01" onChange={HandleFun}  /><br/> <br/> <br/>
              <label> End Date : </label>
              <input type="date" className="end"  id="enddate" name="enddate" min="2022-09-30" onChange={HandleFun}  /><br/>
              </div> 
                <select name="roomtype" className="typesofroom">
                   <option value="Choose the Type of Room"> Please determine Room-Type </option>
                   <option value="Single" >Single</option>
                   <option value="Douple">Douple</option>
                   <option value="Triple">Triple</option>
                   <option value="Quad">Quad</option>
                   <option value="Suite">Suite</option>
                   <option value="Executive Suite">Executive Suite</option>
                   <option value="Mini Suite ">Mini Suite </option>
                   <option value="Junior Suite"> Junior Suite</option>
                  </select><br/> <br/>
                </fieldset><br/><br/><br/><br/>
              <label className="sub" >Send your suggestions to achieve the best service... Thank you</label>
              <textarea className="subject" name="subject" placeholder="Write your Suggestions .... "></textarea>
              <button type="submit" className="submit">Submit</button>  
              <button type="reset" className="submit">Reset</button>
            </form>
          </div>
        </body>
      </div>
    );
  }
  export default Form;