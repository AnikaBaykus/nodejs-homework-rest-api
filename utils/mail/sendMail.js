const sgMail = require('@sendgrid/mail')
// const { InternalServerError } = require('http-errors')

const { SENDGRID_API_KEY } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

const sendMail = async (letter) => {
  try {
    const mail = { ...letter, from: 'anikbotanik@yandex.ru' }
    await sgMail.send(mail)
    return true
  } catch (error) {
    // throw console.log(`ошибка отправки письма ${error}`)
  }
}

module.exports = {
  sendMail
}
