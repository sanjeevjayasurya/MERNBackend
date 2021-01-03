import User from '../models/user.model'
// lodash is used for updating details of an existing user 
import _ from lodash
import errorHandler from './error.controller'

const create = (req, res, next) => { }
const list = (req, res) => { }
const userByID = (req, res, next, id) => { }
const read = (req, res) => { }
const update = (req, res, next) => { }
const remove = (req, res, next) => { }

export default { create, userByID, read, list, remove, update }