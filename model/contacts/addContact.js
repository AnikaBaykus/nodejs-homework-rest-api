const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.join('db', 'contacts.json')

const addContact = async ({ name, email, phone }) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    const parseData = JSON.parse(data)
    const newContact = {
      id: Math.floor(Math.random() * 1000),
      name,
      email,
      phone,
    }

    parseData.push(newContact)

    await fs.writeFile(contactsPath, JSON.stringify(parseData), 'utf8')
    console.table(parseData)
    console.log(newContact)
    return newContact
  } catch (error) {
    console.error('Не удалось добавить новый контакт')
  }
}

module.exports = {
  addContact,
}
