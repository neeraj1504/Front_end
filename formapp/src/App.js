
import './App.css';
import React, { useState } from 'react';
function App() {
  // const[firstname,setFirstname]=useState("");
  // const[secondname,setSecondname]=useState("");
  // console.log(firstname);
  // console.log(secondname);
  // function firstNmaeHolder(event){
  //   // console.log("porinting first name content");
  //   // console.log(event.target.value);
  //   setFirstname(event.target.value);
  // }
  // function secondtNmaeHolder(event){
  //   // console.log("printing second name content");
  //   // console.log(event.target.value);
  //   setSecondname(event.target.value); 
  // }

  const [formdata, setForm] = useState({ firstname: "", secondname: "", email: "", comments: "",isvisible:true,mode:"",favcar:"" });
  console.log(formdata);

  function formHandler(event) {
    const{name,value,checked,type}=event.target 
    setForm(prevdata => {
      return {
        ...prevdata,
        [name]:type==="checkbox"?checked:value
      }
    });
  }
  function clickHandeler(event){
    console.log("Sara data yaha print ho raha hai");
    console.log(formdata)
  }

  return (
    <div className="App">
      <input text="text" placeholder="first name"
        name="firstname" value={formdata.firstname} onChange={formHandler}></input>
      <br></br>
      <br></br>
      <input text="text" placeholder="second name"
        name="secondname" value={formdata.secondname} onChange={formHandler}></input>

      <br></br>
      <br></br>
      <input text="email" placeholder="Enter your email"
        name="email" value={formdata.email} onChange={formHandler}></input>
      <br></br>
      <br></br>
      <textarea placeholder='enter your comments' onChange={formHandler} name="comments" value={formdata.comments} />
      <br></br>
      <br></br>
      <input type='checkbox' name="isvisible" onChange={formHandler} checked={formdata.isvisible} id='isvisible' />
      <label htmlFor='isvisible'>Am i visible</label>
      <br></br>
      <br></br>
      <input type='radio' onChange={formHandler} name="mode" value="online-mode" id='online-mode' 
      checked={formdata.mode==="online-mode"}/>
      <label htmlFor='online-mode'>Online Mode</label>
      <input type='radio' onChange={formHandler} name="mode" value="offline-mode" id='offline-mode' 
      checked={formdata.mode==="offline-mode"}/>
      <label htmlFor='offline-mode'>Offline Mode</label>
      <br></br>
      <br></br>
      <label htmlFor='favcar'>Tell me your fav car</label>
      <select name="favcar" id='favcar' onChange={formHandler} value={formdata.favcar}>
        <option value="Scarpio">Scarpio</option>
        <option value="Tharr">Tharr</option>
        <option value="Defender">Defender</option>
        <option value="Farari">Farari</option>
        <option value="Ninja-H2R">Ninja-H2R</option>
      </select>
      <br></br>
      <br></br>
      <button onClick={clickHandeler}>submit</button>
    </div>
  );
}

export default App;
