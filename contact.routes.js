import express from 'express'
import contactCtrl from '../controllers/contact.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

router.route('/api/contacts')
  // get all contacts
  .get(contactCtrl.list)   
  // add new contact                                 
  .post(contactCtrl.create)     
  // remove all contacts        
  .delete(authCtrl.requireSignin, contactCtrl.removeAll)   

router.route('/api/contacts/:contactId')
  // get contact by id
  .get(contactCtrl.read)     
  // update contact by id                              
  .put(authCtrl.requireSignin, contactCtrl.update)  
  // remove contact by id      
  .delete(authCtrl.requireSignin, contactCtrl.remove)      

router.param('contactId', contactCtrl.contactByID)

export default router
