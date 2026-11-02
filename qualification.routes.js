import express from 'express'
import qualificationCtrl from '../controllers/qualification.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

router.route('/api/qualifications')
  .get(qualificationCtrl.list)                                   // get all qualifications
  .post(authCtrl.requireSignin, qualificationCtrl.create)        // add new qualification
  .delete(authCtrl.requireSignin, qualificationCtrl.removeAll)   // remove all qualifications

router.route('/api/qualifications/:qualificationId')
  .get(qualificationCtrl.read)                                   // get qualification by id
  .put(authCtrl.requireSignin, qualificationCtrl.update)         // update qualification by id
  .delete(authCtrl.requireSignin, qualificationCtrl.remove)      // remove qualification by id

router.param('qualificationId', qualificationCtrl.qualificationByID)

export default router
