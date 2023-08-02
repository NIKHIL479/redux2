 export const addContact=(contact)=>{
    return{
        type:'ADD_CONTACT',
        payload:contact   
    }
}
export const getsingleContact=(index)=>{
    return{
        type:'GET_SINGLE_CONTACT',
        index
    }
}
export const editContact=(contact,index)=>{
    return{
        type:'EDIT_CONTACT',
        payload:contact,
        index
    }
}
export const deleteContact=(index)=>{
    return{
        type:'DELETE_CONTACT',
        index
    }
}
