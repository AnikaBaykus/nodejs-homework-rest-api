const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.join('db', 'contacts.json')

const updateContact = async (contactId, body) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    const parseData = JSON.parse(data)

    const contactById = await parseData.find((contact) => contact.id === Number(contactId))

    if (contactById) {
      const updatedContact = { ...contactById, ...body }
      const newData = parseData.map(contact => (
        (contact.id === Number(contactId) ? updatedContact : contact))
      )
      await fs.writeFile(contactsPath, JSON.stringify(newData, null, 2))
      return updatedContact
    }
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = { updateContact }
