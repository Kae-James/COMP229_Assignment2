import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import { expressjwt } from 'express-jwt'
import config from './../../config/config.js'

// POST /auth/signin - check email + password, return a signed JWT
const signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(401).json({ error: 'User not found' })

    if (!user.authenticate(req.body.password)) {
      return res.status(401).json({ error: "Email and password don't match." })
    }

    const token = jwt.sign({ _id: user._id }, config.jwtSecret)
    res.cookie('t', token, { expires: new Date(Date.now() + 9999 * 1000) })

    return res.json({
      token,
      user: { _id: user._id, name: user.name, email: user.email }
    })
  } catch (err) {
    return res.status(401).json({ error: 'Could not sign in' })
  }
}

// GET /auth/signout - clear the token cookie
const signout = (req, res) => {
  res.clearCookie('t')
  return res.status(200).json({ message: 'signed out' })
}

// Authentication: request must carry a valid token in "Authorization: Bearer <token>"
// On success the decoded token ({ _id }) is placed on req.auth
const requireSignin = expressjwt({
  secret: config.jwtSecret,
  algorithms: ['HS256'],
  requestProperty: 'auth'
})

// Authorization: signed-in user may only change their OWN user record
const hasAuthorization = (req, res, next) => {
  const authorized =
    req.profile && req.auth && req.profile._id.toString() === req.auth._id
  if (!authorized) {
    return res.status(403).json({ error: 'User is not authorized' })
  }
  next()
}

export default { signin, signout, requireSignin, hasAuthorization }
