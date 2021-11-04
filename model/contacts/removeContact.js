const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.join('db', 'contacts.json')

const removeContact = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    const parseData = JSON.parse(data)

    const contact = parseData.find((item) => (
      item.id === Number(contactId)
    ))

    if (contact) {
      const newDate = parseData.filter(
        (contact) => contact.id !== Number(contactId)
      )
      await fs.writeFile(contactsPath, JSON.stringify(newDate), 'utf8')
      console.table(newDate)
      return newDate
    }
  } catch (error) {
    console.error('Такой контакт не найден')
  }
}
module.exports = {
  removeContact,
}
