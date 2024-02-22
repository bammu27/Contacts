import React, { useState } from 'react'
import { Link, } from 'react-router-dom'





const CreateUser = () => {
    const[fname,Setfname] = useState('')
    const[lname,Setlname] = useState('')
    const[email,Setemail] = useState('')
  

    const handleSubmit =(e)=>{

        e.preventDefault()

        if(!fname || !lname || !email){

            alert('include all fields')
            return
        }

        const newuser = {
            "fName":fname,
            "lName":lname,
            "email":email

        }

        
        fetch('http://127.0.0.1:5000/create_contact',
            {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json', 
                    
                },
                body:JSON.stringify(newuser)


            }
        

        ).then(response=>response.json())
        .then(data=>{
            console.log('Success:',data)
            alert('User Created')
            Setfname('')
            Setlname('')
            Setemail('')
        
           
        }
        )
        .catch(error=>console.log('error',error))






    }



  return (
    <>
    <h1 className='create_title'>Create User</h1>
    <div className='create_container'>
        <form className='form_container' onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input className='input'  value={fname} onChange={(e)=>Setfname(e.target.value)} ></input>

            <label>Last Name:</label>
            <input className='input' value={lname}  onChange={(e)=>Setlname(e.target.value)}></input>

            <label>Email</label>
            <input className='input' value={email} onChange={(e)=>Setemail(e.target.value)}></input>


            <button className='btn' type='submit'>CreateUser</button>
            

        </form>
        
      
     </div>
     <div className='btn' id='homeBtn' >
        <Link to="/" className='create_link'>Home</Link>
        
    </div>
            

     </>
  )
}

export default CreateUser