import {createStore} from 'redux'
import contactsreducer from './contactsreducer'
const store=createStore(contactsreducer)
export default store