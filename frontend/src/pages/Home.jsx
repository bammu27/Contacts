import React ,{useEffect, useState}from 'react'
import { Link } from 'react-router-dom';





const Home = () => {

  const[users,Setusers] = useState([])
  

  useEffect(()=>{
    fetch('http://127.0.0.1:5000/').
    then(response => response.json()).
      then(data => (Setusers(data.contacts))).
      catch(error=>console.log(error))
  }

 ,[] )


const delete_contact = (id) =>{   
  fetch(` http://127.0.0.1:5000/delete_contact/${id}`,{


    method:'DELETE',
  }).then(response=>response.json())
  .then(data=>{console.log('Success:',data)
  

  fetch('http://127.0.0.1:5000/')
      .then(response => response.json())
      .then(data => Setusers(data.contacts))
      .catch(error => console.log(error));
  })


}





  return (
    <>
    
    <h2 className='title'>Users</h2>

    <div className='container'>

    { 
        users.map((user)=>

          <div key={user.id} className='user_container'>
            <p>{user.id}</p>
            <h3 className='user_name'>{user.fName} {user.lName}</h3>
            <h4 className='user_email'>{user.email}</h4>
            <div className='create_btn'>
            
            <Link to={`/update/${user.id}`} className='create_link'>UpdateUser</Link>
      
            </div>

            <button className='delete_btn' onClick={()=>{delete_contact(user.id)}} >Delete</button>
            
          </div>

          )
     
    }
    </div>
    <div className='create_btn'>
            
            <Link to="/create" className='create_link'>Createuser</Link>
      
    </div>

    </>
  )
}

export default Home