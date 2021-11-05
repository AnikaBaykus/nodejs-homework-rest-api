const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.join('db', 'contacts.json')

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    const parseData = JSON.parse(data)
    console.table(parseData)
    return parseData
  } catch (error) {
    console.error('Не получилось открыть список контактов')
  }
}

module.exports = {
  listContacts,
}
