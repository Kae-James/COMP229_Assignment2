import express from 'express'
import userCtrl from '../controllers/user.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

router.route('/api/users')
  .get(userCtrl.list)                                      // get all users (public)
  .post(userCtrl.create)                                   // add new user / sign up (public)
  .delete(authCtrl.requireSignin, userCtrl.removeAll)      // remove all users (signed in)

router.route('/api/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)                                    // signed in
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)       // own account only
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)    // own account only

router.param('userId', userCtrl.userByID)

export default router
