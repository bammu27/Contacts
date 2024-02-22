import React from 'react'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom';

const Updateuser = () => {

const[fname,Setfname] = useState('')
const[lname,Setlname] = useState('')
const[email,Setemail] = useState('')
const {id} = useParams()

const handleSubmit =(e)=>{
    e.preventDefault()
    const user = {};

        if (fname) user.fName = fname;
        if (lname) user.lName = lname;
        if (email) user.email = email;
    
    fetch(`http://127.0.0.1:5000/update_contact/${id}`,
    {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json', 
            
        },
        body:JSON.stringify(user)


    }


).then(response=>response.json())
.then(data=>{
    console.log('Success:',data)
    alert('User updated')
    Setfname('')
    Setlname('')
    Setemail('')

   
}
)
.catch(error=>console.log('error',error))



  }
  return (
    <>
    <h1 className='create_title'>Update User</h1>
    <div className='create_container'>
        <form className='form_container' onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input className='input'  value={fname} onChange={(e)=>Setfname(e.target.value)} ></input>

            <label>Last Name:</label>
            <input className='input' value={lname}  onChange={(e)=>Setlname(e.target.value)}></input>

            <label>Email</label>
            <input className='input' value={email} onChange={(e)=>Setemail(e.target.value)}></input>


            <button className='btn' type='submit'>UpdateUser</button>
            

        </form>
        
      
     </div>
     <div className='btn' id='homeBtn' >
        <Link to="/" className='create_link'>Home</Link>
        
    </div>
            

     </>
  )
}


export default Updateuser