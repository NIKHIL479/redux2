import React,{useState,useRef,useEffect} from 'react'
import { addContact, editContact } from './action'
import { connect } from 'react-redux'
export const AddEditContact = ({addContact,editcontactData,editContact}) => {

  const [contact,setContact]=useState({name:"",phonenumber:"",email:""})
  const handleChange=(name,value)=>
  {
    let oldcontact={...contact}
  oldcontact[name]=value;
  setContact(oldcontact)
  }
  useEffect(()=>{
    if(editcontactData!==undefined)
    setContact(editcontactData)
  },[editcontactData])

  const handleSubmit=()=>{
    if(contact.id!==undefined)
    {
      editContact(contact,contact.id)
    }
    else{
addContact(contact)
    }
setContact({name:"",phonenumber:"",email:""})
closeRef.current.click()

  }
const closeRef=useRef()
  return ( 
<div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Contact</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={closeRef} onClick={()=>setContact({name:"",phonenumber:"",email:""})}></button>
      </div>
      <div className="modal-body">
      <form>
      <div className="">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={contact.name} onChange={(e)=>handleChange("name",e.target.value)} />
   
  </div>
  <div className="">
    <label htmlFor="exampleInputEmail1" className="form-label">Phone number</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={contact.phonenumber} onChange={(e)=>handleChange("phonenumber",e.target.value)}/>
   
  </div>
  <div className="">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={contact.email} onChange={(e)=>handleChange("email",e.target.value)}/>
  </div>


</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
      </div>
    </div>
  </div>
</div>

  )
}
const mapStateToProps=(state)=>{
  return {
    contacts:state.contacts
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    addContact:(contact)=>{dispatch(addContact(contact))},
      editContact:(contact,id)=>{dispatch(editContact(contact,id))},
   
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(AddEditContact)