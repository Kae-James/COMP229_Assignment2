import Contact from '../models/contact.model.js'
import extend from 'lodash/extend.js'
import errorHandler from '../helpers/dbErrorHandler.js'

// POST /api/contacts — add new contact
const create = async (req, res) => {
  const contact = new Contact(req.body)
  try {
    await contact.save()
    return res.status(200).json({ message: "Contact successfully created!", contact })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// GET /api/contacts — get all contacts
const list = async (req, res) => {
  try {
    const contacts = await Contact.find()
    res.json(contacts)
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// Runs automatically whenever a URL contains :contactId
const contactByID = async (req, res, next, id) => {
  try {
    const contact = await Contact.findById(id)
    if (!contact) return res.status(404).json({ error: "Contact not found" })
    req.contact = contact          // pass it along to read/update/remove
    next()
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve contact" })
  }
}

// GET /api/contacts/:contactId — get contact by id
const read = (req, res) => res.json(req.contact)

// PUT /api/contacts/:contactId — update contact by id
const update = async (req, res) => {
  try {
    let contact = extend(req.contact, req.body)   // merge new values into existing
    await contact.save()
    res.json(contact)
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// DELETE /api/contacts/:contactId — remove contact by id
const remove = async (req, res) => {
  try {
    const deleted = await req.contact.deleteOne()
    res.json({ message: "Contact deleted", deleted })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// DELETE /api/contacts — remove all contacts
const removeAll = async (req, res) => {
  try {
    const result = await Contact.deleteMany({})
    res.json({ message: `${result.deletedCount} contact(s) deleted` })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

export default { create, list, contactByID, read, update, remove, removeAll }