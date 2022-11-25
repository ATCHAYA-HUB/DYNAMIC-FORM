import React from 'react';
import { useState} from 'react';
import "./Form.css"

function ValidatingForm() {
    const initValues={username:'',email:'',password:''}
    const [formValues,setFormValues]=useState(initValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate=(values)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

        if(!values.username)
        errors.username="Username is Required";
        else if(values.username.length<5)
        errors.username="Username must have minimum 5 characters";
        else if(reg.test(values.username))
        errors.username="Username must contain only alphabets";

        if(!values.email)
        errors.email="Email is Required";
        
        if(!values.password)
        errors.password="Password is Required";
        else if(!preg.test(values.password))
        errors.password="Format of Password is not corrcet";
        return errors;
    }

    return ( 
        <>
            {
                Object.keys(formErrors).length===0 && isSubmit?
                (<center><h2 style={{background:"rgb(255, 246, 116)",marginBottom:"10px"}}>SUCCESSFULLY SIGNED-IN</h2></center>)
                :(<pre></pre>)
            }
        <div className='box'><center>
        <form onSubmit={handleSubmit}>
            <h1>DYNAMIC FORM</h1>
            
            <div className='row' >
                <label>User Name : </label>
                <br></br>
                <input type="text" id='username' placeholder='User Name' value={formValues.username} style={{height :"30px",width:"280px",marginTop:"15px",borderRadius:"10px"}}
                    onChange={handleChange}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.username}</p>

            <div className='row'>
                <label>E-mail : </label><br></br>
                <input type="email" id='email' placeholder='Email-id' value={formValues.email} style={{height :"30px",width:"280px",marginTop:"15px",borderRadius:"10px"}}
                    onChange={handleChange}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.email}</p>

            <div className='row'>
                <label>Password : </label><br></br>
                <input type="password" id='password' placeholder='Password' value={formValues.password} style={{height :"30px",width:"280px",marginTop:"15px",borderRadius:"10px"}}
                    onChange={handleChange}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.password}</p>

            <div className=''>
                <button style={{height :"30px",width:"120px",marginTop:"15px",borderRadius:"10px",marginBottom:"10px",backgroundColor:"rgb(225, 234, 244)"}}>Login</button>
            </div>
        </form></center>
        </div>
        </>
     );
}

export default ValidatingForm