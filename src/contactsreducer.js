

const initialstate={
    contacts:  [{name:"nikhil",phonenumber:"1234512335",email:"n@gmail.com"},{name:"kumar",phonenumber:"23443",email:"234"}]
  }

export const contactsreducer = (state=initialstate,action) => {
    switch(action.type)
    {
        case 'ADD_CONTACT':{
            let contacts=[...state.contacts]
            contacts.push(action.payload)
            return {...state,contacts}
        }
        case 'GET_SINGLE_CONTACT':{
          
            return {...state,contact:{...state.contacts[action.index],id:action.index}}
        }
        case 'EDIT_CONTACT':{
            let contacts=[...state.contacts]
            contacts[action.index]=action.payload
            return {...state,contacts}
        }
        case 'DELETE_CONTACT':{
            let contacts=[...state.contacts]
            contacts.splice(action.index,1)
            return {...state,contacts}
        }
        default:
            return state
    }

}
  
export default contactsreducer