const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.join('db', 'contacts.json')

const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    const parseData = JSON.parse(data)
    console.log(contactId)
    const contactById = await parseData.find(
      (contact) => contact.id === Number(contactId)
    )
    console.log(contactId)
    console.table(contactById)
    return contactById
  } catch (error) {
    console.error('Контакт не найден')
  }
}

module.exports = {
  getContactById,
}
