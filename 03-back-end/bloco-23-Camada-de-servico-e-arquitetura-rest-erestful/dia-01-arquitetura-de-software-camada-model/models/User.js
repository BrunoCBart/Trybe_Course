const connection = require('./connection')


const isValid = (firstName, lastName, email, password) => {
  if (!firstName || !lastName || !email || !password) return false
  if (password.lenght < 6) return false;
  return true
}

const add = async (firstName, lastName, email, password) => {
  const [user] = await connection.execute(
   'INSERT INTO data_base.users(first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
  [firstName, lastName, email, password])
  console.log(user)
}

const update = async (id, firstName, lastName, email, password) => {
  const smt = await connection.execute(
    'UPDATE data_base.users SET first_name=?, last_Name=?, email=?, `password`=? WHERE id=?',
    [firstName, lastName, email, password, id]
  )
  console.log(smt)

}

module.exports = {isValid, add, update}