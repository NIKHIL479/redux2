import React from 'react'
import { connect } from 'react-redux'
import AddEditContact from './AddEditContact'
import { getsingleContact,deleteContact } from './action'

export const App = (props) => {
  var contacts=props.contacts
  var getsinglecontact=props.getsinglecontact
  var contact=props.contact
  var deleteContact=props.deleteContact

  const handleDelete=(index)=>{
    const confirm=window.confirm("are u sure you want to delete this contact ?")
    if(confirm){
      deleteContact(index)
      console.log("done");
    }
  }
  
  return (
    <div> 
      <center>
    <div className='container d-flex flex-row justify-content-between mt-4 mb-4'>
      <h1>ALL CONTACTS</h1>
      <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Add contacts</button>
    </div>
    <div className='container'>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">S No</th>
      <th scope="col">Name</th>
      <th scope="col">Phone no</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {contacts.length>0 ?  contacts.map((e,i)=>
    
    <tr key={i}>
      <th >{i}</th>
      <td>{e.name}</td>
      <td>{e.phonenumber}</td>
      <td>{e.email}</td>
      <td> <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={()=>getsinglecontact(i)}>Edit</button> 
      <button className='btn btn-danger' onClick={()=>handleDelete(i)}>Delete</button></td>
    </tr>
    ): <h1>no data to display</h1>}
  </tbody>
</table>
<AddEditContact editcontactData={contact}/>

</div>
    </center>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return {
    contacts:state.contacts,
    contact:state.contact
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    getsinglecontact:(index)=>{ dispatch(getsingleContact(index))
    },
    deleteContact:(index)=>{dispatch(deleteContact(index))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)