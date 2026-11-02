import express from 'express'
import projectCtrl from '../controllers/project.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

router.route('/api/projects')
  .get(projectCtrl.list)                                   // get all projects
  .post(authCtrl.requireSignin, projectCtrl.create)        // add new project
  .delete(authCtrl.requireSignin, projectCtrl.removeAll)   // remove all projects

router.route('/api/projects/:projectId')
  .get(projectCtrl.read)                                   // get project by id
  .put(authCtrl.requireSignin, projectCtrl.update)         // update project by id
  .delete(authCtrl.requireSignin, projectCtrl.remove)      // remove project by id

router.param('projectId', projectCtrl.projectByID)

export default router
